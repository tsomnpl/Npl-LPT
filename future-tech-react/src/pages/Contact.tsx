const Contact = () => {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact</h1>
        <p className="mt-4 text-slate-600">
          Parlons de votre projet digital. Nous vous répondons rapidement avec une
          proposition adaptée.
        </p>
        <p className="mt-6 text-sm font-semibold text-slate-900">
          Email : <span className="font-normal text-slate-600">isaactchiwanou@gmail.com</span>
        </p>

        <div className="mt-8 space-y-3">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary-600 hover:text-primary-700"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary-600 hover:text-primary-700"
          >
            GitHub
          </a>
          <a
            href="https://wa.me/22898677542"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary-600 hover:text-primary-700"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-slate-900">Envoyer un message</h2>
        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Nom
            </label>
            <input
              id="name"
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Votre email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Votre message"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-700 outline-none transition focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
