"use client";
import NewestSection from '@/sections/NewestSection';
import OpenFormSection from '@/sections/OpenFormSection';
import React from 'react';
import { useUser } from "@clerk/clerk-react";
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    <div>Loading...</div>
    return null;
  }

  if (isSignedIn) {
    return (
      <NextUIProvider>
        <main className="flex flex-col items-center justify-between">
          <NewestSection />
          <OpenFormSection />
          Dashboard
        </main>
      </NextUIProvider>
    )
  }

  return <div>Not Signed In</div>;
}
