import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🏠</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">404</h1>
          <h2 className="text-xl font-semibold text-slate-700 mb-4">
            Looks like this room doesn&apos;t exist yet
          </h2>
          <p className="text-slate-600 mb-8">
            The page you&apos;re looking for might have been moved, or perhaps
            it&apos;s still being designed. Let&apos;s get you back home.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
