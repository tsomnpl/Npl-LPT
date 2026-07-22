import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiPost, FutureTechArticle, buildFutureTechArticles } from "../data/articles";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<FutureTechArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data: ApiPost[] = await response.json();
        const builtArticles = buildFutureTechArticles(data);
        const selectedArticle = builtArticles.find(
          (item) => item.id === Number(id)
        );

        if (!selectedArticle) {
          setError("Article introuvable.");
          setArticle(null);
          return;
        }

        setArticle(selectedArticle);
      } catch {
        setError("Impossible de récupérer les données.");
        setArticle(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
        Chargement des données...
      </section>
    );
  }

  if (error || !article) {
    return (
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-md">
        <p className="text-slate-700">{error || "Article introuvable."}</p>
        <Link
          to="/articles"
          className="mt-4 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-primary-700"
        >
          Retour
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
      <img
        src={article.image}
        alt={article.title}
        className="aspect-video w-full rounded-xl object-cover"
      />
      <h1 className="mt-6 text-3xl font-bold text-slate-900">{article.title}</h1>
      <p className="mt-4 text-slate-600">{article.description}</p>
      <p className="mt-4 leading-relaxed text-slate-700">{article.content}</p>
      <Link
        to="/articles"
        className="mt-8 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-primary-700"
      >
        Retour
      </Link>
    </section>
  );
};

export default ArticleDetails;
