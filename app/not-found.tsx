'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-brand mb-4">{t.notFound.title}</h1>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.notFound.subtitle}</h2>
        <p className="text-lg text-slate-600 mb-8">{t.notFound.description}</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-slate-900 mb-4">{t.notFound.lookingFor}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/demo"
              className="px-4 py-2 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors"
            >
              {t.notFound.demo}
            </Link>
            <Link
              href="/features"
              className="px-4 py-2 bg-white text-brand border border-brand rounded-lg hover:bg-brand/5 transition-colors"
            >
              {t.notFound.features}
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 bg-white text-brand border border-brand rounded-lg hover:bg-brand/5 transition-colors"
            >
              {t.notFound.pricing}
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white text-brand border border-brand rounded-lg hover:bg-brand/5 transition-colors"
            >
              {t.notFound.contact}
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand hover:underline font-semibold"
        >
          {t.notFound.backHome}
        </Link>
      </div>
    </div>
  );
}
