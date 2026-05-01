import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

const footerLinks = [
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/case-studies', key: 'caseStudies' },
  { href: '/blog', key: 'blog' },
  { href: '/contact', key: 'contact' }
] as const;

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const nav = await getTranslations('nav');
  const footer = await getTranslations('footer');

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-10 py-12 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href={withLocale(locale, '/')} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-display text-sm font-extrabold text-white">
              WM
            </span>
            <span className="font-display text-xl font-bold text-primary">Walid Mostfaoui</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">{footer('tagline')}</p>
        </div>

        <nav className="grid gap-3 text-sm font-semibold text-slate-600">
          {footerLinks.map((link) => (
            <Link key={link.href} href={withLocale(locale, link.href)} className="transition hover:text-accent">
              {nav(link.key)}
            </Link>
          ))}
        </nav>

        <div className="space-y-5">
          <div className="flex gap-2">
            <Button asChild variant="outline" size="icon" className="rounded-full" aria-label="Email">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full" aria-label="WhatsApp">
              <a href="https://wa.me/213000000000">
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="rounded-full" aria-label="Instagram">
              <a href="https://instagram.com/walidmostfaoui">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="max-w-[220px]">
            <LanguageSwitcher compact />
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5">
        <div className="container flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer('rights')}</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
