import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'About NestCraft — Trusted Interior Design Company in Ranchi',
  description:
    'NestCraft is on a mission to make home interiors trustworthy, transparent, and stress-free for Ranchi homeowners. No hidden costs, milestone-based payments, 1-year warranty on all work.',
  alternates: {
    canonical: 'https://nest-craft-six.vercel.app/about',
  },
};

const values = [
  {
    title: 'Trust First',
    description:
      'Every decision we make starts with "will this build trust?" Milestone payments, daily updates, and transparent pricing aren\'t just features — they\'re our DNA.',
    icon: '🤝',
  },
  {
    title: 'Radical Transparency',
    description:
      'No hidden costs, no vague "package" pricing, no surprise add-ons. Every rupee is accounted for in your itemized quotation before work begins.',
    icon: '🔍',
  },
  {
    title: 'Execution Obsession',
    description:
      'Beautiful designs mean nothing if execution is sloppy. We obsess over the details — clean edges, proper finishing, on-time delivery.',
    icon: '⚡',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-orange-50">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              We&apos;re Fixing Home Renovation in Ranchi
            </h1>
            <p className="text-lg text-slate-300">
              Because getting your dream home shouldn&apos;t feel like a nightmare.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              The Problem We Witnessed
            </h2>
            <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
              <p>
                Every year, thousands of families in Ranchi get possession of their
                new homes — excited to move in, eager to set up their space. But what
                follows is often months of frustration.
              </p>
              <p>
                Unreliable contractors who vanish mid-project. Carpenters who promise
                &ldquo;next week&rdquo; and deliver next month. Painters who cut
                corners when you&apos;re not watching. Electricians who leave wires
                exposed. And the worst part? No one to hold accountable.
              </p>
              <p>
                We saw families overpay by 30–40% simply because they didn&apos;t
                know market rates. We saw beautiful homes ruined by poor execution. We
                saw people afraid to even start their interiors because the entire
                process felt risky.
              </p>
              <p className="font-medium text-slate-900">
                NestCraft exists to fix this. To bring trust, transparency, and
                accountability to home interiors in Ranchi.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 px-4 bg-white border-y border-slate-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-xl text-slate-700">
              To make every homeowner in Ranchi confident that their home interiors
              will be delivered on time, on budget, and exactly as promised — with
              zero stress and full transparency.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ranchi */}
        <section className="py-16 px-4 bg-white border-y border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Why Ranchi? Why Now?
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Ranchi is experiencing an unprecedented real estate boom. New
                townships, apartment complexes, and gated communities are coming up
                across Kanke, Argora, Harmu, Bariatu, and beyond. Thousands of
                families are getting possession every quarter.
              </p>
              <p>
                Yet, there&apos;s no organized interior design player in the city.
                Homeowners are stuck choosing between expensive architects who
                don&apos;t manage execution, or local contractors who lack design
                sense and accountability.
              </p>
              <p>
                Ranchi deserves better. The city&apos;s growing middle class — IT
                professionals, government employees, business owners — they want
                quality, they can afford it, but they don&apos;t trust the current
                options.
              </p>
              <p className="font-medium text-slate-900">
                NestCraft bridges this gap. Design-led, execution-focused, and built
                on trust.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">The Team</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <p className="text-slate-700 mb-4">
                NestCraft is founded by a team that combines deep technology
                expertise with on-ground understanding of Ranchi&apos;s home
                renovation landscape. We&apos;ve personally experienced the pain of
                home interiors and decided to build the solution we wished existed.
              </p>
              <p className="text-slate-700">
                We&apos;re assembling a team of experienced designers, skilled
                craftsmen, and project managers who share our obsession with quality
                and transparency.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-emerald-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join the NestCraft Journey
            </h2>
            <p className="text-emerald-100 mb-8">
              Whether you&apos;re a homeowner, a skilled craftsman, or someone who
              believes in our mission — we&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
