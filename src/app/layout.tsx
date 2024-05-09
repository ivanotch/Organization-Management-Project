"use client";
import Nav from "@/components/Nav";
import { ClerkProvider } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import "./globals.css";
import SideNav from "@/components/SideNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <ClerkProvider>
        <html lang="en">
          <body className="min-h-screen">
            {pathname === "/sign-in" || pathname === "/sign-up" || pathname === "/sign-in/factor-one" ? null : <Nav />}
            <div className="flex flex-row">
              {pathname === "/sign-in" || pathname === "/sign-up" || pathname === "/sign-in/factor-one" ? null : <SideNav />}
              <div className="w-[97%] pt-[1rem] px-[2rem]">
                {children}
              </div>
            </div>
          </body>
        </html>
    </ClerkProvider>
  );
}
