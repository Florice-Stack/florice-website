export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export const privacyPolicy: LegalSection[] = [
  {
    title: "Introduction",
    paragraphs: [
      "Florice Milling Spare & Solution (“Florice”, “we”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us about milling consulting services.",
      "By using this website, you agree to the practices described below.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect information you provide directly, such as your name, company or mill name, email address, phone number, plant type, and details you include in consultation requests or correspondence.",
      "We may automatically collect limited technical data when you browse our site, including IP address, browser type, device information, and pages visited, through standard server logs or analytics tools.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "We use your information to respond to inquiries, prepare consulting proposals, deliver services you request, improve our website, and communicate with you about relevant follow-up.",
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Sharing of Information",
    paragraphs: [
      "We may share information with service providers who assist us in operating our website, hosting, email delivery, or form processing, subject to confidentiality obligations.",
      "We may disclose information if required by law, regulation, legal process, or to protect the rights, property, or safety of Florice, our clients, or others.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain contact and inquiry information for as long as needed to respond to your request, maintain business records, and comply with applicable legal obligations.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We implement reasonable administrative and technical measures to protect information against unauthorized access, alteration, or disclosure. No method of transmission over the internet is completely secure.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You may request access to, correction of, or deletion of personal information we hold about you, subject to legal and contractual limits, by contacting us at the email address listed on this website.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The revised version will be posted on this website with an updated effective date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For privacy-related questions, contact Florice Milling Spare & Solution at consult@floricemilling.com.",
    ],
  },
];

export const termsOfUse: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "These Terms of Use govern your access to and use of the Florice Milling Spare & Solution website. By accessing or using this site, you agree to these Terms.",
      "If you do not agree, please do not use this website.",
    ],
  },
  {
    title: "About Our Services",
    paragraphs: [
      "Florice provides independent consulting related to rice milling, wheat flour milling, grain processing, machinery selection, and plant optimization. Information on this website is for general business purposes and does not constitute a binding offer until confirmed in a separate written agreement.",
    ],
  },
  {
    title: "Permitted Use",
    paragraphs: [
      "You may use this website for lawful purposes only. You agree not to misuse the site, attempt unauthorized access, interfere with its operation, or use automated means to scrape content without our prior written consent.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website, including text, graphics, logos, diagrams, and downloadable materials, is owned by or licensed to Florice and protected by applicable intellectual property laws.",
      "You may not copy, reproduce, distribute, or create derivative works from site content without our prior written permission, except for personal, non-commercial reference or as allowed by law.",
    ],
  },
  {
    title: "Consultation Requests",
    paragraphs: [
      "Submitting a contact or consultation form does not create a client relationship. We will review your inquiry and respond separately regarding scope, availability, and commercial terms.",
      "You represent that information you submit is accurate to the best of your knowledge.",
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "Website content is provided on an “as is” and “as available” basis. While we strive for accuracy, we make no warranties, express or implied, regarding completeness, reliability, or suitability for any particular plant or project.",
      "Technical recommendations require site-specific assessment and should not be relied upon as sole basis for capital expenditure or operational decisions.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Florice shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website.",
      "Our total liability for any claim relating to the website shall not exceed the amount you paid to us, if any, for services directly related to that claim in the twelve months preceding the event giving rise to the claim.",
    ],
  },
  {
    title: "Third-Party Links",
    paragraphs: [
      "This website may reference or link to third-party resources. We are not responsible for the content, policies, or practices of third-party websites or services.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of India, without regard to conflict of law principles. Courts in India shall have exclusive jurisdiction over disputes arising from these Terms or use of this website, unless otherwise agreed in writing.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may revise these Terms at any time by posting an updated version on this website. Continued use of the site after changes constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these Terms may be directed to consult@floricemilling.com.",
    ],
  },
];

export const legalMeta = {
  privacy: {
    title: "Privacy Policy",
    effectiveDate: "June 2026",
  },
  terms: {
    title: "Terms of Use",
    effectiveDate: "June 2026",
  },
} as const;
