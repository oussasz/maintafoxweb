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
          <span className="text-xs sm:text-sm md:text-base font-semibold text-brand">Maintafox</span>
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
                    <p className="text-xs text-slate-500">Signed in as</p>
                    <p className="text-sm font-medium text-slate-900 truncate">
                      {session.user.email}
                    </p>
                    <p className="text-xs text-slate-500 capitalize">
                      {session.user.role.toLowerCase()}
                    </p>
                  </div>

                  {(session.user.role === 'AUTHOR' || session.user.role === 'ADMIN') && (
                    <Link href="/blog/create" className="block px-4 py-2 text-sm hover:bg-slate-50">
                      Write Post
                    </Link>
                  )}

                  {session.user.role === 'ADMIN' && (
                    <Link href="/admin/blog" className="block px-4 py-2 text-sm hover:bg-slate-50">
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth/login" className="btn-primary">
              Sign In
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

      {/* Professional Compact Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <div className="container-12 py-2 space-y-1">
            <Link
              href="/features"
              className="block px-3 py-1.5 text-xs hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.features}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-1.5 text-xs hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-1.5 text-xs hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-1.5 text-xs hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-1.5 text-xs hover:bg-slate-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>

            <div className="pt-2 pb-1 border-t mt-2">
                <div className="px-3 py-1.5">
                <LanguageSwitcher />
              </div>
            </div>

            {session ? (
              <>
                <div className="px-3 py-1.5 border-t mt-2">
                  <p className="text-xs text-slate-500">Signed in as</p>
                  <p className="text-sm font-medium">{session.user.name}</p>
                </div>
                {(session.user.role === 'AUTHOR' || session.user.role === 'ADMIN') && (
                  <Link
                    href="/blog/create"
                    className="block px-3 py-1.5 text-xs hover:bg-slate-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Write Post
                  </Link>
                )}
                {session.user.role === 'ADMIN' && (
                  <Link
                    href="/admin/blog"
                    className="block px-3 py-1.5 text-xs hover:bg-slate-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => {
                    signOut({ callbackUrl: '/' });
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-md"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth/login"
                className="block mx-3 my-2 px-3 py-1.5 text-xs bg-brand text-white rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}

            <Link
              href="/demo"
              className="block mx-3 my-2 px-3 py-1.5 text-xs bg-brand text-white rounded-md text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.demo}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
