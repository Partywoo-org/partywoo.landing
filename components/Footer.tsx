import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="font-bold text-xl text-foreground">Partywoo!</span>
            </div>
            <p className="text-gray-600 max-w-md text-sm sm:text-base">
              La piattaforma completa per gestire la tua sala eventi in modo digitale e professionale.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Prodotto</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/funzionalita" className="text-gray-600 hover:text-primary transition-colors">
                  Funzionalità
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-600 hover:text-primary transition-colors">
                  Entra in Beta
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Azienda</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/contatti" className="text-gray-600 hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 text-center text-gray-600 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Partywoo! Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
