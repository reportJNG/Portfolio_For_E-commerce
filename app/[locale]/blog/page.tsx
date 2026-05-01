import Image from 'next/image';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { blogStubs } from '@/lib/data';
import { type Locale, withLocale } from '@/lib/config';

export const metadata = {
  title: 'Blog'
};

export default function BlogPage({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);
  const categories = Array.from(new Set(blogStubs.map((post) => post.category)));

  return (
    <main className="bg-white pt-28">
      <section className="section-padding">
        <div className="container">
          <div className="js-section-heading max-w-4xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Blog</p>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">
              Practical notes for building e-commerce revenue machines.
            </h1>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge key={category} variant="secondary" className="rounded-md px-3 py-1.5">
                {category}
              </Badge>
            ))}
          </div>
          <div className="js-stagger-group mt-12 grid gap-6 lg:grid-cols-2">
            {blogStubs.map((post) => (
              <Link
                key={post.slug}
                href={withLocale(params.locale, `/blog/${post.slug}`)}
                className="js-stagger-card group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-card-glow"
              >
                <div className="relative aspect-[16/8]">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs font-semibold text-slate-400">{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-primary">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{post.summary}</p>
                  <span className="mt-5 flex items-center gap-2 text-sm font-bold text-accent">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
