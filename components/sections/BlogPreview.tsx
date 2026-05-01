import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { blogStubs } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

export async function BlogPreview() {
  const locale = (await getLocale()) as Locale;

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="js-section-heading max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Blog</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
            Field notes for e-commerce operators.
          </h2>
        </div>
        <div className="js-stagger-group mt-12 grid gap-5 lg:grid-cols-3">
          {blogStubs.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={withLocale(locale, `/blog/${post.slug}`)}
              className="js-stagger-card group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card-glow"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs font-semibold text-slate-400">{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-tight text-primary">{post.title}</h3>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">{post.summary}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-accent">
                  Read <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
