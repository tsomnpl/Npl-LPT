import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="bg-white rounded-b-[3rem] shadow-sm pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6 leading-tight">
                Future-Tech
              </h1>
              <p className="text-xl md:text-2xl text-primary-dark mb-10 max-w-2xl mx-auto lg:mx-0">
                Créons ensemble des solutions numériques modernes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#services"
                  className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-xl transition duration-300 text-center"
                >
                  Découvrir
                </Link>
                <Link
                  href="/contact"
                  className="bg-light text-primary-dark px-8 py-4 rounded-xl text-lg font-semibold shadow-sm hover:shadow-md transition duration-300 border border-gray-200 text-center"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Image Placeholder - since we don't have the exact illustration, using a colored div or SVG */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-[2rem] transform rotate-3 flex items-center justify-center shadow-lg border border-white">
                  <svg className="w-48 h-48 text-primary opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
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
            Des solutions sur mesure pour répondre à vos besoins numériques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Développement Web", desc: "Création de sites vitrines, applications web et e-commerce ultra performants.", icon: "💻" },
            { title: "UI/UX Design", desc: "Des interfaces modernes, intuitives et pensées pour l'utilisateur.", icon: "🎨" },
            { title: "Solutions Numériques", desc: "Accompagnement et transformation digitale pour votre entreprise.", icon: "🚀" }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col items-center text-center">
              <div className="text-5xl mb-6 bg-light w-20 h-20 rounded-full flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-primary-dark">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="bg-primary text-white py-20 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Pourquoi nous choisir ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Expertise", value: "Moderne" },
              { title: "Design", value: "Premium" },
              { title: "Performance", value: "Optimisée" },
              { title: "Support", value: "Dédié" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-blue-200 mb-2">{stat.value}</span>
                <span className="text-lg font-medium">{stat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
