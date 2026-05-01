import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ArrowLeft, Linkedin, Send, Twitter } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blogStubs } from '@/lib/data';
import { getMdxPost } from '@/lib/mdx';
import { type Locale, withLocale } from '@/lib/config';

export function generateStaticParams() {
  return blogStubs.flatMap((post) => [
    { locale: 'en', slug: post.slug },
    { locale: 'fr', slug: post.slug },
    { locale: 'ar', slug: post.slug }
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogStubs.find((item) => item.slug === slug);
  return {
    title: post ? post.title : 'Blog'
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = blogStubs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const mdx = await getMdxPost(post.slug);
  const shareUrl = `https://walidmostfaoui.com/${locale}/blog/${post.slug}`;

  return (
    <main className="bg-white pt-28">
      <section className="section-padding">
        <div className="container">
          <Button asChild variant="outline" className="mb-8 rounded-full">
            <Link href={withLocale(locale, '/blog')}>
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </Button>
          <div className="mx-auto max-w-3xl">
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight text-primary sm:text-6xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{post.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-500">
              <span>{post.readTime}</span>
              <span>{post.date}</span>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="icon" className="h-9 w-9 rounded-full" aria-label="Share on X">
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}>
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="h-9 w-9 rounded-full" aria-label="Share on LinkedIn">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}>
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" className="h-9 w-9 rounded-full" aria-label="Share on WhatsApp">
                  <a href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`}>
                    <Send className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">{mdx ? mdx.content : <FallbackArticle summary={post.summary} />}</section>
    </main>
  );
}

function FallbackArticle({ summary }: { summary: string }) {
  return (
    <article className="container mx-auto max-w-3xl">
      <p className="text-lg leading-8 text-slate-600">{summary}</p>
    </article>
  );
}
