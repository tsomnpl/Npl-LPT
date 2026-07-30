import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://npl-lpt.vercel.app";

export const metadata: Metadata = {
  title: "Contact | Future-Tech",
  description:
    "Contactez Future-Tech pour vos projets de développement web, applications mobiles et solutions numériques sur mesure.",
  keywords: [
    "Contact Future-Tech",
    "Développement Web",
    "Devis gratuit",
    "Isaac TCHIWANOU",
    "Agence Web",
    "Support Digital",
  ],
  authors: [{ name: "Isaac TCHIWANOU", url: siteUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact | Future-Tech",
    description:
      "Contactez Future-Tech pour vos projets de développement web, applications mobiles et solutions numériques sur mesure.",
    url: `${siteUrl}/contact`,
    siteName: "Future-Tech",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Future-Tech",
    description:
      "Contactez Future-Tech pour vos projets de développement web, applications mobiles et solutions numériques sur mesure.",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
          Contactez-nous
        </h1>
        <p className="text-xl text-primary-dark">
          Vous avez un projet en tête ? N&apos;hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
