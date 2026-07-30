import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://npl-lpt.vercel.app";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Future-Tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Développement Web & Solutions Numériques`,
    template: `%s | ${siteName}`,
  },
  description:
    "Future-Tech accompagne entreprises et entrepreneurs dans la création de sites web modernes, applications performantes et solutions digitales innovantes.",
  keywords: [
    "Future-Tech",
    "Développement Web",
    "Solutions Numériques",
    "Next.js",
    "React",
    "TypeScript",
    "UI/UX Design",
    "Isaac TCHIWANOU",
    "Applications Web",
    "Transformation Digitale",
  ],
  authors: [{ name: "Isaac TCHIWANOU", url: siteUrl }],
  creator: "Isaac TCHIWANOU",
  publisher: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | Développement Web & Solutions Numériques`,
    description:
      "Future-Tech accompagne entreprises et entrepreneurs dans la création de sites web modernes, applications performantes et solutions digitales innovantes.",
    images: [
      {
        url: "/images.jpg",
        width: 800,
        height: 600,
        alt: "Future-Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Développement Web & Solutions Numériques`,
    description:
      "Future-Tech accompagne entreprises et entrepreneurs dans la création de sites web modernes, applications performantes et solutions digitales innovantes.",
    images: ["/images.jpg"],
  },
  icons: {
    icon: "/images.jpg",
    shortcut: "/images.jpg",
    apple: "/images.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex flex-col min-h-screen font-sans antialiased text-slate-900 bg-slate-50">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
