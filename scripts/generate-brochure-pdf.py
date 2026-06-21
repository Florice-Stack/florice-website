#!/usr/bin/env python3
"""Generate a minimal valid PDF without external dependencies."""

def esc(text):
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")

lines = [
    ("title", "Florice Milling Spare & Solution"),
    ("title", "Capabilities Overview · June 2026"),
    ("gap", ""),
    ("heading", "Consulting Services"),
    ("body", "Plant assessment and recovery audit"),
    ("body", "Machinery selection (vendor-neutral)"),
    ("body", "Process optimization and parameter tuning"),
    ("body", "Expansion planning and layout review"),
    ("body", "Commissioning support and handover"),
    ("body", "Technical troubleshooting"),
    ("gap", ""),
    ("heading", "Industries Served"),
    ("body", "Rice mills (2–40 TPH)"),
    ("body", "Wheat / flour mills"),
    ("body", "Parboiling units"),
    ("body", "Grain cleaning and packaging lines"),
    ("body", "Modernization and automation upgrades"),
    ("gap", ""),
    ("heading", "Machinery Expertise"),
    ("body", "Pre-cleaners, destoners, hullers, whiteners"),
    ("body", "Plansifters, purifiers, hammer mills"),
    ("body", "Conveyors, pneumatic systems, bagging lines"),
    ("body", "PLC, SCADA, aspiration and spouting"),
    ("gap", ""),
    ("heading", "Contact"),
    ("body", "consult@floricemilling.com"),
    ("body", "+91 98765 43210"),
    ("body", "Consulting worldwide · HQ India"),
]

parts = ["BT", "50 760 Td"]
for kind, text in lines:
    if kind == "gap":
        parts.append("0 -10 Td")
    elif kind == "title":
        parts.append("/F1 14 Tf")
        parts.append(f"({esc(text)}) Tj")
        parts.append("0 -18 Td")
        parts.append("/F1 11 Tf")
    elif kind == "heading":
        parts.append("/F1 12 Tf")
        parts.append(f"({esc(text)}) Tj")
        parts.append("0 -16 Td")
        parts.append("/F1 11 Tf")
    else:
        parts.append(f"(- {esc(text)}) Tj")
        parts.append("0 -14 Td")
parts.append("ET")

stream = "\n".join(parts) + "\n"
stream_bytes = stream.encode("latin-1", errors="replace")

objects = [
    b"<< /Type /Catalog /Pages 2 0 R >>",
    b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    f"<< /Length {len(stream_bytes)} >>\nstream\n".encode() + stream_bytes + b"endstream",
    b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
]

out = "/Users/ankitrathi/Projects/florice-milling/florice-website/assets/florice-capabilities-brochure.pdf"
with open(out, "wb") as f:
    f.write(b"%PDF-1.4\n")
    offsets = [0]
    for i, body in enumerate(objects, start=1):
        offsets.append(f.tell())
        f.write(f"{i} 0 obj\n".encode())
        f.write(body)
        f.write(b"\nendobj\n")
    xref = f.tell()
    f.write(f"xref\n0 {len(objects)+1}\n".encode())
    f.write(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        f.write(f"{off:010d} 00000 n \n".encode())
    f.write(b"trailer<< /Size ")
    f.write(str(len(objects) + 1).encode())
    f.write(b" /Root 1 0 R >>\nstartxref\n")
    f.write(str(xref).encode())
    f.write(b"\n%%EOF\n")

print("Created", out)
