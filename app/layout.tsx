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
  metadataBase: new URL("https://inaiyarhasnain.vercel.app"),
  title: "Naiyar Hasnain — Java Full Stack Developer",
  description:
    "Naiyar Hasnain — Java Full Stack Developer and MCA student at IIT Patna. Java, Spring Boot, Angular, Python and AI. Builder of PawBridge at Claude Build Day, Bengaluru.",
  openGraph: {
    title: "Naiyar Hasnain — Java Full Stack Developer",
    description:
      "Java Full Stack Developer, MCA @ IIT Patna. Java, Spring Boot, Angular and AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naiyar Hasnain — Java Full Stack Developer",
    description:
      "Java Full Stack Developer, MCA @ IIT Patna. Java, Spring Boot, Angular and AI.",
    creator: "@inaiyarhasnain",
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