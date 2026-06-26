import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Interior Design Services in Ranchi — Modular Kitchen, Wardrobes & More',
  description:
    'Complete home interior services in Ranchi — modular kitchens, wardrobes, painting, electrical, plumbing, and maintenance. Transparent pricing from ₹50K. Milestone-based execution with 1-year warranty.',
  alternates: {
    canonical: 'https://nestcraft.in/services',
  },
};

const services = [
  {
    icon: '🏠',
    title: 'Interior Design & Space Planning',
    description:
      'Stop guessing what will look good. Our designers create functional, beautiful spaces tailored to how your family actually lives — not cookie-cutter templates.',
    features: [
      '3D visualization before execution',
      'Vastu-compliant layouts available',
      'Space optimization for compact Ranchi apartments',
      'Material & color consultation included',
    ],
    priceRange: '₹50,000 – ₹2,00,000',
  },
  {
    icon: '🍳',
    title: 'Modular Kitchen',
    description:
      'No more dealing with unreliable local carpenters for your kitchen. Get factory-finished modular kitchens with soft-close hardware, proper waterproofing, and a 10-year warranty.',
    features: [
      'ISI-certified hardware & materials',
      'Customized to your cooking style',
      'Waterproof & termite-proof cabinets',
      'Installation in 15–20 days',
    ],
    priceRange: '₹1,50,000 – ₹6,00,000',
  },
  {
    icon: '🎨',
    title: 'Painting & Wall Finishes',
    description:
      'End the cycle of peeling paint and uneven finishes. We use premium paints with proper surface preparation — so your walls look great for years, not months.',
    features: [
      'Wall putty, primer & 2-coat finish as standard',
      'Texture, stencil & accent wall options',
      'Branded paints only (Asian, Berger, Dulux)',
      'Clean, furniture-covered execution',
    ],
    priceRange: '₹30,000 – ₹2,00,000',
  },
  {
    icon: '🪵',
    title: 'Carpentry & Wardrobes',
    description:
      'Custom wardrobes and storage that actually fit your space. No more ill-fitting furniture from local markets that falls apart in two monsoons.',
    features: [
      'Modular & custom options available',
      'BWR-grade plywood with laminate finish',
      'Soft-close hinges & channels',
      'TV units, shoe racks, study tables & more',
    ],
    priceRange: '₹80,000 – ₹4,00,000',
  },
  {
    icon: '💡',
    title: 'Electrical & Lighting',
    description:
      'Proper electrical planning prevents future headaches. We handle complete rewiring, switch upgrades, and lighting design that transforms the feel of your home.',
    features: [
      'Complete wiring with ISI-certified cables',
      'Ambient, task & accent lighting design',
      'Smart home integration ready',
      'MCB panel upgrade & safety compliance',
    ],
    priceRange: '₹40,000 – ₹2,50,000',
  },
  {
    icon: '🪨',
    title: 'Flooring & Tiling',
    description:
      'The foundation of any beautiful home. We source quality tiles, handle expert laying with proper leveling, and ensure no hollow spots or uneven grout lines.',
    features: [
      'Vitrified, marble, wooden & vinyl options',
      'Bathroom anti-skid tiling',
      'Professional leveling & waterproofing',
      'Material sourcing at contractor rates',
    ],
    priceRange: '₹50,000 – ₹3,00,000',
  },
  {
    icon: '🚿',
    title: 'Plumbing & Waterproofing',
    description:
      'Leakages and seepage are the #1 complaint in Ranchi homes. We fix it right — with proper waterproofing membranes, quality fittings, and pressure testing.',
    features: [
      'Complete bathroom plumbing overhaul',
      'Terrace & bathroom waterproofing',
      'CPVC/PPR piping with warranty',
      'Water pressure testing before handover',
    ],
    priceRange: '₹30,000 – ₹1,50,000',
  },
  {
    icon: '🔧',
    title: 'Home Maintenance (AMC)',
    description:
      'Your home needs care after the interiors are done. Our Annual Maintenance Contract covers routine fixes, touch-ups, and emergency repairs — so you never chase a carpenter again.',
    features: [
      'Quarterly inspection visits',
      'Priority response for emergencies',
      'Minor repairs & touch-ups included',
      'Appliance & fixture servicing',
    ],
    priceRange: '₹12,000 – ₹36,000/year',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-orange-50">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Complete Home Interior Services in Ranchi
            </h1>
            <p className="text-lg text-slate-300">
              From design to execution to maintenance — everything your home needs
              under one roof. Transparent pricing, milestone-based payments, zero
              surprises.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 mb-5">{service.description}</p>
                    <ul className="grid md:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <span className="text-emerald-700 mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <span className="text-sm font-medium text-slate-500">
                        Price Range: {service.priceRange}
                      </span>
                      <a
                        href="/contact"
                        className="inline-block px-6 py-2.5 bg-emerald-700 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors"
                      >
                        Get Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 bg-emerald-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-emerald-100 mb-8">
              Book a free consultation with our design team. We&apos;ll visit your
              home, understand your needs, and give you a transparent quote — no
              pressure, no obligations.
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
