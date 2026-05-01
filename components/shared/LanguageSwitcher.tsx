'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

import { localeLabels, locales, type Locale } from '@/lib/config';
import { cn } from '@/lib/utils';

function getPathForLocale(pathname: string, nextLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean);

  if (locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
    return `/${segments.join('/')}`;
  }

  return `/${nextLocale}${pathname === '/' ? '' : pathname}`;
}

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'flex items-center rounded-full border border-slate-200 bg-white/90 p-1 shadow-sm backdrop-blur',
        compact && 'w-full justify-between rounded-lg'
      )}
      aria-label="Language switcher"
    >
      {locales.map((item) => (
        <Link
          key={item}
          href={getPathForLocale(pathname, item)}
          className={cn(
            'rounded-full px-3 py-1.5 text-xs font-bold text-slate-500 transition hover:text-accent',
            locale === item && 'bg-primary text-white hover:text-white',
            compact && 'flex-1 text-center'
          )}
          aria-current={locale === item ? 'page' : undefined}
        >
          {localeLabels[item]}
        </Link>
      ))}
    </div>
  );
}
