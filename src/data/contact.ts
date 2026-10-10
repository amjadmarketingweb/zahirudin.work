import { withBase } from '@/utils/urls';

export type Contact = {
  introduction: string;
  email: {
    address: string;
    href: string;
  };
  whatsapp?: {
    display: string;
    href: string;
  };
  website: {
    label: string;
    href: string;
  };
  location: string;
  cv: {
    label: string;
    href: string;
    downloadName: string;
  };
  otherProfiles: Array<{
    label: string;
    href: string;
  }>;
};

export const contact: Contact = {
  introduction:
    "I welcome meaningful conversations about HR Business Partnering, Talent, Learning & Development, Organisational Development, workforce strategy, organisation design, leadership opportunities and consulting engagements.",
  email: {
    address: "zahierkhairul@gmail.com",
    href: "mailto:zahierkhairul@gmail.com",
  },
  whatsapp: {
    display: "+60 18-666 2077",
    href: "https://wa.me/60186662077",
  },
  website: {
    label: "zahirudin.work",
    href: "https://zahirudin.work",
  },
  location: "Kuala Lumpur, Malaysia",
  cv: {
    label: "Download CV",
    href: withBase('/cv/Muhammad-Zahiruddin-CV.pdf'),
    downloadName: "Muhammad-Zahiruddin-CV.pdf",
  },
  otherProfiles: [],
};
