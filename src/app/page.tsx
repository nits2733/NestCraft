import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import ProblemSection from '@/components/sections/problem-section';
import SolutionSection from '@/components/sections/solution-section';
import ServicesOverview from '@/components/sections/services-overview';
import TrustSignals from '@/components/sections/trust-signals';
import SocialProof from '@/components/sections/social-proof';
import FAQ from '@/components/sections/faq-section';
import CTASection from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesOverview />
        <TrustSignals />
        <SocialProof />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
