import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingSupport from "@/components/shared/FloatingSupport";
import ReduxProvider from "@/redux/ReduxProvider"; // Make sure the file is named ReduxProvider.tsx

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
    <html lang="en">
      <body className={cn(inter.className, geist.variable)}>
        <ReduxProvider>
          <FloatingSupport />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}