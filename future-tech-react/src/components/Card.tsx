import { Link } from "react-router-dom";

type CardProps = {
  id: string | number;
  to: string;
  title: string;
  image: string;
  description: string;
  buttonLabel?: string;
};

const Card = ({
  id,
  to,
  title,
  image,
  description,
  buttonLabel = "Voir plus"
}: CardProps) => {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img src={image} alt={title} className="aspect-video w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-4">
          {description}
        </p>
        <Link
          to={to}
          className="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
          aria-label={`${buttonLabel} - ${title}`}
        >
          {buttonLabel}
        </Link>
      </div>
    </article>
  );
};

export default Card;
