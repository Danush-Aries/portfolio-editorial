import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TopBar from "@/components/nav/TopBar";
import Footer from "@/components/nav/Footer";
import CommandK from "@/components/primitives/CommandK";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danushankar.dev"),
  title: {
    default: "Dhanush Shankar — AI, security, product",
    template: "%s · Dhanush Shankar",
  },
  description:
    "I build the AI, I break the AI, I ship with the AI. Full-stack agent engineer working at the seam of AI, security, and product.",
  openGraph: {
    title: "Dhanush Shankar",
    description:
      "Full-stack agent engineer. AI, security, product. Available for Summer 2026 internships.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush Shankar",
    description:
      "Full-stack agent engineer. AI, security, product. Available for Summer 2026 internships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-bg text-text antialiased">
        <TopBar />
        <main className="mx-auto w-full max-w-[720px] px-6 pt-24 pb-32 md:px-0">
          {children}
        </main>
        <Footer />
        <CommandK />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
