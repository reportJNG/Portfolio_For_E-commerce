import { getTranslations } from 'next-intl/server';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

import { ContactForm } from '@/components/sections/ContactForm';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/data';

export async function Contact() {
  const t = await getTranslations('contact');

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-walid-gradient opacity-40" />
      <div className="absolute inset-0 premium-grid opacity-50" />
      <div className="container relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="js-section-heading">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-accent-glow">{t('eyebrow')}</p>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">{t('heading')}</h2>
          <p className="mt-5 text-lg leading-8 text-white/70">{t('body')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="ghost" className="rounded-full">
              <a href="https://wa.me/213000000000">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full">
              <a href="https://instagram.com/walidmostfaoui">
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
