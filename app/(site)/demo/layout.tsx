import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo — See Maintafox CMMS in Action',
  description:
    'Schedule a personalized demo of Maintafox CMMS. See how our maintenance management software can reduce downtime, optimize work orders, and improve asset reliability for your Algerian facility.',
  keywords: [
    'CMMS demo',
    'maintenance software demo',
    'request demo',
    'Maintafox demo',
    'CMMS trial Algeria',
    'maintenance management demo',
  ],
  openGraph: {
    title: 'Request a Demo — See Maintafox CMMS in Action',
    description:
      'Schedule a personalized demo to see how Maintafox CMMS can transform your maintenance operations.',
    type: 'website',
    url: 'https://www.maintafox.systems/demo',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request a Demo — See Maintafox CMMS in Action',
    description:
      'Schedule a personalized demo to see how Maintafox CMMS can transform your maintenance operations.',
  },
  alternates: {
    canonical: 'https://www.maintafox.systems/demo',
  },
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

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
