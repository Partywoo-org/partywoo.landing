"use client";

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ ' + data.message);
        setEmail('');
      } else {
        setMessage('❌ ' + (data.error || 'Si è verificato un errore'));
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Errore di connessione. Riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-2 bg-white/50 rounded-full">
          <p className="text-primary font-semibold text-xs sm:text-sm">📬 RESTA AGGIORNATO</p>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
          Non sei pronto per la beta?
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Lascia la tua email e ti avviseremo quando Partywoo! sarà disponibile per tutti
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-200 focus:border-primary focus:outline-none text-base sm:text-lg"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-base sm:text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubmitting ? 'Invio...' : 'Iscriviti'}
            </button>
          </div>

          {message && (
            <div className={`mt-4 p-4 rounded-lg ${
              message.startsWith('✅')
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {message}
            </div>
          )}
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Niente spam, solo aggiornamenti importanti
        </p>
      </div>
    </section>
  );
}
