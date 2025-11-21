'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.webp';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-white/95 backdrop-blur border-b' : 'bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="container-12 flex items-center justify-between py-2 md:py-4">
        <Link href="/" className="flex items-center gap-1 sm:gap-2">
          <Image
            src={logo}
            alt="Maintafox"
            width={20}
            height={20}
            className="rounded-sm w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          />
          <span className="text-xs sm:text-sm md:text-base font-semibold text-brand">
            Maintafox
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          <Link href="/features" className="hover:text-brand">
            {t.nav.features}
          </Link>
          <Link href="/about" className="hover:text-brand">
            {t.nav.about}
          </Link>
          <Link href="/pricing" className="hover:text-brand">
            {t.nav.pricing}
          </Link>
          <Link href="/blog" className="hover:text-brand">
            {t.nav.blog}
          </Link>
          <Link href="/contact" className="hover:text-brand">
            {t.nav.contact}
          </Link>
          <LanguageSwitcher />

          {/* Auth Section */}
          {session ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-slate-100 text-sm"
              >
                <div className="h-8 w-8 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
                  {session.user.name?.charAt(0).toUpperCase()}
                </div>
                <span className="text-slate-700">{session.user.name}</span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-xl ring-1 ring-slate-200 py-2">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs text-slate-500">{t.nav.signedInAs}</p>
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {session.user.email}
                    </p>
                    <p className="text-xs text-slate-500 capitalize">
                      {session.user.role.toLowerCase()}
                    </p>
                  </div>

                  {(session.user.role === 'AUTHOR' || session.user.role === 'ADMIN') && (
                    <Link href="/blog/create" className="block px-4 py-2 text-sm hover:bg-slate-50">
                      {t.nav.writePost}
                    </Link>
                  )}

                  {session.user.role === 'ADMIN' && (
                    <Link href="/admin/blog" className="block px-4 py-2 text-sm hover:bg-slate-50">
                      {t.nav.adminDashboard}
                    </Link>
                  )}

                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    {t.nav.signOut}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth/login" className="btn-primary">
              {t.nav.signIn}
            </Link>
          )}

          <Link href="/demo" className="btn-primary">
            {t.nav.demo}
          </Link>
        </div>

        {/* Compact Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 hover:bg-slate-100 rounded-lg"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-brand" />
          ) : (
            <Menu className="w-5 h-5 text-brand" />
          )}
        </button>
      </nav>

      {/* Professional Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{
          zIndex: 9999,
          backgroundColor: '#0b1e35',
        }}
      >
        <div className="flex flex-col h-full p-6 bg-white" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 z-10 relative"
            >
              <Image src={logo} alt="Maintafox" width={24} height={24} className="rounded-sm" />
              <span className="text-lg font-semibold" style={{ color: '#0b1e35' }}>
                Maintafox
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors z-10 relative"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" style={{ color: '#0b1e35' }} />
            </button>
          </div>

          <div className="flex-1 space-y-6 overflow-y-auto">
            <Link
              href="/features"
              className="block text-2xl font-bold text-slate-900 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.features}
            </Link>
            <Link
              href="/about"
              className="block text-2xl font-bold text-slate-900 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/pricing"
              className="block text-2xl font-bold text-slate-900 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/blog"
              className="block text-2xl font-bold text-slate-900 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/contact"
              className="block text-2xl font-bold text-slate-900 hover:text-brand"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="space-y-6 border-t border-slate-100 pt-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-500">{t.nav.language}</span>
              <LanguageSwitcher />
            </div>

            {session ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{session.user.name}</p>
                    <p className="text-sm text-slate-500">{session.user.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {(session.user.role === 'AUTHOR' || session.user.role === 'ADMIN') && (
                    <Link
                      href="/blog/create"
                      className="flex items-center justify-center rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.writePost}
                    </Link>
                  )}
                  {session.user.role === 'ADMIN' && (
                    <Link
                      href="/admin/blog"
                      className="flex items-center justify-center rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.admin}
                    </Link>
                  )}
                </div>

                <button
                  onClick={() => {
                    signOut({ callbackUrl: '/' });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full rounded-xl border border-red-200 bg-red-50 py-3 text-sm font-semibold text-red-600"
                >
                  {t.nav.signOut}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/auth/login"
                  className="flex items-center justify-center rounded-xl border border-slate-200 py-3 text-base font-semibold text-slate-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.signIn}
                </Link>
                <Link
                  href="/demo"
                  className="flex items-center justify-center rounded-xl bg-brand py-3 text-base font-semibold text-white shadow-lg shadow-brand/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.demo}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
