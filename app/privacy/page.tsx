import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Partywoo!",
  description: "Informativa sulla privacy e protezione dei dati personali di Partywoo!",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">1. Introduzione</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              La presente Privacy Policy descrive le modalità di trattamento dei dati personali degli utenti che
              accedono al sito web di Partywoo! e utilizzano i servizi offerti. Il trattamento dei dati avviene
              nel rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente in materia di
              protezione dei dati personali.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">2. Titolare del Trattamento</h2>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Partywoo!</strong>
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Email: <a href="mailto:privacy@partywoo.it" className="text-primary hover:underline">privacy@partywoo.it</a>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Il Titolare del trattamento è responsabile della protezione dei dati personali e garantisce
              il rispetto dei diritti degli interessati.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">3. Dati Raccolti</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Raccogliamo le seguenti categorie di dati personali:
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-4 border-primary pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">3.1 Dati forniti volontariamente</h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono (opzionale)</li>
                  <li>Nome della sala eventi</li>
                  <li>Eventuali messaggi e comunicazioni</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-4 sm:pl-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">3.2 Dati raccolti automaticamente</h3>
                <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>Indirizzo IP</li>
                  <li>Tipo di browser e dispositivo</li>
                  <li>Pagine visitate e tempo di permanenza</li>
                  <li>Sistema operativo</li>
                  <li>Dati di navigazione (tramite cookie tecnici)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">4. Finalità del Trattamento</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I dati personali sono trattati per le seguenti finalità:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-base sm:text-lg mb-2">📝 Gestione Beta Program</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Elaborare le richieste di partecipazione al programma beta e fornire accesso alla piattaforma
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-base sm:text-lg mb-2">📧 Newsletter</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Inviare aggiornamenti, novità e comunicazioni relative al servizio
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-base sm:text-lg mb-2">💬 Assistenza Clienti</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Fornire supporto tecnico e rispondere alle richieste degli utenti
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 sm:p-6 rounded-xl">
                <h3 className="font-semibold text-base sm:text-lg mb-2">📊 Miglioramento Servizio</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Analizzare l'utilizzo della piattaforma per migliorarne funzionalità e prestazioni
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">5. Base Giuridica del Trattamento</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Il trattamento dei dati personali si basa su:
            </p>
            <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Consenso dell'interessato</strong> - per l'invio di comunicazioni marketing e newsletter</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Esecuzione di misure precontrattuali</strong> - per la gestione delle richieste di accesso al beta program</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Legittimo interesse</strong> - per il miglioramento del servizio e la sicurezza della piattaforma</span>
              </li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">6. Modalità di Trattamento</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I dati personali sono trattati con strumenti elettronici e manuali, con modalità organizzative
              e logiche strettamente correlate alle finalità indicate. Vengono adottate misure di sicurezza
              tecniche e organizzative adeguate per prevenire la perdita, l'uso illecito o non corretto e
              l'accesso non autorizzato ai dati.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">7. Conservazione dei Dati</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I dati personali saranno conservati per il tempo strettamente necessario alle finalità per le quali
              sono stati raccolti:
            </p>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl space-y-3 text-sm sm:text-base">
              <p className="text-gray-700">
                <strong>Beta tester:</strong> Per tutta la durata della partecipazione al programma beta e per un massimo di 24 mesi
              </p>
              <p className="text-gray-700">
                <strong>Newsletter:</strong> Fino alla revoca del consenso da parte dell'utente
              </p>
              <p className="text-gray-700">
                <strong>Richieste di supporto:</strong> Per il tempo necessario a gestire la richiesta più 12 mesi
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">8. Comunicazione e Diffusione dei Dati</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I dati personali non saranno diffusi e potranno essere comunicati esclusivamente a:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Soggetti che agiscono in qualità di responsabili del trattamento (es. fornitori di servizi IT, provider di hosting)</li>
              <li>Autorità competenti per adempimenti di obblighi di legge</li>
              <li>Consulenti professionali (commercialisti, avvocati) solo se strettamente necessario</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">9. Diritti dell'Interessato</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Ai sensi degli articoli 15-22 del GDPR, hai il diritto di:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <span className="text-primary text-xl sm:text-2xl">📋</span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Accesso</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Ottenere conferma dell'esistenza dei tuoi dati</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <span className="text-primary text-xl sm:text-2xl">✏️</span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Rettifica</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Correggere dati inesatti o incompleti</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <span className="text-primary text-xl sm:text-2xl">🗑️</span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Cancellazione</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Richiedere la rimozione dei dati</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <span className="text-primary text-xl sm:text-2xl">⏸️</span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Limitazione</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Limitare il trattamento</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <span className="text-primary text-xl sm:text-2xl">📦</span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Portabilità</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Ricevere i dati in formato strutturato</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
                <span className="text-primary text-xl sm:text-2xl">🚫</span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Opposizione</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Opporti al trattamento</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 border-l-4 border-primary p-4 sm:p-6 rounded-r-xl">
              <p className="text-gray-800 text-sm sm:text-base">
                <strong>Come esercitare i tuoi diritti:</strong> Puoi esercitare i tuoi diritti inviando una richiesta
                all'indirizzo email{' '}
                <a href="mailto:privacy@partywoo.it" className="text-primary hover:underline font-semibold">
                  privacy@partywoo.it
                </a>
                . Risponderemo entro 30 giorni dalla ricezione della richiesta.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">10. Cookie Policy</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Il sito utilizza cookie tecnici necessari al funzionamento della piattaforma. Al momento non
              utilizziamo cookie di profilazione o di terze parti per finalità di marketing. Per maggiori
              informazioni sui cookie utilizzati, consulta la nostra Cookie Policy dedicata.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">11. Modifiche alla Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento.
              Le modifiche saranno pubblicate su questa pagina con l'indicazione della data di ultimo aggiornamento.
              Ti invitiamo a consultare periodicamente questa pagina per rimanere informato sulle nostre pratiche
              di protezione dei dati.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">12. Reclami</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali
              se ritieni che il trattamento dei tuoi dati personali violi il GDPR.
            </p>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
              <p className="text-gray-700 mb-2 text-sm sm:text-base">
                <strong>Garante per la protezione dei dati personali</strong>
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Piazza Venezia, 11 - 00187 Roma<br />
                Tel: +39 06 696771<br />
                Email: garante@gpdp.it<br />
                Web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">13. Contatti</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Per qualsiasi domanda o richiesta relativa alla presente Privacy Policy o al trattamento dei
              tuoi dati personali, puoi contattarci:
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 sm:p-8 rounded-2xl">
              <div className="space-y-3 text-sm sm:text-base">
                <p className="text-gray-800">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@partywoo.it" className="text-primary hover:underline font-semibold">
                    privacy@partywoo.it
                  </a>
                </p>
                <p className="text-gray-800">
                  <strong>Supporto generale:</strong>{' '}
                  <a href="mailto:info@partywoo.it" className="text-primary hover:underline font-semibold">
                    info@partywoo.it
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Questa Privacy Policy è conforme al Regolamento UE 2016/679 (GDPR) e al D.Lgs. 196/2003 (Codice Privacy italiano)
              come modificato dal D.Lgs. 101/2018.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
