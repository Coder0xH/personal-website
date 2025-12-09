'use client';

import { Hero } from './Hero';

export function HomePage() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <main className="w-full">
        <Hero />
      </main>
    </div>
  );
}

export { Hero };

