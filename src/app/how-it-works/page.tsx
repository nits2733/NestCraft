import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'How NestCraft Works — 6-Step Home Interior Process in Ranchi',
  description:
    'Our 6-step transparent process takes you from possession keys to a beautifully designed home in 45 days. Milestone-based payments, daily updates, 1-year warranty. Stress-free interior execution in Ranchi.',
  alternates: {
    canonical: 'https://nestcraft.in/how-it-works',
  },
};

const steps = [
  {
    number: 1,
    title: 'Free Consultation',
    subtitle: 'Day 1',
    description:
      `We visit your home (or connect on a video call), understand your lifestyle, preferences, and budget. You get a clear picture of what's possible — no pressure, no obligations.`,
    deliverables: [
      'Space assessment & measurement',
      'Lifestyle & preference discussion',
      'Budget range guidance',
      'Initial ideas & possibilities shared',
    ],
    icon: '📋',
  },
  {
    number: 2,
    title: 'Design & Planning',
    subtitle: 'Week 1–2',
    description:
      'Our designers create detailed 3D renders of every room so you can see exactly how your home will look before a single nail is hammered. Choose materials, colors, and finishes at this stage.',
    deliverables: [
      '3D room-by-room visualization',
      'Material & color palette selection',
      'Bill of Quantities (BOQ) preparation',
      'Layout optimization with Vastu options',
    ],
    icon: '✏️',
  },
  {
    number: 3,
    title: 'Transparent Quotation',
    subtitle: 'Week 2',
    description:
      'You receive an itemized quotation — every material, every labor charge, every fixture listed clearly. No lump-sum "package" pricing that hides markups.',
    deliverables: [
      'Item-wise cost breakdown',
      'Material brand & grade specified',
      'Labor charges clearly listed',
      'No hidden costs — what you see is what you pay',
    ],
    icon: '📊',
  },
  {
    number: 4,
    title: 'Milestone-Based Execution',
    subtitle: 'Week 3–10',
    description:
      'Work begins with clear milestones. You pay only when each milestone is completed to your satisfaction. Daily photo updates via WhatsApp keep you informed without needing to visit the site daily.',
    deliverables: [
      'Daily progress photo updates',
      'Milestone-based payment schedule',
      'Quality checks at each stage',
      'Dedicated project manager assigned',
    ],
    icon: '🏗️',
  },
  {
    number: 5,
    title: 'Handover & Warranty',
    subtitle: 'Completion Day',
    description:
      'Before handover, we do a thorough snag walkthrough together. Every scratch, every misalignment is fixed. You get a 1-year comprehensive warranty on all work.',
    deliverables: [
      'Joint snag list walkthrough',
      'All issues fixed before handover',
      '1-year warranty on workmanship',
      'Material warranties as per brand terms',
    ],
    icon: '🔑',
  },
  {
    number: 6,
    title: 'Ongoing Maintenance',
    subtitle: 'Year 1+',
    description:
      `Your relationship with NestCraft doesn't end at handover. Our Home Passport keeps a digital record of everything in your home, and our AMC ensures ongoing maintenance is hassle-free.`,
    deliverables: [
      'Digital Home Passport (all specs & warranties)',
      'Annual Maintenance Contract option',
      'Priority support for any issues',
      'Touch-up & servicing reminders',
    ],
    icon: '🛡️',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-orange-50">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              From Possession Keys to Beautiful Home
            </h1>
            <p className="text-lg text-slate-300">
              A transparent, milestone-based process designed to give you peace of
              mind at every step. No surprises, no stress.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200" />

              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.number} className="relative flex gap-6 md:gap-10">
                    {/* Step number circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h2 className="text-xl font-bold text-slate-900">
                          Step {step.number}: {step.title}
                        </h2>
                        <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full w-fit">
                          {step.subtitle}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 mb-2">
                          What you get:
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {step.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-700"
                            >
                              <span className="text-emerald-700 mt-0.5">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 px-4 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Why Homeowners Trust This Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">💰</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Pay Only on Milestones
                </h3>
                <p className="text-sm text-slate-600">
                  No large upfront payments. You release funds only when you&apos;re
                  satisfied with completed work.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  Daily Updates
                </h3>
                <p className="text-sm text-slate-600">
                  Photo & video updates on WhatsApp every single day. You&apos;re
                  always in the loop without visiting the site.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  1-Year Warranty
                </h3>
                <p className="text-sm text-slate-600">
                  Comprehensive warranty on all workmanship. Any issue — we fix it
                  free within the warranty period.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-emerald-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-emerald-100 mb-8">
              Book your free consultation — zero commitment, zero pressure. Let&apos;s
              just talk about what&apos;s possible for your home.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
