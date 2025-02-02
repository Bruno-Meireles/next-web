import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ClerkProvider, } from "@clerk/nextjs";
import { ptBR } from "@clerk/localizations";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart-tech",
  description: "Smart-tech Acessórios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx(inter.className, "bg-slate-700")}>
          <Navbar />
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          <main className="bg-slate-700 h-screen p-20">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
