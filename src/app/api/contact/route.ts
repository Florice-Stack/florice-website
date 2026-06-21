import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  industry: string;
  message: string;
  botField?: string;
};

const industryLabels: Record<string, string> = {
  rice: "Rice mill",
  wheat: "Wheat / flour mill",
  parboiling: "Parboiling unit",
  cleaning: "Grain cleaning & grading",
  packaging: "Packaging / dispatch line",
  modernization: "Modernization or expansion",
  other: "Other grain processing",
};

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { error: "Contact form is not configured. Set WEB3FORMS_ACCESS_KEY in Vercel." },
      { status: 503 },
    );
  }

  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.botField) {
    return NextResponse.json({ success: true });
  }

  const { name, company, email, phone, industry, message } = body;

  if (!name?.trim() || !company?.trim() || !email?.trim() || !industry?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const plantType = industryLabels[industry] ?? industry;
  const formattedMessage = [
    `Company / Mill: ${company.trim()}`,
    `Plant type: ${plantType}`,
    phone?.trim() ? `Phone: ${phone.trim()}` : null,
    "",
    message.trim(),
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: name.trim(),
      email: email.trim(),
      subject: `Florice consultation request — ${company.trim()}`,
      message: formattedMessage,
      from_name: "Florice Website",
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    return NextResponse.json(
      { error: result.message ?? "Unable to send message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
