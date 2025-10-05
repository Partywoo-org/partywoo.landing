export default function FeatureShowcase() {
  const showcases = [
    {
      title: "📅 Dall'agenda cartacea al Digital Calendar",
      subtitle: "Gestisci tutte le prenotazioni in un unico posto",
      description: "Dimentica l'agenda piena di cancellature e note confuse. Con Partywoo! hai un calendario digitale sempre aggiornato, accessibile da qualsiasi dispositivo. Visualizza le prenotazioni per giorno, settimana o mese. Filtra per sala, stato o cliente. Zero rischio di doppie prenotazioni.",
      features: [
        "Vista calendario giornaliera, settimanale e mensile",
        "Colori diversi per stati delle prenotazioni",
        "Sincronizzazione in tempo reale",
        "Ricerca veloce per cliente o data"
      ],
      imagePosition: "left"
    },
    {
      title: "🏢 Le tue sale, organizzate e presentate al meglio",
      subtitle: "Ogni location ha il suo profilo completo",
      description: "Crea profili dettagliati per ogni tua sala: aggiungi foto, descrizioni, capienza, servizi disponibili e prezzi. Tutto in ordine, tutto professionale. I tuoi clienti vedono esattamente cosa offri, tu hai controllo totale su ogni dettaglio.",
      features: [
        "Foto galleria per ogni sala",
        "Gestione prezzi e servizi extra",
        "Info complete: indirizzo, contatti, orari",
        "Disponibilità personalizzabile"
      ],
      imagePosition: "right"
    },
    {
      title: "📋 Prenotazioni veloci e senza stress",
      subtitle: "Inserisci e gestisci prenotazioni in pochi click",
      description: "Crea nuove prenotazioni in meno di un minuto. Aggiungi tutti i dettagli importanti: cliente, data, orario, tipo di evento, note speciali. Modifica e aggiorna quando serve. Tutto salvato automaticamente e sempre a portata di mano.",
      features: [
        "Form semplice e intuitivo",
        "Stati personalizzabili (richiesta, confermata, completata)",
        "Note e dettagli illimitati",
        "Storico completo di tutte le prenotazioni"
      ],
      imagePosition: "left"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-32">
        {showcases.map((showcase, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              showcase.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } gap-12 items-center`}
          >
            {/* Image/Visual */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Gradient placeholder - sostituirai con screenshot reali */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index === 0 ? 'from-primary via-secondary to-accent' :
                  index === 1 ? 'from-secondary via-accent to-primary' :
                  'from-accent via-primary to-secondary'
                } opacity-20`}></div>

                {/* Mockup grid overlay */}
                <div className="absolute inset-0 bg-white">
                  <div className="h-full w-full p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${
                        index === 0 ? 'from-primary to-secondary' :
                        index === 1 ? 'from-secondary to-accent' :
                        'from-accent to-primary'
                      } flex items-center justify-center text-white text-4xl`}>
                        {showcase.title.split(' ')[0]}
                      </div>
                      <p className="text-gray-400 text-sm">
                        Screenshot coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {showcase.title}
              </h2>

              <p className="text-xl text-primary mb-6">
                {showcase.subtitle}
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {showcase.description}
              </p>

              <ul className="space-y-4">
                {showcase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
