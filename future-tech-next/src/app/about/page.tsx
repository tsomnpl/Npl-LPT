export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">À propos de Future-Tech</h1>
        <p className="text-xl text-primary-dark">
          Découvrez notre histoire, notre vision et les valeurs qui nous animent au quotidien.
        </p>
      </div>

      <div className="space-y-12">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-primary mb-4">Notre Mission</h2>
          <p className="text-lg text-primary-dark leading-relaxed">
            Fournir des solutions numériques innovantes, performantes et esthétiques qui aident les entreprises à atteindre leurs objectifs. Nous croyons en la puissance de la technologie pour transformer des idées en réalités concrètes.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-primary mb-4">Notre Vision</h2>
          <p className="text-lg text-primary-dark leading-relaxed">
            Devenir un acteur de référence dans le développement d&apos;applications web modernes, en repoussant constamment les limites de l&apos;expérience utilisateur et des standards de qualité.
          </p>
        </div>

        <div className="bg-primary text-white p-8 md:p-10 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Nos Valeurs</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Excellence technique', 'Design centré utilisateur', 'Transparence et intégrité', 'Innovation continue'].map((valeur, i) => (
              <li key={i} className="flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">{valeur}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Le Fondateur</h2>
          <div className="inline-block bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 text-center">
            <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center text-primary text-4xl font-bold">
              IT
            </div>
            <h3 className="text-2xl font-bold text-primary">Isaac TCHIWANOU</h3>
            <p className="text-primary-dark mt-2 font-medium">Développeur Web & UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
