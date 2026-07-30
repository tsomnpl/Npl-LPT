import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://npl-lpt.vercel.app";

export const metadata: Metadata = {
  title: "Future-Tech | Développement Web & Solutions Numériques",
  description:
    "Future-Tech accompagne entreprises et entrepreneurs dans la création de sites web modernes, applications performantes et solutions digitales innovantes.",
  keywords: [
    "Future-Tech",
    "Développement Web",
    "Solutions Numériques",
    "Next.js",
    "React",
    "Design Web",
    "Isaac TCHIWANOU",
  ],
  authors: [{ name: "Isaac TCHIWANOU", url: siteUrl }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Future-Tech | Développement Web & Solutions Numériques",
    description:
      "Future-Tech accompagne entreprises et entrepreneurs dans la création de sites web modernes, applications performantes et solutions digitales innovantes.",
    url: siteUrl,
    siteName: "Future-Tech",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future-Tech | Développement Web & Solutions Numériques",
    description:
      "Future-Tech accompagne entreprises et entrepreneurs dans la création de sites web modernes, applications performantes et solutions digitales innovantes.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-white rounded-b-[3rem] shadow-sm pt-16 pb-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-primary bg-blue-50 rounded-full border border-blue-100">
                Agence Web & Digital
              </span>
              <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Future-Tech
              </h1>
              <p className="text-xl md:text-2xl text-primary-dark mb-10 max-w-2xl mx-auto lg:mx-0 font-normal">
                Créons ensemble des solutions numériques modernes, performantes et adaptées à vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#services"
                  className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition duration-300 text-center"
                >
                  Découvrir nos services
                </Link>
                <Link
                  href="/contact"
                  className="bg-light text-primary-dark px-8 py-4 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition duration-300 border border-gray-200 text-center"
                >
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-blue-100">
                <Image
                  src="https://picsum.photos/seed/futuretechhero/600/600"
                  alt="Future-Tech - Solutions Numériques et Développement Web"
                  width={600}
                  height={600}
                  priority
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Services</h2>
          <p className="text-lg text-primary-dark max-w-2xl mx-auto">
            Des solutions sur mesure pour vous accompagner dans votre transformation numérique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Développement Web",
              desc: "Création de sites vitrines, applications web et e-commerce ultra performants avec les dernières technologies.",
              icon: "💻",
            },
            {
              title: "UI/UX Design",
              desc: "Des interfaces modernes, intuitives et pensées pour offrir la meilleure expérience utilisateur.",
              icon: "🎨",
            },
            {
              title: "Solutions Numériques",
              desc: "Accompagnement, conseil et transformation digitale sur mesure pour booster votre entreprise.",
              icon: "🚀",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="text-5xl mb-6 bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-primary-dark leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-primary text-white py-20 mt-10 rounded-3xl max-w-7xl mx-4 sm:mx-6 lg:mx-auto shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Expertise Modernité", value: "Next.js 16" },
              { title: "Design d'Exception", value: "Épuré" },
              { title: "Performance Web", value: "Score > 90" },
              { title: "Accompagnement", value: "Sur mesure" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <span className="text-3xl font-extrabold text-blue-200 mb-2">{stat.value}</span>
                <span className="text-lg font-medium text-blue-100">{stat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
