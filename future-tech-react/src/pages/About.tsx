const items = [
  {
    title: "Mission",
    description:
      "Concevoir des solutions numériques utiles, élégantes et accessibles pour aider les entreprises à accélérer leur transformation digitale."
  },
  {
    title: "Vision",
    description:
      "Devenir une référence technologique en Afrique francophone en alliant innovation, simplicité et performance."
  },
  {
    title: "Valeurs",
    description:
      "Exigence, transparence, créativité et accompagnement continu à chaque étape des projets."
  }
];

const About = () => {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">À propos de Future-Tech</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Future-Tech est un studio digital qui combine développement web, design UI/UX
          et stratégie produit pour livrer des solutions modernes et fiables.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-900">Fondateur</h2>
        <p className="mt-4 text-slate-600">
          Isaac TCHIWANOU est étudiant en Système d'Information et passionné par
          le développement d'expériences numériques modernes, responsives et utiles.
        </p>
      </div>
    </section>
  );
};

export default About;
