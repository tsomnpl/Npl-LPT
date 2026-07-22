import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-2">
      <div>
        <p className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
          Future-Tech
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
          Construisons des expériences numériques modernes
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
          Future-Tech accompagne les entreprises dans la création de sites web,
          produits digitaux et interfaces performantes avec une approche claire,
          moderne et orientée résultats.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/about"
            className="rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-primary-700"
          >
            Découvrir
          </Link>
          <Link
            to="/contact"
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-primary-600 hover:text-primary-700"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
          alt="Équipe Future-Tech en session de travail numérique"
          className="h-72 w-full rounded-xl object-cover sm:h-96"
        />
      </div>
    </section>
  );
};

export default Home;
