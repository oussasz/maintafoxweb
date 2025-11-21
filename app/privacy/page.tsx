'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="section">
        <div className="container-12 prose max-w-4xl">
          <h1 className="text-brand">{t.privacy.title}</h1>
          <p className="text-sm text-slate-500">{t.privacy.lastUpdated}</p>
          {t.privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
