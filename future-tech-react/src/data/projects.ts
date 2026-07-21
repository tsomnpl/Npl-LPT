export type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string;
};

export const projects: Project[] = [
  {
    id: "site-vitrine",
    title: "Création de sites vitrines",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    description: "Des sites vitrines modernes, rapides et orientés conversion.",
    content:
      "Nous concevons des sites vitrines professionnels avec une expérience utilisateur claire, un design responsive et des performances optimisées pour valoriser votre activité."
  },
  {
    id: "app-web",
    title: "Développement d'applications web",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description:
      "Des applications web robustes adaptées à vos processus métier.",
    content:
      "Future-Tech développe des applications web sur mesure pour automatiser vos opérations, centraliser vos données et améliorer la productivité de vos équipes."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&w=1200&q=80",
    description: "Des interfaces élégantes centrées sur l'expérience utilisateur.",
    content:
      "Nous construisons des parcours fluides et intuitifs en appliquant les bonnes pratiques UI/UX pour améliorer l'engagement et la satisfaction des utilisateurs."
  },
  {
    id: "branding-digital",
    title: "Branding digital",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Une identité digitale cohérente pour renforcer votre présence en ligne.",
    content:
      "Nous accompagnons votre marque dans la définition de son univers visuel, de sa tonalité et de ses supports digitaux pour créer une image forte et mémorable."
  },
  {
    id: "seo",
    title: "Optimisation SEO",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80",
    description:
      "Un meilleur positionnement pour générer du trafic qualifié durablement.",
    content:
      "Nous mettons en place une stratégie SEO technique et éditoriale afin d'améliorer la visibilité de votre site dans les moteurs de recherche."
  },
  {
    id: "maintenance-support",
    title: "Maintenance et support",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    description: "Un suivi continu pour garder vos outils fiables et performants.",
    content:
      "Nous assurons la maintenance évolutive et corrective de vos plateformes pour garantir stabilité, sécurité et évolutivité dans la durée."
  }
];

export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);
