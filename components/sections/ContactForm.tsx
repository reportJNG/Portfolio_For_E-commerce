'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema, type ContactPayload } from '@/lib/contact';

export function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'config'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' }
  });

  const onSubmit = async (payload: ContactPayload) => {
    setStatus('idle');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setStatus('success');
      reset();
      return;
    }

    if (response.status === 503) {
      setStatus('config');
      return;
    }

    setStatus('error');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-lg border border-white/10 bg-white/8 p-5 backdrop-blur md:p-6">
      <div className="grid gap-2">
        <Label htmlFor="name" className="text-white">
          {t('name')}
        </Label>
        <Input id="name" autoComplete="name" {...register('name')} />
        {errors.name ? <p className="text-sm text-blue-100">{errors.name.message}</p> : null}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-white">
          {t('email')}
        </Label>
        <Input id="email" type="email" autoComplete="email" {...register('email')} />
        {errors.email ? <p className="text-sm text-blue-100">{errors.email.message}</p> : null}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message" className="text-white">
          {t('message')}
        </Label>
        <Textarea id="message" {...register('message')} />
        {errors.message ? <p className="text-sm text-blue-100">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" disabled={isSubmitting} className="shimmer rounded-full">
        {isSubmitting ? t('submitting') : t('submit')}
        <Send className="h-4 w-4" />
      </Button>
      {status === 'success' ? <p className="text-sm font-semibold text-blue-100">{t('success')}</p> : null}
      {status === 'error' ? <p className="text-sm font-semibold text-blue-100">{t('error')}</p> : null}
      {status === 'config' ? <p className="text-sm font-semibold text-blue-100">{t('configError')}</p> : null}
    </form>
  );
}
