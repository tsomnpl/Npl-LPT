import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Future-Tech</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Studio digital moderne spécialisé dans :
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>• Développement Web</li>
            <li>• UI/UX Design</li>
            <li>• Solutions numériques</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Navigation</h4>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
            <li>
              <Link to="/" className="transition hover:text-primary-700">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/articles" className="transition hover:text-primary-700">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition hover:text-primary-700">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-primary-700">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-primary-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <p className="mt-2 text-sm text-slate-600">isaactchiwanou@gmail.com</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Suivez-nous</h4>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary-700"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary-700"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-primary-700"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Future-Tech</p>
          <p>Développé par Isaac TCHIWANOU</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
