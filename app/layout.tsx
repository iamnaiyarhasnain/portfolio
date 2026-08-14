import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Naiyar Hasnain — Software Developer",
  description:
    "Naiyar Hasnain — Exploring tech and exciting with AI. MCA at IIT Patna, building with Java, Spring, and the modern web.",
  openGraph: {
    title: "Naiyar Hasnain — Software Developer",
    description:
      "Software developer at IIT Patna. Java, Spring, and the web.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naiyar Hasnain — Software Developer",
    description:
      "Software developer at IIT Patna. Java, Spring, and the web.",
    creator: "@iammdmasroor",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">{children}</body>
      <Analytics />
    </html>
  );
}
