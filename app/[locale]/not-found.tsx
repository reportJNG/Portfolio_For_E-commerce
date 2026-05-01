import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-primary px-4 text-center text-white">
      <div>
        <p className="font-mono text-sm font-bold text-accent-glow">404</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold">Page not found</h1>
        <p className="mt-4 text-white/70">The page you are looking for is not available.</p>
        <Button asChild className="mt-8 rounded-full">
          <Link href="/en">Back home</Link>
        </Button>
      </div>
    </main>
  );
}
