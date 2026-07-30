"use client";

import { useState } from "react";

type ContactFormData = {
  nom: string;
  email: string;
  message: string;
};

type FormStatus = {
  type: "success" | "error";
  message: string;
};

const initialFormData: ContactFormData = { nom: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data: unknown = await response.json();
      const message =
        typeof data === "object" &&
        data !== null &&
        "message" in data &&
        typeof data.message === "string"
          ? data.message
          : "Une erreur est survenue. Veuillez réessayer.";

      if (!response.ok) {
        setFormStatus({ type: "error", message });
        return;
      }

      setFormStatus({ type: "success", message });
      setFormData(initialFormData);
    } catch {
      setFormStatus({
        type: "error",
        message: "Impossible d'envoyer votre message. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
      {formStatus && (
        <div
          className={`mb-6 flex items-start gap-3 rounded-xl border px-4 py-4 text-sm font-medium ${
            formStatus.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="status"
          aria-live="polite"
        >
          <svg
            className="mt-0.5 h-5 w-5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {formStatus.type === "success" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3Z"
              />
            )}
          </svg>
          <p>{formStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-primary-dark mb-2">
            Nom complet
          </label>
          <input
            type="text"
            id="nom"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 disabled:cursor-not-allowed disabled:bg-gray-50"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={(event) => setFormData({ ...formData, nom: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 disabled:cursor-not-allowed disabled:bg-gray-50"
            placeholder="votre.email@exemple.com"
            value={formData.email}
            onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            disabled={isSubmitting}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 resize-none disabled:cursor-not-allowed disabled:bg-gray-50"
            placeholder="Comment pouvons-nous vous aider ?"
            value={formData.message}
            onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-4 text-lg font-bold text-white transition duration-300 hover:shadow-xl enabled:hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
              </svg>
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </button>
      </form>
    </div>
  );
}
