import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-2xl font-bold text-slate-900">Projet introuvable</h1>
        <p className="mt-3 text-slate-600">
          Le projet demandé n'existe pas ou n'est plus disponible.
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-700"
        >
          Retour aux projets
        </Link>
      </section>
    );
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <img
        src={project.image}
        alt={project.title}
        className="h-64 w-full rounded-xl object-cover sm:h-80"
      />
      <h1 className="mt-6 text-3xl font-bold text-slate-900">{project.title}</h1>
      <p className="mt-4 text-slate-600">{project.description}</p>
      <p className="mt-4 leading-relaxed text-slate-700">{project.content}</p>
      <Link
        to="/projects"
        className="mt-8 inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary-600 hover:text-primary-700"
      >
        Retour aux projets
      </Link>
    </section>
  );
};

export default ProjectDetails;
