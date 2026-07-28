export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-light min-h-screen">
      <div className="bg-primary-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Blog Future-Tech
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Dernières actualités, astuces et réflexions sur le monde de la tech.
          </p>
        </div>
      </div>
      <div className="py-12">
        {children}
      </div>
    </div>
  );
}
