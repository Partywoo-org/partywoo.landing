"use client";

import { useState } from 'react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    nomeSala: '',
    messaggio: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('✅ Fantastico! Benvenuto nel programma beta di Partywoo! Ti contatteremo a breve per iniziare!');
        // Reset form
        setFormData({
          nome: '',
          cognome: '',
          email: '',
          telefono: '',
          nomeSala: '',
          messaggio: ''
        });
      } else {
        setSubmitMessage('❌ ' + (data.error || 'Si è verificato un errore. Riprova.'));
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('❌ Errore di connessione. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Banner Piattaforma Online */}
        <div className="mb-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse mr-3"></div>
            <span className="font-bold text-lg uppercase tracking-wide">✨ Partywoo! è già ONLINE!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Sei proprietario di una sala? Inizia SUBITO!
          </h2>
          <p className="text-center text-lg mb-6 opacity-95">
            La piattaforma è riservata a gestori e proprietari di sale eventi. Non devi aspettare: registrati e inizia a usarla immediatamente.
          </p>
          <div className="flex justify-center">
            <a
              href="https://partner.partywoo.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-full hover:shadow-xl transition-all font-bold text-lg"
            >
              <span>Vai alla Piattaforma</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <p className="text-center text-sm mt-4 opacity-90">
            👉 partner.partywoo.it
          </p>
        </div>

        {/* Divider */}
        <div className="text-center my-12">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-gray-500">oppure</span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full border-2 border-accent/30">
            <p className="text-accent font-semibold text-sm">📝 Preferisci un supporto guidato?</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compila il form per <span className="text-gradient">supporto dedicato</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vuoi che ti aiutiamo nella configurazione iniziale? Compila il form e ti contatteremo per darti supporto personalizzato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="cognome" className="block text-sm font-medium text-gray-700 mb-2">
                    Cognome *
                  </label>
                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    required
                    value={formData.cognome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="nomeSala" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome della tua sala eventi *
                </label>
                <input
                  type="text"
                  id="nomeSala"
                  name="nomeSala"
                  required
                  value={formData.nomeSala}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                  Messaggio (opzionale)
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={4}
                  value={formData.messaggio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Raccontaci brevemente delle tue esigenze..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Invio in corso...' : 'Richiedi Supporto Dedicato'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.startsWith('✅')
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                Ti risponderemo entro 24 ore per iniziare il supporto guidato
              </p>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-green-800">Piattaforma GIÀ DISPONIBILE!</h3>
              </div>
              <p className="text-green-700 mb-4">
                <strong>Per proprietari di sale eventi:</strong> Vai su <strong>partner.partywoo.it</strong>, registrati e inizia subito a gestire le tue prenotazioni!
              </p>
              <a
                href="https://partner.partywoo.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700"
              >
                Vai alla piattaforma →
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Perché compilare il form?</h2>
              <ul className="space-y-4">
                {[
                  "Supporto personalizzato nella configurazione iniziale",
                  "Onboarding guidato step-by-step",
                  "Formazione dedicata sulle funzionalità",
                  "Supporto prioritario via chat, email e telefono",
                  "Accesso anticipato a nuove funzionalità in arrivo"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">Due modi per iniziare</h3>
              <p className="text-gray-600 mb-4">
                <strong>1. Autonomo:</strong> Registrati direttamente su partner.partywoo.it e inizia subito.<br/>
                <strong>2. Guidato:</strong> Compila il form e ti aiutiamo noi passo dopo passo.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-gray-700">Posti limitati per garantire supporto di qualità</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-gray-700">Zero rischi: se non ti piace, nessun problema</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-gray-700">Diventa parte del futuro di Partywoo!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
