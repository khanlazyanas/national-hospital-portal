import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingSupport from "@/components/shared/FloatingSupport";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "National Hospital & Neuro Center",
  description: "Advanced Neurological Care & Complete Healing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} bg-surfaceWhite text-deepNavy antialiased`}>
        {children}
        
      
        <FloatingSupport />
        
      </body>
    </html>
  );
}