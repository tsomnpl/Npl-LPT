import { Link } from "react-router-dom";

type CardProps = {
  id: string;
  title: string;
  image: string;
  description: string;
};

const Card = ({ id, title, image, description }: CardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
        <Link
          to={`/projects/${id}`}
          className="mt-5 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
        >
          Voir plus
        </Link>
      </div>
    </article>
  );
};

export default Card;
