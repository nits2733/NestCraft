import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Interior Cost Calculator Ranchi — Free Instant Estimate',
  description:
    'Calculate your home interior costs in Ranchi instantly. Get room-wise estimates for 1BHK to 4BHK flats. ₹400–₹1500/sqft based on quality. Free, no commitment required.',
  alternates: {
    canonical: 'https://nestcraft.in/cost-calculator',
  },
};

export default function CostCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
