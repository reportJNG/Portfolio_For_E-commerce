export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  ar: 'AR'
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Francais',
  ar: 'Arabic'
};

export const rtlLocales: Locale[] = ['ar'];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr';
}

export function withLocale(locale: Locale, href: string) {
  if (href === '/') {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}
