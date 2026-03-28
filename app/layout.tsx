import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Maple Casinos — Best Online Casinos in Ontario & Alberta 2024',
    template: '%s | Maple Casinos',
  },
  description:
    'Discover the best licensed online casinos in Ontario and Alberta. Expert reviews, exclusive bonuses, and trusted ratings for Canadian players.',
  keywords: ['online casino Canada', 'Ontario casino', 'Alberta casino', 'casino bonus Canada', 'licensed casino'],
  metadataBase: new URL('https://maplecasinos.ca'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://maplecasinos.ca',
    siteName: 'Maple Casinos',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
