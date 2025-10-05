import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">P</span>
            </div>
            <span className="font-bold text-lg sm:text-xl text-foreground">Partywoo!</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/funzionalita" className="text-gray-600 hover:text-primary transition-colors text-sm lg:text-base">
              Funzionalità
            </Link>
            <Link href="/contatti" className="text-gray-600 hover:text-primary transition-colors text-sm lg:text-base">
              Contatti
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="/login"
              className="hidden sm:block text-gray-600 hover:text-primary transition-colors text-sm lg:text-base"
            >
              Accedi
            </Link>
            <Link
              href="/demo"
              className="bg-gradient-to-r from-primary to-secondary text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full hover:opacity-90 transition-opacity font-medium flex items-center gap-1 sm:gap-2 text-xs sm:text-sm lg:text-base"
            >
              <span className="hidden sm:inline">Entra in beta</span>
              <span className="sm:hidden">Beta</span>
              <span className="bg-white/20 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs">Gratis</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
