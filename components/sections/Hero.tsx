'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import { Button } from '@/components/ui/button';
import { type Locale, withLocale } from '@/lib/config';

const HeroScene = dynamic(() => import('@/components/three/HeroScene').then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-primary" />
});

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;
  const title = t('name');
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-letter',
        { autoAlpha: 0, yPercent: 110, rotateX: -50 },
        {
          autoAlpha: 1,
          yPercent: 0,
          rotateX: 0,
          stagger: 0.05,
          duration: 0.75,
          ease: 'power4.out',
          delay: 0.15
        }
      );

      gsap.fromTo(
        '.hero-copy',
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.12, delay: 0.6 }
      );

      gsap.fromTo('.hero-scene', { opacity: 0 }, { opacity: 1, duration: 1.1, ease: 'power2.out', delay: 0.8 });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-screen overflow-hidden bg-primary text-white">
      <div className="hero-scene absolute inset-0 opacity-0">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(37,99,235,0.34),transparent_32%),linear-gradient(180deg,rgba(10,15,30,0.16),rgba(10,15,30,0.92))]" />

      <div className="container relative z-10 flex min-h-screen flex-col justify-center pb-20 pt-28">
        <p className="hero-copy mb-5 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
          {t('eyebrow')}
        </p>

        <h1 className="w-full overflow-hidden font-display text-[clamp(2.35rem,10.8vw,8.9rem)] font-extrabold leading-[0.9] tracking-normal text-white">
          {title.split(' ').map((word, wordIndex) => (
            <span key={word} className="inline-block whitespace-nowrap">
              {word.split('').map((char, charIndex) => (
                <span key={`${char}-${wordIndex}-${charIndex}`} className="hero-letter inline-block opacity-0">
                  {char}
                </span>
              ))}
              {wordIndex < title.split(' ').length - 1 ? <span className="hero-letter inline-block opacity-0">&nbsp;</span> : null}
            </span>
          ))}
        </h1>

        <div className="mt-8 max-w-3xl">
          <p className="hero-copy font-display text-2xl font-semibold text-accent-glow sm:text-4xl">{t('title')}</p>
          <p className="hero-copy mt-4 text-lg leading-8 text-white/75 sm:text-xl">{t('tagline')}</p>
        </div>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 20, delay: 0.9 }}
        >
          <Button asChild size="lg" className="shimmer rounded-full">
            <Link href={withLocale(locale, '/contact')}>
              {t('primaryCta')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full">
            <Link href={withLocale(locale, '/case-studies')}>{t('secondaryCta')}</Link>
          </Button>
        </motion.div>
      </div>

      <a
        href="#metrics"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60"
      >
        {t('scroll')}
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
