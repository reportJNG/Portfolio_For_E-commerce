'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <span ref={ref}>
      {inView ? <CountUp end={value} duration={2.2} decimals={decimals} prefix={prefix} suffix={suffix} separator="," /> : `${prefix}0${suffix}`}
    </span>
  );
}
