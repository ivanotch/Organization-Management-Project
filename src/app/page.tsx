import NewestSection from '@/sections/NewestSection';
import OpenFormSection from '@/sections/OpenFormSection';
import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <NewestSection />
      <OpenFormSection />
      Dashboard
    </main>
  );
}
