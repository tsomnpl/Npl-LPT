import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Future-Tech</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Studio digital moderne pour accompagner les entreprises et entrepreneurs.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link to="/" className="transition hover:text-primary-700">
                Accueil
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
          <p className="mt-3 text-sm text-slate-600">isaactchiwanou@gmail.com</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Crédit</h4>
          <p className="mt-3 text-sm text-slate-600">Développé par Isaac TCHIWANOU</p>
          <p className="mt-2 text-xs text-slate-500">
            © {new Date().getFullYear()} Future-Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
