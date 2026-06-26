import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NestCraft — Free Interior Consultation Ranchi | WhatsApp & Call',
  description:
    'Get in touch with NestCraft for a free home interior consultation in Ranchi. Call +91 62051 21214, WhatsApp, or fill the form — we respond within 24 hours. No pressure, no obligations.',
  alternates: {
    canonical: 'https://nest-craft-six.vercel.app/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
