export const metadata = {
  title: "Contatti - Partywoo!",
  description: "Contattaci per qualsiasi domanda o richiesta di informazioni su Partywoo!",
};

export default function ContattiPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Parliamone <span className="text-gradient">insieme</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hai domande? Vuoi saperne di più? Il nostro team è qui per aiutarti.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">Rispondiamo entro 24 ore</p>
            <a href="mailto:info@partywoo.com" className="text-primary hover:text-primary-dark font-medium">
              info@partywoo.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Telefono</h3>
            <p className="text-gray-600 mb-4">Lun-Ven 9:00-18:00</p>
            <a href="tel:+390123456789" className="text-primary hover:text-primary-dark font-medium">
              +39 012 345 6789
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Chat Live</h3>
            <p className="text-gray-600 mb-4">Supporto in tempo reale</p>
            <button className="text-primary hover:text-primary-dark font-medium">
              Avvia chat
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Domande Frequenti</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "Quanto costa Partywoo!?",
                a: "I nostri piani partono da €49/mese. Offriamo anche una prova gratuita di 14 giorni senza bisogno di carta di credito."
              },
              {
                q: "È difficile da configurare?",
                a: "Assolutamente no! La configurazione richiede meno di 5 minuti e il nostro team di supporto è sempre disponibile per aiutarti."
              },
              {
                q: "Posso integrarlo con il mio sito web?",
                a: "Sì, Partywoo! si integra facilmente con qualsiasi sito web tramite widget o API. Supportiamo WordPress, Wix e molte altre piattaforme."
              },
              {
                q: "I dati sono al sicuro?",
                a: "La sicurezza è la nostra priorità. Utilizziamo crittografia SSL, backup giornalieri e siamo conformi al GDPR."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
