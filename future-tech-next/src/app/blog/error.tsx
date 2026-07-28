"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 flex justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">⚠️</span>
        </div>
        <h2 className="text-2xl font-bold text-primary mb-4">
          Impossible de charger les articles.
        </h2>
        <p className="text-primary-dark mb-8 text-lg">
          Veuillez réessayer ultérieurement.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
