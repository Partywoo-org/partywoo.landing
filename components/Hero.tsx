import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 sm:px-4 py-2 bg-gradient-to-r from-accent to-secondary rounded-full">
          <p className="text-white font-semibold text-xs sm:text-sm">🚀 BETA - Entra gratis ora come early adopter</p>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
          Gestisci la tua sala eventi
          <br />
          <span className="text-gradient">con semplicità</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
          Il modo più semplice per organizzare e gestire le prenotazioni della tua sala.
          Dimentica l'agenda cartacea, passa al digitale!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link
            href="/demo"
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:opacity-90 transition-opacity font-semibold text-base sm:text-lg shadow-lg text-center"
          >
            Diventa beta tester (Gratis)
          </Link>
          <Link
            href="/funzionalita"
            className="w-full sm:w-auto border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary hover:text-white transition-all font-semibold text-base sm:text-lg text-center"
          >
            Vedi come funziona
          </Link>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 px-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>100% gratuito per beta tester</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Pronto in 5 minuti</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Supporto diretto del team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
