'use client';

import Link from 'next/link';
import { MotionSection } from '@/components/motion/MotionSection';
import { JsonLd, productSchema, softwareAppSchema } from '@/components/JsonLd';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Gauge,
  ClipboardCheck,
  CalendarCheck,
  Boxes,
  BarChart3,
  ShieldCheck,
  Bot,
  Smartphone,
} from 'lucide-react';

export default function FeaturesPage() {
  const { t } = useLanguage();

  const coreModules = [
    {
      title: t.featuresPage.modules.items[0].title,
      Icon: Gauge,
      details: t.featuresPage.modules.items[0].details,
    },
    {
      title: t.featuresPage.modules.items[1].title,
      Icon: ClipboardCheck,
      details: t.featuresPage.modules.items[1].details,
    },
    {
      title: t.featuresPage.modules.items[2].title,
      Icon: CalendarCheck,
      details: t.featuresPage.modules.items[2].details,
    },
    {
      title: t.featuresPage.modules.items[3].title,
      Icon: Boxes,
      details: t.featuresPage.modules.items[3].details,
    },
    {
      title: t.featuresPage.modules.items[4].title,
      Icon: BarChart3,
      details: t.featuresPage.modules.items[4].details,
    },
    {
      title: t.featuresPage.modules.items[5].title,
      Icon: ShieldCheck,
      details: t.featuresPage.modules.items[5].details,
    },
  ];

  const reliabilityFeatures = t.featuresPage.reliability.features;

  const mobilityHighlights = t.featuresPage.mobility.highlights;

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={softwareAppSchema} />
      <main>
        <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-brand">
                {t.featuresPage.hero.title}
              </h1>
              <p className="mt-4 text-lg text-slate-700">{t.featuresPage.hero.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/demo" className="btn-primary">
                  {t.featuresPage.hero.ctaPrimary}
                </Link>
                <Link href="/contact" className="btn-outline">
                  {t.featuresPage.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h2 className="text-lg font-semibold text-brand">
                {t.featuresPage.hero.differentiators.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {t.featuresPage.hero.differentiators.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <MotionSection className="section">
          <div className="container-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-brand">{t.featuresPage.modules.title}</h2>
              <p className="mt-3 text-slate-600">{t.featuresPage.modules.subtitle}</p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {coreModules.map(({ title, details, Icon }) => (
                <article
                  key={title}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-lg font-semibold text-brand">{title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {details.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section section-muted">
          <div className="container-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand">
                {t.featuresPage.reliability.title}
              </h2>
              <p className="mt-3 text-slate-600">{t.featuresPage.reliability.subtitle}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {reliabilityFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">
                {t.featuresPage.reliability.dashboards.title}
              </h3>
              <dl className="mt-6 space-y-4 text-sm text-slate-600">
                {t.featuresPage.reliability.dashboards.items.map((item) => (
                  <div key={item.title}>
                    <dt className="font-semibold text-brand">{item.title}</dt>
                    <dd className="mt-1 text-slate-500">{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section">
          <div className="container-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold text-brand">{t.featuresPage.mobility.title}</h2>
              <p className="mt-3 text-slate-600">{t.featuresPage.mobility.subtitle}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {mobilityHighlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-4 text-sm text-slate-600">
                {t.featuresPage.mobility.offlineNote}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand">
                {t.featuresPage.mobility.roles.title}
              </h3>
              <p className="mt-4 text-slate-600">{t.featuresPage.mobility.roles.description}</p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="section">
          <div className="container-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <h2 className="text-3xl font-semibold text-brand">{t.featuresPage.cta.title}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600">{t.featuresPage.cta.subtitle}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/demo" className="btn-primary">
                  {t.featuresPage.cta.primary}
                </Link>
                <Link href="/contact" className="btn-outline">
                  {t.featuresPage.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </MotionSection>
      </main>
    </>
  );
}
