import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

export function generateStaticParams() {
  return caseStudies.flatMap((study) => [
    { locale: 'en', slug: study.slug },
    { locale: 'fr', slug: study.slug },
    { locale: 'ar', slug: study.slug }
  ]);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  return {
    title: study ? study.brand : 'Case Study'
  };
}

export default function CaseStudyPage({ params }: { params: { locale: Locale; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <main className="bg-white pt-28">
      <section className="section-padding">
        <div className="container">
          <Button asChild variant="outline" className="mb-8 rounded-full">
            <Link href={withLocale(params.locale, '/case-studies')}>
              <ArrowLeft className="h-4 w-4" />
              Back to case studies
            </Link>
          </Button>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="js-section-heading">
              <Badge variant="secondary">{study.platform}</Badge>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">{study.brand}</h1>
              <p className="mt-5 text-xl leading-8 text-slate-600">{study.result}</p>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-slate-200 shadow-glow">
              <Image src={study.image} alt={`${study.brand} case study`} fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Problem</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{study.problem}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Strategy</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{study.strategy}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-primary p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent-glow">Metrics</p>
            <p className="mt-4 font-display text-3xl font-bold">{study.roas ?? study.keyWin ?? study.result}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-primary">Execution</h2>
            <ul className="mt-6 space-y-4">
              {study.execution.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 p-4 text-sm leading-7 text-slate-600">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold text-primary">Results</h2>
            <ul className="mt-6 space-y-4">
              {study.results.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 p-4 text-sm font-semibold leading-7 text-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <h2 className="font-display text-3xl font-extrabold">Related case studies</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={withLocale(params.locale, `/case-studies/${item.slug}`)} className="rounded-lg border border-white/10 bg-white/8 p-5">
                <h3 className="font-display text-2xl font-bold">{item.brand}</h3>
                <p className="mt-2 text-sm text-white/64">{item.result}</p>
                <span className="mt-4 flex items-center gap-2 text-sm font-bold text-accent-glow">
                  Read <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
