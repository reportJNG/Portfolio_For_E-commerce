import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';

import '@/app/globals.css';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { ScrollAnimations } from '@/components/providers/ScrollAnimations';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { CustomCursor } from '@/components/shared/CustomCursor';
import { PageTransition } from '@/components/shared/PageTransition';
import { TooltipProvider } from '@/components/ui/tooltip';
import { defaultLocale, getDirection, locales, type Locale } from '@/lib/config';
import { dmSans, jetBrainsMono, syne } from '@/lib/fonts';

export const metadata: Metadata = {
  title: {
    default: 'Walid Mostfaoui | E-Commerce Strategist & Growth Operator',
    template: '%s | Walid Mostfaoui'
  },
  description:
    "Walid Mostfaoui is an e-commerce strategist and growth operator building revenue machines for brands across Shopify, WooCommerce, TikTok Shop, ads, and dropshipping systems.",
  metadataBase: new URL('https://walidmostfaoui.com'),
  openGraph: {
    title: 'Walid Mostfaoui | E-Commerce Strategist & Growth Operator',
    description: "I don't just sell products — I build revenue machines.",
    url: 'https://walidmostfaoui.com',
    siteName: 'Walid Mostfaoui',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walid Mostfaoui | E-Commerce Strategist & Growth Operator',
    description: "I don't just sell products — I build revenue machines."
  }
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TooltipProvider delayDuration={120}>
            <NextIntlClientProvider messages={messages}>
              <LenisProvider>
                <CustomCursor />
                <ScrollAnimations />
                <Navbar />
                <PageTransition>{children}</PageTransition>
                <Footer />
                <Analytics />
              </LenisProvider>
            </NextIntlClientProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
