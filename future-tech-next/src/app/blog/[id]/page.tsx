import Link from "next/link";
import Image from "next/image";

// Mêmes thèmes pour la correspondance d'ID
const themes = [
  "L'avenir de l'Intelligence Artificielle en 2026",
  "Les meilleures pratiques en Développement Web",
  "Pourquoi React reste le roi du frontend",
  "Next.js App Router : Le guide complet",
  "Les fondamentaux de la Cybersécurité moderne",
  "Migrer son infrastructure vers le Cloud",
  "Améliorer l'UI/UX de vos applications",
  "Optimisation de la Performance Web",
  "SEO : Les secrets pour bien se positionner",
  "L'Innovation technologique au service de l'entreprise",
  "Construire des architectures scalables",
  "L'importance de l'accessibilité web"
];

const categories = [
  "Intelligence artificielle",
  "Développement Web",
  "React",
  "Next.js",
  "Cybersécurité",
  "Cloud",
  "UI/UX",
  "Performance Web",
  "SEO",
  "Innovation",
  "Architecture",
  "Accessibilité"
];

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  // En Next.js 15, params est souvent une promesse, il est donc recommandé de l'attendre
  const { id } = await params;
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error("Article introuvable");
  }

  const post = await res.json();
  const index = (parseInt(id) - 1) % 12;
  const theme = themes[index] || "Sujet Tech du moment";
  const category = categories[index] || "Actualité";

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary-dark hover:text-primary transition font-semibold mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Retour vers le blog
        </Link>
        <div className="flex justify-center mb-6">
          <span className="bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
            {category}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">
          {theme}
        </h1>
        <div className="flex items-center justify-center text-gray-500 space-x-4">
          <span className="font-medium text-primary-dark">Par Future-Tech</span>
          <span>•</span>
          <span>12 Juillet 2026</span>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 shadow-lg">
        <Image 
          src={`https://picsum.photos/seed/futuretech${post.id}/1200/600`}
          alt={theme}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <div className="prose prose-lg max-w-none text-primary-dark leading-relaxed">
          <p className="text-xl font-medium mb-8">
            Dans le monde en constante évolution de la technologie, il est primordial de rester à la pointe des nouvelles pratiques. 
            Découvrez nos analyses, conseils et retours d&apos;expérience sur ce sujet essentiel pour votre activité.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Introduction</h2>
          <p className="mb-6">
            L&apos;écosystème numérique change chaque jour. L&apos;impact de ces nouvelles technologies sur notre façon de développer
            et de concevoir des applications web ne peut plus être ignoré. Nous sommes entrés dans une nouvelle ère 
            où l&apos;innovation dicte le rythme du marché.
          </p>

          <div className="bg-light p-6 rounded-2xl border-l-4 border-primary my-8">
            <p className="font-semibold text-primary m-0 italic">
              &ldquo;L&apos;innovation est ce qui distingue un leader d&apos;un suiveur. Adapter ses méthodes est la clé de la réussite.&rdquo;
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Les enjeux clés</h2>
          <p className="mb-6">
            Pour bien maîtriser ce sujet, plusieurs points doivent être pris en compte. L&apos;architecture,
            la sécurité, et bien sûr l&apos;expérience utilisateur doivent rester au centre de toutes les décisions techniques.
            L&apos;adoption de nouveaux paradigmes de développement nous permet aujourd&apos;hui d&apos;atteindre des niveaux
            de performance et de fiabilité jamais vus auparavant.
          </p>
          
          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Conclusion</h2>
          <p>
            En résumé, aborder cette thématique demande du temps, mais l'investissement en vaut largement la peine.
            Chez Future-Tech, nous mettons un point d&apos;honneur à implémenter ces concepts dans chacun de nos projets,
            afin de toujours garantir des solutions numériques modernes, scalables et durables.
          </p>
        </div>
      </div>
    </article>
  );
}
