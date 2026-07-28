import Link from "next/link";
import Image from "next/image";

// Thèmes pour remplacer les faux textes
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

export default async function BlogPage() {
  // Récupération des données côté serveur
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 } // Cache d'une heure
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const allPosts = await res.json();
  const posts = allPosts.slice(0, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any, index: number) => (
          <article 
            key={post.id} 
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100 flex flex-col h-full overflow-hidden group"
          >
            <div className="relative h-56 w-full bg-blue-50">
              <Image 
                src={`https://picsum.photos/seed/futuretech${post.id}/600/400`}
                alt={themes[index]}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm z-10">
                {categories[index]}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-sm text-gray-500 mb-3">Publié le 12 Juillet 2026</p>
              <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-blue-600 transition line-clamp-2">
                {themes[index]}
              </h2>
              <p className="text-primary-dark flex-1 mb-6 line-clamp-3">
                Découvrez les enjeux, les meilleures méthodes et les stratégies avancées autour de ce sujet passionnant pour améliorer vos projets.
              </p>
              
              <Link 
                href={`/blog/${post.id}`} 
                className="inline-flex items-center text-white bg-primary px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg transition duration-300 w-fit"
              >
                Lire l'article
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
