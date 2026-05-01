import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { metrics } from '@/lib/data';

export function MetricsDeepDive() {
  return (
    <section className="section-padding bg-surface premium-grid">
      <div className="container">
        <div className="js-section-heading max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent">Metrics Deep Dive</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl">
            Numbers that show the operating range.
          </h2>
        </div>
        <div className="js-stagger-group mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="js-stagger-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-mono text-4xl font-bold text-primary">
                <AnimatedCounter
                  value={metric.numeric}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.value.includes('.') ? 1 : 0}
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{metric.label}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{metric.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
