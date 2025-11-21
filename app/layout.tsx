import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
// Navbar and Footer moved to (site)/layout.tsx
import { LanguageProvider } from '@/contexts/LanguageContext';
import AuthProvider from '@/components/AuthProvider';
import { JsonLd, organizationSchema } from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maintafox.systems'),
  title: {
    default: 'Maintafox — CMMS for Proactive Maintenance',
    template: '%s | Maintafox',
  },
  description:
    "Maintafox is Algeria's locally supported CMMS. Centralize assets, work orders, PMs, inventory, and analytics to shift from reactive fixes to proactive maintenance.",
  keywords: [
    'CMMS',
    'maintenance management software',
    'CMMS Algeria',
    'computerized maintenance management',
    'preventive maintenance',
    'work order management',
    'asset management',
    'maintenance software',
  ],
  icons: {
    icon: [
      { url: '/maintafox.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/maintafox.ico',
    apple: '/logo.svg',
  },
  openGraph: {
    title: 'Maintafox — CMMS for Proactive Maintenance',
    description:
      'Centralize assets, work orders, PMs, inventory, and analytics. Locally installed and supported in Algeria.',
    url: 'https://www.maintafox.systems',
    siteName: 'Maintafox',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maintafox — CMMS for Proactive Maintenance',
    description:
      'Centralize assets, work orders, PMs, inventory, and analytics. Locally installed and supported in Algeria.',
  },
  alternates: { canonical: 'https://www.maintafox.systems' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
