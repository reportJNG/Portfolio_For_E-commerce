import { getTranslations } from 'next-intl/server';

import { SectionHeading } from '@/components/shared/SectionHeading';
import { services } from '@/lib/data';

export async function Services() {
  const t = await getTranslations('services');

  return (
    <section className="section-padding bg-surface">
      <div className="container">
        <SectionHeading eyebrow={t('eyebrow')} title={t('heading')} body={t('body')} />
        <div className="js-stagger-group mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="js-stagger-card group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-card-glow"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
