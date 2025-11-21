'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const milestones = [
    {
      year: t.aboutPage.milestones.items[0].year,
      title: t.aboutPage.milestones.items[0].title,
      description: t.aboutPage.milestones.items[0].description,
    },
    {
      year: t.aboutPage.milestones.items[1].year,
      title: t.aboutPage.milestones.items[1].title,
      description: t.aboutPage.milestones.items[1].description,
    },
    {
      year: t.aboutPage.milestones.items[2].year,
      title: t.aboutPage.milestones.items[2].title,
      description: t.aboutPage.milestones.items[2].description,
    },
    {
      year: t.aboutPage.milestones.items[3].year,
      title: t.aboutPage.milestones.items[3].title,
      description: t.aboutPage.milestones.items[3].description,
    },
  ];

  const values = [
    {
      title: t.aboutPage.values.items[0].title,
      detail: t.aboutPage.values.items[0].detail,
    },
    {
      title: t.aboutPage.values.items[1].title,
      detail: t.aboutPage.values.items[1].detail,
    },
    {
      title: t.aboutPage.values.items[2].title,
      detail: t.aboutPage.values.items[2].detail,
    },
    {
      title: t.aboutPage.values.items[3].title,
      detail: t.aboutPage.values.items[3].detail,
    },
  ];

  const leadership = [
    {
      name: t.aboutPage.leadership.items[0].name,
      role: t.aboutPage.leadership.items[0].role,
      bio: t.aboutPage.leadership.items[0].bio,
      link: '/founder-cv',
    },
  ];

  return (
    <>
      <main>
        <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-100">
          <div className="container-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-brand">
                {t.aboutPage.hero.title}
              </h1>
              <p className="mt-4 text-lg text-slate-700">{t.aboutPage.hero.subtitle}</p>
              <p className="mt-4 text-slate-700">{t.aboutPage.hero.mission}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h2 className="text-lg font-semibold text-brand">
                {t.aboutPage.hero.fastFacts.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {t.aboutPage.hero.fastFacts.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand">{t.aboutPage.story.title}</h2>
              <p className="mt-3 text-slate-600">{t.aboutPage.story.p1}</p>
              <p className="mt-3 text-slate-600">{t.aboutPage.story.p2}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-brand">
                {t.aboutPage.story.playbook.title}
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-slate-600">
                {t.aboutPage.story.playbook.steps.map((step) => (
                  <li key={step.title}>
                    <strong className="text-brand">{step.title}</strong> {step.desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container-12">
            <h2 className="text-3xl font-semibold text-brand">{t.aboutPage.milestones.title}</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-4">
              {milestones.map((item) => (
                <div
                  key={item.year}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {item.year}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-brand">{t.aboutPage.values.title}</h2>
              <p className="mt-3 text-slate-600">{t.aboutPage.values.subtitle}</p>
            </div>
            <div className="grid gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-brand">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted">
          <div className="container-12">
            <h2 className="text-3xl font-semibold text-brand">{t.aboutPage.leadership.title}</h2>
            <p className="mt-3 max-w-2xl text-slate-600">{t.aboutPage.leadership.subtitle}</p>
            <div className="mt-8 flex justify-center">
              {leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm max-w-md w-full"
                >
                  <Link
                    href={leader.link}
                    className="text-sm font-semibold text-brand hover:underline"
                  >
                    {leader.name}
                  </Link>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {leader.role}
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-12 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <h2 className="text-3xl font-semibold text-brand">{t.aboutPage.cta.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">{t.aboutPage.cta.subtitle}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-brand">
              <a href="mailto:contact@maintafox.systems" className="btn-primary">
                {t.aboutPage.cta.primary}
              </a>
              <Link href="/contact" className="btn-outline">
                {t.aboutPage.cta.secondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
