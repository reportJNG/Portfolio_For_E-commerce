import Link from 'next/link';
import { setRequestLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { processSteps, services } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

export const metadata = {
  title: 'Services'
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-white pt-28">
      <section className="section-padding">
        <div className="container">
          <div className="js-section-heading max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Services</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">
              E-commerce execution from offer to scale.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Each service can stand alone, but the real leverage comes when product research, brand positioning, store
              experience, paid traffic, and fulfillment operate as one growth system.
            </p>
          </div>
          <div className="js-stagger-group mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="js-stagger-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <Icon className="h-7 w-7 text-accent" />
                  <h2 className="mt-5 font-display text-2xl font-bold text-primary">{service.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container">
          <div className="js-section-heading max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent-glow">Process</p>
            <h2 className="font-display text-4xl font-extrabold">A 4-step operating rhythm.</h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step} className="rounded-lg border border-white/10 bg-white/10 p-6">
                <span className="font-mono text-sm font-bold text-accent-glow">{item.step}</span>
                <h3 className="mt-4 font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-10 rounded-full">
            <Link href={withLocale(locale, '/contact')}>
              Book a Call <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
