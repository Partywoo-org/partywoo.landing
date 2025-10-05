import Link from 'next/link';

export const metadata = {
  title: "Funzionalità - Partywoo!",
  description: "Scopri tutte le funzionalità di Partywoo! per gestire al meglio la tua sala eventi",
};

export default function FunzionalitaPage() {
  const features = [
    {
      category: "📅 Digital Calendar",
      items: [
        {
          title: "Passa dall'agenda cartacea al digitale",
          description: "Visualizza tutte le tue prenotazioni in un calendario digitale sempre aggiornato. Niente più doppi appuntamenti o confusione!"
        },
        {
          title: "Vista calendario completa",
          description: "Vedi tutte le prenotazioni per giorno, settimana o mese. Filtra per sala, stato o cliente."
        },
        {
          title: "Gestione stato prenotazioni",
          description: "Traccia ogni prenotazione dal primo contatto fino all'evento: richiesta, confermata, completata, cancellata."
        }
      ]
    },
    {
      category: "🏢 Gestione Location",
      items: [
        {
          title: "Le tue sale, organizzate",
          description: "Crea e gestisci tutte le tue sale eventi con descrizioni, foto, capienza e servizi disponibili."
        },
        {
          title: "Prezzi e servizi",
          description: "Imposta prezzi base e servizi extra per ogni location. Tutto chiaro e trasparente."
        },
        {
          title: "Info complete",
          description: "Aggiungi indirizzo, contatti, orari e tutte le informazioni utili per ogni sala."
        }
      ]
    },
    {
      category: "📋 Gestione Prenotazioni",
      items: [
        {
          title: "Crea prenotazioni velocemente",
          description: "Inserisci nuove prenotazioni con tutti i dettagli: cliente, data, orario, sala, tipo evento e note."
        },
        {
          title: "Modifica e aggiorna",
          description: "Cambia date, orari o dettagli delle prenotazioni esistenti. Tutto salvato automaticamente."
        },
        {
          title: "Storico completo",
          description: "Vedi tutte le prenotazioni passate e future. Cerca per cliente, data o sala."
        },
        {
          title: "Note e dettagli",
          description: "Aggiungi note private per ogni prenotazione: richieste speciali, allergie, decorazioni richieste."
        }
      ]
    },
    {
      category: "📊 Dashboard & Visualizzazione",
      items: [
        {
          title: "Dashboard chiara",
          description: "Vedi a colpo d'occhio le prenotazioni del giorno, della settimana e del mese."
        },
        {
          title: "Statistiche utili",
          description: "Monitora quante prenotazioni hai, quali sale sono più richieste e i trend nel tempo."
        },
        {
          title: "Mobile friendly",
          description: "Gestisci tutto dal tuo smartphone. Interfaccia ottimizzata per ogni dispositivo."
        }
      ]
    },
    {
      category: "🔒 Sicurezza & Accessi",
      items: [
        {
          title: "Account protetti",
          description: "Sistema di autenticazione sicuro con password criptate. I tuoi dati sono al sicuro."
        },
        {
          title: "Controllo accessi (RBAC)",
          description: "Gestisci chi può fare cosa: admin, partner, utenti. Ogni ruolo ha i suoi permessi."
        },
        {
          title: "Privacy garantita",
          description: "Conforme GDPR. I dati dei tuoi clienti sono protetti e gestiti in modo sicuro."
        }
      ]
    }
  ];

  const comingSoon = [
    {
      title: "💳 Pagamenti Integrati",
      description: "Accetta pagamenti online, gestisci acconti e saldi automaticamente"
    },
    {
      title: "👥 CRM Clienti",
      description: "Database clienti completo con storico, preferenze e comunicazioni automatiche"
    },
    {
      title: "📧 Email Automatiche",
      description: "Conferme, promemoria e follow-up automatici per te e i tuoi clienti"
    },
    {
      title: "📱 App Mobile Dedicata",
      description: "App nativa iOS e Android per gestire tutto ancora più facilmente"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Funzionalità <span className="text-gradient">Complete</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tutto ciò di cui hai bisogno per gestire la tua sala eventi in modo professionale ed efficiente
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto space-y-20">
          {features.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-full">
              <p className="text-primary font-semibold text-sm">🔮 IN ARRIVO PRESTO</p>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Stiamo lavorando per te
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Come beta tester, sarai tra i primi ad accedere a queste funzionalità quando saranno pronte!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comingSoon.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            Hai suggerimenti? I beta tester possono influenzare lo sviluppo futuro!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-accent to-secondary rounded-full">
            <p className="text-white font-semibold text-sm">🚀 BETA - 100% GRATIS</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ti piace quello che vedi?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Entra nel nostro programma beta e testalo gratuitamente. Aiutaci a migliorare Partywoo!!
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
