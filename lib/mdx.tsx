import fs from 'node:fs/promises';
import path from 'node:path';
import type { ReactNode } from 'react';
import matter from 'gray-matter';

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

    return {
      frontmatter: data,
      content: <article className="mx-auto max-w-3xl">{renderAuthoredMdx(mdxSource)}</article>,
      raw: mdxSource
    };
  } catch {
    return null;
  }
}

function renderAuthoredMdx(source: string) {
  const blocks = source
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    if (block.startsWith('### ')) {
      return (
        <h3 key={index} className="mt-8 font-display text-2xl font-bold tracking-normal text-primary">
          {block.replace(/^### /, '')}
        </h3>
      );
    }

    if (block.startsWith('## ')) {
      return (
        <h2 key={index} className="mt-12 font-display text-3xl font-bold tracking-normal text-primary">
          {block.replace(/^## /, '')}
        </h2>
      );
    }

    if (block.startsWith('- ')) {
      return (
        <ul key={index} className="mt-5 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-600">
          {block.split('\n').map((item) => (
            <li key={item} className="pl-1">
              {item.replace(/^- /, '')}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={index} className="mt-5 text-lg leading-8 text-slate-600">
        {block}
      </p>
    );
  });
}
