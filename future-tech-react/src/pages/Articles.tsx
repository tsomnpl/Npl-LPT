import { useEffect, useMemo, useState } from "react";

type Article = {
  id: number;
  title: string;
  body: string;
};

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data: Article[] = await response.json();
        setArticles(data.slice(0, 12));
      } catch {
        setError("Impossible de récupérer les données.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) =>
        article.title.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [articles, search]
  );

  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Articles</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Retrouvez une sélection dynamique d'articles tech pour découvrir les
          tendances et bonnes pratiques du numérique.
        </p>
        <div className="mt-6">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Rechercher un article par titre..."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition duration-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
          />
        </div>
      </div>

      {isLoading && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 shadow-soft">
          Chargement des données...
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700 shadow-soft">
          {error}
        </div>
      )}

      {!isLoading && !error && filteredArticles.length === 0 && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 shadow-soft">
          Aucun résultat trouvé.
        </div>
      )}

      {!isLoading && !error && filteredArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 bg-white border border-slate-200 p-5"
            >
              <h2 className="text-lg font-semibold text-slate-900 line-clamp-2">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">
                {article.body}
              </p>
              <button
                type="button"
                className="mt-5 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-primary-700"
              >
                Voir plus
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Articles;
