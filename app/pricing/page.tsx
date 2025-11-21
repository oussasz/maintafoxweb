'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-brand/5 to-slate-100">
        <div className="container-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand">{t.pricingPage.hero.title}</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            {t.pricingPage.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section">
        <div className="container-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.pricingPage.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200 ${
                  plan.badge ? 'ring-2 ring-accent scale-105' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-orange-600 px-4 py-1 text-sm font-semibold text-white">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-brand">{plan.name}</h2>
                  <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  className={`block text-center rounded-xl px-6 py-3 font-semibold transition-all ${
                    plan.badge
                      ? 'bg-accent text-white hover:bg-orange-600 shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 text-brand hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-12 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-brand mb-12">
            {t.pricingPage.faq.title}
          </h2>

          <div className="space-y-6">
            {t.pricingPage.faq.items.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-brand text-lg mb-2">{item.question}</h3>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-brand via-brand-dark to-slate-900 text-white">
        <div className="container-12 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.pricingPage.cta.title}</h2>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            {t.pricingPage.cta.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/demo" className="btn-primary bg-accent hover:bg-orange-600">
              {t.pricingPage.cta.primary}
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white/10">
              {t.pricingPage.cta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
