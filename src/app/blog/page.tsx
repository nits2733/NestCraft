import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Home Interior Tips & Guides for Ranchi Homeowners | NestCraft Blog',
  description:
    'Expert tips on home interiors, renovation costs, and design ideas specifically for Ranchi homeowners. Practical guides to help you make informed decisions.',
};

const blogPosts = [
  {
    title: 'What Does a 3BHK Interior Cost in Ranchi in 2026?',
    excerpt:
      'A detailed breakdown of interior costs for a 3BHK flat in Ranchi — room by room, material by material. Based on real project data and current market rates.',
    slug: '3bhk-interior-cost-ranchi-2026',
  },
  {
    title: '10 Mistakes First-Time Homeowners Make During Renovation',
    excerpt:
      'From hiring without references to paying everything upfront — learn the costly mistakes Ranchi homeowners make and how to avoid them.',
    slug: 'first-time-homeowner-renovation-mistakes',
  },
  {
    title: 'How to Choose the Right Interior Designer in Ranchi',
    excerpt:
      'What to look for, what questions to ask, and red flags to watch out for when hiring an interior designer or contractor in Ranchi.',
    slug: 'choose-interior-designer-ranchi',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-orange-50">
        {/* Hero */}
        <section className="py-16 md:py-20 px-4 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Interior Design Tips for Ranchi Homeowners
            </h1>
            <p className="text-lg text-slate-300">
              Practical guides, cost breakdowns, and expert advice to help you make
              better decisions about your home interiors.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col"
              >
                {/* Placeholder image area */}
                <div className="h-40 bg-gradient-to-br from-emerald-100 to-amber-50 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-3 flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-slate-600 mb-4">
              Want to be notified when new articles are published?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Subscribe for Updates
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
