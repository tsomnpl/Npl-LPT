import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://npl-lpt.vercel.app";

export const metadata: Metadata = {
  title: "Nos Projets & Réalisations | Future-Tech",
  description:
    "Découvrez les projets web, applications et plateformes digitales conçus et développés par Future-Tech pour nos clients.",
  keywords: [
    "Projets Future-Tech",
    "Réalisations Web",
    "Portfolio",
    "Applications Next.js",
    "Développement sur mesure",
    "Isaac TCHIWANOU",
  ],
  authors: [{ name: "Isaac TCHIWANOU", url: siteUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Nos Projets & Réalisations | Future-Tech",
    description:
      "Découvrez les projets web, applications et plateformes digitales conçus et développés par Future-Tech pour nos clients.",
    url: `${siteUrl}/projects`,
    siteName: "Future-Tech",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Projets & Réalisations | Future-Tech",
    description:
      "Découvrez les projets web, applications et plateformes digitales conçus et développés par Future-Tech pour nos clients.",
  },
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
};

const projectList = [
  {
    id: 1,
    title: "Plateforme SaaS Analytics Pro",
    category: "Application Web",
    description: "Tableau de bord décisionnel en temps réel pour le suivi des KPI d'entreprises.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    imageSeed: "saasanalytics",
  },
  {
    id: 2,
    title: "E-Commerce Luxury Experience",
    category: "Site E-Commerce",
    description: "Boutique en ligne haut de gamme avec paiement sécurisé et expérience utilisateur ultra fluide.",
    tech: ["Next.js", "React", "Tailwind CSS", "Stripe API"],
    imageSeed: "luxuryecommerce",
  },
  {
    id: 3,
    title: "Plateforme Médicale TeleMed",
    category: "Solution Santé",
    description: "Système complet de prise de rendez-vous et téléconsultation médicale sécurisée.",
    tech: ["Next.js", "TypeScript", "Node.js", "WebRTC"],
    imageSeed: "telemedhealth",
  },
  {
    id: 4,
    title: "Portail Immobilier Direct-Loc",
    category: "Plateforme Immobilière",
    description: "Plateforme de gestion de biens et mise en relation directe entre propriétaires et locataires.",
    tech: ["Next.js", "App Router", "Tailwind CSS", "REST API"],
    imageSeed: "realestateportal",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Nos Projets & Réalisations
        </h1>
        <p className="text-xl text-primary-dark max-w-2xl mx-auto">
          Découvrez une sélection de projets digitaux développés avec passion, rigueur et performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col group"
          >
            <div className="relative h-64 w-full bg-blue-50">
              <Image
                src={`https://picsum.photos/seed/${project.imageSeed}/800/500`}
                alt={`Aperçu du projet ${project.title}`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm z-10">
                {project.category}
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-blue-600 transition">
                  {project.title}
                </h2>
                <p className="text-primary-dark mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-lg border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary font-bold hover:text-blue-700 transition"
                >
                  Demander un projet similaire
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
