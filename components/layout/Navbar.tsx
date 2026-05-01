'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

import { LanguageSwitcher } from '@/components/shared/LanguageSwitcher';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { type Locale, withLocale } from '@/lib/config';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'about' },
  { href: '/services', label: 'services' },
  { href: '/case-studies', label: 'caseStudies' },
  { href: '/blog', label: 'blog' },
  { href: '/contact', label: 'contact' }
] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-slate-200/80 bg-white/82 shadow-sm backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href={withLocale(locale, '/')} className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-display text-sm font-extrabold text-white shadow-card-glow">
            WM
          </span>
          <span className={cn('hidden font-display text-lg font-bold sm:block', scrolled ? 'text-primary' : 'text-white')}>
            Walid Mostfaoui
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={withLocale(locale, item.href)}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-semibold transition',
                scrolled ? 'text-slate-600 hover:bg-slate-100 hover:text-primary' : 'text-white/78 hover:bg-white/10 hover:text-white'
              )}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild size="sm" className="shimmer rounded-full">
            <Link href={withLocale(locale, '/contact')}>
              {t('bookCall')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" aria-label={t('menu')} className="rounded-full bg-white/90">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Walid Mostfaoui</SheetTitle>
              </SheetHeader>
              <div className="mt-8 grid gap-3">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={withLocale(locale, item.href)} className="rounded-lg px-3 py-3 text-base font-semibold hover:bg-slate-100">
                      {t(item.label)}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-8 grid gap-4">
                <LanguageSwitcher compact />
                <Button asChild className="rounded-lg">
                  <Link href={withLocale(locale, '/contact')}>{t('bookCall')}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
