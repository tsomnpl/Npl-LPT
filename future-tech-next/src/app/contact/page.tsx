"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Contactez-nous</h1>
        <p className="text-xl text-primary-dark">
          Vous avez un projet en tête ? N'hésitez pas à nous écrire, nous vous répondrons dans les plus brefs délais.
        </p>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
        {isSubmitted ? (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Message envoyé avec succès !</h2>
            <p className="text-primary-dark">Merci de nous avoir contactés. Nous reviendrons vers vous très bientôt.</p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-primary hover:underline font-medium"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-primary-dark mb-2">Nom complet</label>
              <input
                type="text"
                id="nom"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300 resize-none"
                placeholder="Comment pouvons-nous vous aider ?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
