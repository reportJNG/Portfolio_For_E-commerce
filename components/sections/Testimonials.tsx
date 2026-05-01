'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import { testimonials } from '@/lib/data';

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 3600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding overflow-hidden bg-primary text-white">
      <div className="container">
        <div className="js-section-heading max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent-glow">Testimonials</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Operators and founders trust the system.
          </h2>
        </div>
      </div>
      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex gap-5 px-[max(1rem,calc((100vw-1280px)/2))]"
          drag="x"
          dragConstraints={{ left: -900, right: 0 }}
          animate={{ x: `calc(-${index * 320}px)` }}
          transition={{ type: 'spring', stiffness: 90, damping: 22 }}
        >
          {testimonials.concat(testimonials).map((item, itemIndex) => (
            <motion.article
              key={`${item.name}-${itemIndex}`}
              className="min-w-[300px] rounded-lg border border-white/10 bg-white/10 p-6 backdrop-blur sm:min-w-[380px]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-5 flex gap-1 text-accent-glow">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-8 text-white/80">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 font-semibold">
                {item.name}, {item.country} <span aria-hidden="true">{item.flag}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
