export type ApiPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type FutureTechArticle = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
};

const techTitles = [
  "L'intelligence artificielle transforme les entreprises",
  "Pourquoi choisir React en 2026",
  "Les tendances du développement Web",
  "Les bases de la cybersécurité",
  "Cloud Computing : ce qu'il faut savoir",
  "L'importance de l'expérience utilisateur",
  "Moderniser son site avec TypeScript",
  "Automatisation digitale : gagner en productivité",
  "Comment réussir une stratégie SEO durable",
  "UI moderne : les bonnes pratiques visuelles",
  "Applications web performantes et scalables",
  "Concevoir des interfaces responsives efficaces"
];

const techContents = [
  "L'intelligence artificielle révolutionne les entreprises en automatisant les tâches, en améliorant la productivité et en facilitant la prise de décision. Bien intégrée, elle permet d'anticiper les besoins clients et de renforcer la compétitivité.",
  "React s'impose encore comme un choix solide grâce à son écosystème mature, sa modularité et sa capacité à accélérer le développement d'interfaces modernes. Son approche composant facilite la maintenance des applications.",
  "Le développement web évolue vers des expériences plus rapides, plus accessibles et plus sécurisées. Les entreprises privilégient désormais des interfaces fluides, des performances optimisées et des architectures évolutives.",
  "La cybersécurité est devenue incontournable pour protéger les données et la confiance des utilisateurs. Adopter de bonnes pratiques permet de réduire les risques et d'assurer la continuité des activités numériques.",
  "Le cloud computing offre une flexibilité essentielle pour déployer des services rapidement tout en optimisant les coûts. Il simplifie la collaboration, améliore la disponibilité et soutient la croissance des produits digitaux.",
  "L'expérience utilisateur influence directement la satisfaction et la conversion. Une interface claire, intuitive et cohérente permet aux visiteurs d'atteindre leurs objectifs plus rapidement et avec confiance.",
  "TypeScript apporte de la robustesse aux projets modernes en sécurisant le code et en réduisant les erreurs en production. Il favorise un développement plus lisible et plus fiable sur le long terme.",
  "L'automatisation des processus digitaux permet aux équipes de se concentrer sur des tâches à forte valeur ajoutée. Elle améliore la régularité opérationnelle et accélère l'exécution des projets stratégiques.",
  "Une stratégie SEO durable repose sur un contenu pertinent, une structure technique propre et une expérience mobile irréprochable. Elle aide les entreprises à gagner en visibilité et en trafic qualifié.",
  "Une interface moderne doit équilibrer esthétique et lisibilité. Des couleurs cohérentes, des espacements bien gérés et des composants réutilisables renforcent la qualité perçue d'un produit numérique.",
  "Les applications web performantes combinent une architecture claire, des composants optimisés et une bonne gestion des données. Cette approche garantit une navigation fluide même avec une forte croissance d'usage.",
  "Le responsive design est indispensable pour proposer une expérience homogène sur mobile, tablette et desktop. Des interfaces adaptatives améliorent l'accessibilité et soutiennent l'engagement utilisateur."
];

export const buildFutureTechArticles = (posts: ApiPost[]): FutureTechArticle[] =>
  posts.slice(0, 12).map((post, index) => {
    const contentIndex = (post.id + index) % techTitles.length;
    const title = techTitles[contentIndex];
    const content = techContents[contentIndex];

    return {
      id: post.id,
      title,
      description: content.slice(0, 140).trimEnd() + "...",
      content,
      image: `https://picsum.photos/seed/future-tech-${post.id}/1200/675`
    };
  });
