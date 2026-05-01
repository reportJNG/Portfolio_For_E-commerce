import { unstable_setRequestLocale } from 'next-intl/server';

import { Badge } from '@/components/ui/badge';
import { profile, skillTags, timeline, tools } from '@/lib/data';
import type { Locale } from '@/lib/config';

export const metadata = {
  title: 'About'
};

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="bg-white pt-28">
      <section className="section-padding">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="js-section-heading">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">About Walid</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">
              The operator behind the revenue systems.
            </h1>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>{profile.bio}</p>
            <p>
              His work sits at the intersection of brand strategy, product validation, paid acquisition, conversion-rate
              optimization, and fulfillment operations. That mix matters because e-commerce growth breaks when any one part
              of the system is treated as an afterthought.
            </p>
            <p>
              Walid works best with founders and teams that want clean execution, fast learning cycles, and a practical path
              from idea to profitable scale.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="js-section-heading max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Timeline</p>
            <h2 className="font-display text-4xl font-extrabold text-primary">Career milestones</h2>
          </div>
          <div className="js-stagger-group mt-10 grid gap-4 lg:grid-cols-5">
            {timeline.map((item) => (
              <div key={item.year} className="js-stagger-card rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="font-mono text-2xl font-bold text-accent">{item.year}</div>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-primary">Core skills</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {skillTags.map((skill) => (
                <Badge key={skill} variant="secondary" className="rounded-md px-3 py-1.5 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-extrabold text-primary">Tools I use</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div key={tool.name} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
                    <Icon className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-primary">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
