"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="w-full">
      <div className="hidden items-center gap-2 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-xl px-3 py-2 text-sm font-medium transition duration-300 ${
              isActive(link.href)
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 text-slate-700 transition duration-300 hover:bg-slate-100 md:hidden"
        aria-expanded={isOpen}
        aria-label="Ouvrir le menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-lg">{isOpen ? "✕" : "☰"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? "max-h-64 pt-3" : "max-h-0 pt-0"
        }`}
      >
        <div className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-md">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition duration-300 ${
                isActive(link.href)
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
