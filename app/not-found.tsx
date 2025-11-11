import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Maintafox',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-brand mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-slate-900 mb-4">Looking for something specific?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/demo"
              className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/features"
              className="px-4 py-2 bg-white text-brand border border-brand rounded-lg hover:bg-brand/5 transition-colors"
            >
              View Features
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 bg-white text-brand border border-brand rounded-lg hover:bg-brand/5 transition-colors"
            >
              See Pricing
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white text-brand border border-brand rounded-lg hover:bg-brand/5 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand hover:underline font-semibold"
        >
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
