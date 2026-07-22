import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/articles", label: "Articles" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "À propos" },
  { to: "/contact", label: "Contact" }
];

const baseLinkClass =
  "rounded-lg px-3 py-2 text-sm font-medium transition duration-300";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderNavLink = (to: string, label: string) => (
    <NavLink
      to={to}
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `${baseLinkClass} ${
          isActive
            ? "bg-primary-600 text-white"
            : "text-slate-700 hover:bg-primary-50 hover:text-primary-700"
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          Future-Tech
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <div key={link.to}>{renderNavLink(link.to, link.label)}</div>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Ouvrir le menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-lg">{isMenuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white px-4 transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-72 py-3" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <div key={link.to}>{renderNavLink(link.to, link.label)}</div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
