import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header>
        <Navbar />
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
