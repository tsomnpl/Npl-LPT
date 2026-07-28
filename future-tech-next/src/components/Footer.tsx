import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-primary">Future-Tech</span>
            <p className="mt-4 text-primary-dark">
              Créons ensemble des solutions numériques modernes.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/" className="text-base text-primary-dark hover:text-primary transition duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-base text-primary-dark hover:text-primary transition duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base text-primary-dark hover:text-primary transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base text-primary-dark hover:text-primary transition duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-primary-dark">Développement Web</li>
              <li className="text-base text-primary-dark">UI/UX Design</li>
              <li className="text-base text-primary-dark">Solutions Numériques</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-primary-dark">
            &copy; 2026 Future-Tech. Développé par Isaac TCHIWANOU.
          </p>
          <p className="text-base text-primary-dark mt-4 md:mt-0">
            Email : <a href="mailto:isaactchiwanou@gmail.com" className="hover:text-primary">isaactchiwanou@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
