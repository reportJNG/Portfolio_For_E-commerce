import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { metrics } from '@/lib/data';

const keyMetrics = [metrics[0], metrics[2], metrics[3], metrics[6]];

export function MetricsBar() {
  return (
    <section id="metrics" className="bg-primary py-8 text-white">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keyMetrics.map((metric) => (
          <div key={metric.label} className="border-white/10 py-3 sm:border-l sm:pl-6 first:sm:border-l-0 first:sm:pl-0">
            <div className="font-mono text-4xl font-bold text-accent-glow drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">
              <AnimatedCounter
                value={metric.numeric}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.value.includes('.') ? 1 : 0}
              />
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/58">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
