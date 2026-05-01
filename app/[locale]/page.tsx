import { unstable_setRequestLocale } from 'next-intl/server';

import { About } from '@/components/sections/About';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { MetricsBar } from '@/components/sections/MetricsBar';
import { MetricsDeepDive } from '@/components/sections/MetricsDeepDive';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import type { Locale } from '@/lib/config';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main>
      <Hero />
      <MetricsBar />
      <About />
      <Services />
      <CaseStudies />
      <MetricsDeepDive />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  );
}
