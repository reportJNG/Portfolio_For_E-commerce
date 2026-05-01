import fs from 'node:fs/promises';
import path from 'node:path';
import type { ReactNode } from 'react';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

import { cn } from '@/lib/utils';

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-12 font-display text-3xl font-bold tracking-normal text-primary" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 font-display text-2xl font-bold tracking-normal text-primary" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-5 text-lg leading-8 text-slate-600" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-600" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="pl-1" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-bold text-primary" {...props} />
};

export type MdxPost = {
  frontmatter: {
    title?: string;
    category?: string;
    date?: string;
    summary?: string;
  };
  content: ReactNode;
  raw: string;
};

export async function getMdxPost(slug: string): Promise<MdxPost | null> {
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, 'utf8');
    const { content: mdxSource, data } = matter(source);
    const compiled = await compileMDX({
      source: mdxSource,
      components,
      options: {
        parseFrontmatter: false
      }
    });

    return {
      frontmatter: data,
      content: <article className={cn('mx-auto max-w-3xl')}>{compiled.content}</article>,
      raw: mdxSource
    };
  } catch {
    return null;
  }
}
