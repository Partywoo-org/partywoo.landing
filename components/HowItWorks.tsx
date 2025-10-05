export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Entra in Beta",
      description: "Compila il form, ti diamo accesso e creiamo il tuo account"
    },
    {
      number: "02",
      title: "Configura le Sale",
      description: "Aggiungi le tue sale con foto, descrizioni, prezzi e disponibilità"
    },
    {
      number: "03",
      title: "Gestisci dal Calendario",
      description: "Dimentica l'agenda cartacea! Tutte le prenotazioni nel digital calendar"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Inizia in 3 semplici passi
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Non serve essere esperti di tecnologia. Configura tutto in meno di 5 minuti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              )}
              <div className="relative text-center">
                <div className="inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
