'use client';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="mt-20 border-t">
      <div className="container-12 grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div>
          <div className="text-xl font-semibold text-brand">Maintafox</div>
          <p className="mt-2 text-sm text-slate-600">{t.footer.tagline}</p>
          <p className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} Maintafox. {t.footer.rights}
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">{t.footer.quickLinks}</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/features" className="hover:text-brand">
                {t.nav.features}
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-brand">
                {t.nav.pricing}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-brand">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand">
                {t.nav.blog}
              </Link>
            </li>
            <li>
              <Link href="/demo" className="hover:text-brand">
                {t.nav.demo}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">{t.footer.legal}</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:text-brand">
                {t.footer.links.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand">
                {t.footer.links.terms}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">{t.footer.contactUs}</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:contact@maintafox.systems" className="hover:text-brand">
                contact@maintafox.systems
              </a>
            </li>
            <li>
              <a href="tel:+213540537886" className="hover:text-brand">
                +213 (540) 537-886
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/1CGCAFfz8y/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/maintafox-systems/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
