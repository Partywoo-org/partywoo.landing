import Link from 'next/link';

export const metadata = {
  title: "Prezzi - Partywoo!",
  description: "Scegli il piano perfetto per la tua sala eventi. Prezzi trasparenti senza costi nascosti.",
};

export default function PrezziPage() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfetto per iniziare",
      features: [
        "Fino a 50 prenotazioni/mese",
        "Calendario e gestione eventi",
        "Pagamenti online",
        "Email di conferma automatiche",
        "Supporto via email",
        "Dashboard base"
      ],
      cta: "Inizia gratis",
      highlighted: false
    },
    {
      name: "Professional",
      price: "99",
      description: "Il più scelto",
      features: [
        "Prenotazioni illimitate",
        "Tutte le funzionalità Starter",
        "CRM clienti avanzato",
        "SMS automatici",
        "Report e analytics",
        "Supporto prioritario",
        "Widget personalizzabile",
        "Multi-utente (3 account)"
      ],
      cta: "Inizia gratis",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Per grandi organizzazioni",
      features: [
        "Tutto in Professional",
        "Account manager dedicato",
        "Configurazione personalizzata",
        "Integrazioni custom",
        "Utenti illimitati",
        "SLA garantito 99.9%",
        "Formazione on-site",
        "API access completo"
      ],
      cta: "Contattaci",
      highlighted: false
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Beta Banner */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-accent to-secondary rounded-2xl p-8 text-center text-white">
            <div className="inline-block mb-3 px-3 py-1 bg-white/20 rounded-full">
              <p className="font-semibold text-sm">🚀 PROGRAMMA BETA</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Entra ora gratis come beta tester!
            </h2>
            <p className="text-lg opacity-95">
              Questi saranno i nostri prezzi futuri. Ma ora cerchiamo beta tester che testino gratuitamente Partywoo! e ci diano feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Prezzi <span className="text-gradient">Futuri</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Ecco come saranno strutturati i nostri piani quando usciremo dalla beta. Per ora, tutto è gratis!
        </p>
        <div className="flex justify-center items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">100% gratuito per beta tester</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">Posti limitati</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-2xl scale-105 relative'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Più Popolare
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-4">
                  {plan.price === "Custom" ? (
                    <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                      Su misura
                    </div>
                  ) : (
                    <>
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-foreground'}`}>
                        €{plan.price}
                      </span>
                      <span className={`text-lg ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>/mese</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-green-500'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.price === "Custom" ? "/contatti" : "/demo"}
                className={`block w-full text-center px-6 py-4 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:shadow-xl'
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Domande sui prezzi</h2>
          <div className="space-y-6">
            {[
              {
                q: "Posso cambiare piano in qualsiasi momento?",
                a: "Assolutamente sì. Puoi fare upgrade o downgrade del tuo piano in qualsiasi momento. Le modifiche avranno effetto dal prossimo ciclo di fatturazione."
              },
              {
                q: "Ci sono costi di configurazione?",
                a: "No, non ci sono costi di configurazione o attivazione. Paghi solo il canone mensile del piano scelto."
              },
              {
                q: "Cosa succede dopo la prova gratuita?",
                a: "Dopo i 14 giorni di prova, se non hai inserito un metodo di pagamento, il tuo account passerà automaticamente al piano gratuito limitato. Nessuna sorpresa!"
              },
              {
                q: "Offrite sconti per pagamenti annuali?",
                a: "Sì! Scegliendo il pagamento annuale risparmi il 20% rispetto al piano mensile. Contattaci per maggiori informazioni."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Perché aspettare?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Entra ora come beta tester e usa Partywoo! completamente gratis. Nessun costo, nessun rischio!
          </p>
          <Link
            href="/demo"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-lg shadow-lg"
          >
            Diventa beta tester
          </Link>
        </div>
      </section>
    </div>
  );
}
