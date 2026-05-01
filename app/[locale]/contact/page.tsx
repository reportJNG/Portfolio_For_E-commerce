import { unstable_setRequestLocale } from 'next-intl/server';

import { Contact } from '@/components/sections/Contact';
import { profile } from '@/lib/data';
import type { Locale } from '@/lib/config';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="bg-white pt-20">
      <Contact />
      <section className="section-padding bg-white">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">Email</h2>
            <p className="mt-3 text-slate-500">{profile.email}</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">WhatsApp</h2>
            <p className="mt-3 text-slate-500">{profile.whatsapp}</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h2 className="font-display text-2xl font-bold text-primary">Map</h2>
            <p className="mt-3 text-slate-500">{profile.location}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
