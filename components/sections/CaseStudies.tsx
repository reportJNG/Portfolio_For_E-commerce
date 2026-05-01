import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

export async function CaseStudies() {
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="js-section-heading flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Case Studies</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
              Realistic growth stories, built like operating systems.
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit rounded-full">
            <Link href={withLocale(locale, '/case-studies')}>View all case studies</Link>
          </Button>
        </div>

        <div className="mt-12 grid auto-rows-[320px] gap-5 lg:grid-cols-4">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={withLocale(locale, `/case-studies/${study.slug}`)}
              className={[
                'js-scale-card group relative overflow-hidden rounded-lg border border-slate-200 bg-primary text-white shadow-sm',
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : '',
                index === 3 ? 'lg:col-span-2' : ''
              ].join(' ')}
            >
              <Image
                src={study.image}
                alt={`${study.brand} case study visual`}
                fill
                sizes={index === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 100vw'}
                className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge variant="dark">{study.niche}</Badge>
                  <Badge variant="dark">{study.platform}</Badge>
                </div>
                <h3 className="font-display text-3xl font-bold">{study.brand}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">{study.result}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-bold text-accent-glow opacity-0 transition group-hover:opacity-100">
                  Read Full Case Study <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
