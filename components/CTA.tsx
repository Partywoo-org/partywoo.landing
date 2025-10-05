import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Aiutaci a rendere Partywoo! ancora migliore
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-95 max-w-2xl mx-auto px-2">
              Cerchiamo gestori di sale che vogliano testare Partywoo! e darci feedback. In cambio, uso gratuito e accesso early a tutte le nuove funzionalità!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link
                href="/demo"
                className="w-full sm:w-auto bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-shadow font-semibold text-base sm:text-lg"
              >
                Diventa beta tester
              </Link>
              <Link
                href="/contatti"
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-primary transition-all font-semibold text-base sm:text-lg"
              >
                Parliamone insieme
              </Link>
            </div>

            <p className="mt-6 sm:mt-8 text-xs sm:text-sm opacity-90 px-2">
              100% gratuito per beta tester • Posti limitati • Supporto prioritario
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
