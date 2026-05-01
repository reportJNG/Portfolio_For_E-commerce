import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  body,
  inverted = false,
  className
}: {
  eyebrow: string;
  title: string;
  body?: string;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('js-section-heading max-w-3xl', className)}>
      <p className={cn('mb-3 text-sm font-bold uppercase tracking-[0.22em]', inverted ? 'text-accent-glow' : 'text-accent')}>
        {eyebrow}
      </p>
      <h2 className={cn('font-display text-4xl font-extrabold leading-tight text-balance sm:text-5xl', inverted ? 'text-white' : 'text-primary')}>
        {title}
      </h2>
      {body ? <p className={cn('mt-4 text-lg leading-8', inverted ? 'text-white/68' : 'text-slate-500')}>{body}</p> : null}
    </div>
  );
}
