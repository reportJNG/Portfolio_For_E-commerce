import Image from 'next/image';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { caseStudies } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

export const metadata = {
  title: 'Case Studies'
};

export default function CaseStudiesPage({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="bg-white pt-28">
      <section className="section-padding">
        <div className="container">
          <div className="js-section-heading max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Case Studies</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">
              Four realistic examples of profitable e-commerce work.
            </h1>
          </div>
          <div className="js-stagger-group mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={withLocale(params.locale, `/case-studies/${study.slug}`)}
                className="js-stagger-card group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card-glow"
              >
                <div className="relative aspect-[16/10]">
                  <Image src={study.image} alt={`${study.brand} visual`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{study.niche}</Badge>
                    <Badge variant="outline">{study.platform}</Badge>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-primary">{study.brand}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{study.result}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-accent">
                    Read Full Case Study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
