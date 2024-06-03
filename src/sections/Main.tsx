"use client";
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { useUser } from "@clerk/clerk-react";

 function Main ({children,} : {children: React.ReactNode;}) {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        <div>Loading...</div>
        return null;
    }

    if (isSignedIn) {
        return (
            <NextUIProvider>
                <main className="flex flex-col items-center justify-between">
                  {children}
                  Dashboard
                </main>
              </NextUIProvider>
          )
    }

    return (
        <div>
            <h1>Sign in to view this page</h1>
        </div>
    )
}

export default Main