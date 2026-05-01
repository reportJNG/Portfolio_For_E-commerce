import Link from 'next/link';
import { ArrowDownToLine, Globe2 } from 'lucide-react';
import { getLocale } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { profile, skillTags } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

export async function About() {
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-padding bg-white">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="js-section-heading">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">About</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
            Operator instinct, strategist discipline, builder energy.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{profile.bio}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {skillTags.map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-md px-3 py-1.5 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <Link href="/assets/walid-mostfaoui-cv.pdf">
                <ArrowDownToLine className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={withLocale(locale, '/about')}>Read the full story</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[440px] overflow-hidden rounded-lg border border-slate-200 bg-primary p-8 text-white shadow-glow">
          <div className="absolute inset-0 premium-grid opacity-70" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-glow/30" />
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-glow/40" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-xl" />
          <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold text-white/72">
              <Globe2 className="h-5 w-5 text-accent-glow" />
              {profile.location}
            </div>
            <div className="grid gap-3">
              {profile.languages.map((language) => (
                <div key={language} className="rounded-lg border border-white/10 bg-white/8 p-4 backdrop-blur">
                  <span className="font-semibold">{language}</span>
                </div>
              ))}
            </div>
            <div className="font-mono text-sm text-white/56">Global growth systems / DZ base</div>
          </div>
        </div>
      </div>
    </section>
  );
}
