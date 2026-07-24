import Card from "../components/Card";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section>
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Projects</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Découvrez les services et expertises de Future-Tech à travers une sélection
          de projets conçus pour accélérer la transformation numérique.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            id={project.id}
            to={`/projects/${project.id}`}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
