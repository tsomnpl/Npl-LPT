import { ChangeEvent, FormEvent, useState } from "react";
import InputField from "../components/InputField";

type ContactFormValues = {
  fullName: string;
  email: string;
  message: string;
};

type ContactFormErrors = {
  fullName: string;
  email: string;
  message: string;
};

const initialValues: ContactFormValues = {
  fullName: "",
  email: "",
  message: ""
};

const initialErrors: ContactFormErrors = {
  fullName: "",
  email: "",
  message: ""
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateName = (name: string) => {
    if (!name.trim()) {
      return "Le nom est obligatoire.";
    }
    if (name.trim().length < 3) {
      return "Le nom doit contenir au moins 3 caractères.";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return "L'adresse e-mail est obligatoire.";
    }
    if (!emailRegex.test(email.trim())) {
      return "Adresse email invalide.";
    }
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) {
      return "Le message est obligatoire.";
    }
    if (message.trim().length < 20) {
      return "Le message doit contenir au moins 20 caractères.";
    }
    return "";
  };

  const handleInputChange =
    (field: "fullName" | "email") => (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      setValues((prev) => ({ ...prev, [field]: nextValue }));
      setSuccessMessage("");

      if (field === "fullName") {
        setErrors((prev) => ({ ...prev, fullName: validateName(nextValue) }));
      } else {
        setErrors((prev) => ({ ...prev, email: validateEmail(nextValue) }));
      }
    };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = event.target.value;
    setValues((prev) => ({ ...prev, message: nextValue }));
    setSuccessMessage("");
    setErrors((prev) => ({ ...prev, message: validateMessage(nextValue) }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");

    const nextErrors: ContactFormErrors = {
      fullName: validateName(values.fullName),
      email: validateEmail(values.email),
      message: validateMessage(values.message)
    };

    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some((error) => error);
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Votre message a été envoyé avec succès.");
      setValues(initialValues);
      setErrors(initialErrors);
    }, 2000);
  };

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
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

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-slate-900">Envoyer un message</h2>
        <div className="mt-6 space-y-4">
          <InputField
            id="fullName"
            label="Nom complet"
            type="text"
            placeholder="Votre nom complet"
            value={values.fullName}
            onChange={handleInputChange("fullName")}
            error={errors.fullName}
            required
          />
          <InputField
            id="email"
            label="Adresse e-mail"
            type="email"
            placeholder="Votre adresse e-mail"
            value={values.email}
            onChange={handleInputChange("email")}
            error={errors.email}
            required
          />
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Décrivez votre projet ou votre besoin..."
              value={values.message}
              onChange={handleMessageChange}
              className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-700 outline-none transition duration-300 focus:ring-2 focus:ring-blue-500 ${
                errors.message ? "border-red-300" : "border-slate-300"
              }`}
              required
            />
            {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
          </div>
          {successMessage && (
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600">
              {successMessage}
            </div>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-w-40 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting && (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
            )}
            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
