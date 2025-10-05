# Partywoo! Landing Page

Landing page moderna e minimale per Partywoo! - Piattaforma SaaS per la gestione di sale eventi.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📁 Struttura del Progetto

```
landing/
├── app/
│   ├── page.tsx              # Homepage
│   ├── funzionalita/         # Pagina funzionalità
│   ├── prezzi/               # Pagina prezzi
│   ├── demo/                 # Form richiesta demo
│   ├── contatti/             # Pagina contatti
│   ├── layout.tsx            # Layout globale
│   └── globals.css           # Stili globali
├── components/
│   ├── Header.tsx            # Header con navigazione
│   ├── Footer.tsx            # Footer
│   ├── Hero.tsx              # Sezione hero homepage
│   ├── Features.tsx          # Sezione features
│   ├── HowItWorks.tsx        # Sezione "come funziona"
│   └── CTA.tsx               # Call-to-action
└── public/                   # Assets statici
```

## 🎨 Design System

### Colori Brand
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Violet)
- **Accent**: `#ec4899` (Pink)

### Typography
- Font principale: Geist Sans (system-ui fallback)
- Font mono: Geist Mono

## 📄 Pagine

### Homepage (`/`)
- ✨ Hero section con CTA principale
- 💼 Sezione features con 6 funzionalità chiave
- 🎯 "Come funziona" in 3 step
- 🚀 CTA finale con gradient

### Funzionalità (`/funzionalita`)
- Catalogo completo di tutte le features
- Organizzato per categoria
- Card hover effects

### Prezzi (`/prezzi`)
- 3 piani tariffari (Starter, Professional, Enterprise)
- Piano più popolare evidenziato
- FAQ sui prezzi

### Richiedi Demo (`/demo`)
- Form di contatto interattivo
- Info sul processo demo
- Statistiche di impatto

### Contatti (`/contatti`)
- Canali di contatto (email, telefono, chat)
- FAQ generali
- Layout pulito e accessibile

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment Ready**: Vercel, Netlify, etc.

## 🎯 Features Implementate

✅ Design responsivo mobile-first
✅ Animazioni smooth e transizioni
✅ SEO ottimizzato con metadata
✅ Performance ottimizzate
✅ Accessibilità (a11y)
✅ Tema colori moderno
✅ Componenti riutilizzabili
✅ TypeScript strict mode

## 📦 Build per Produzione

```bash
npm run build
npm start
```

## 🚢 Deploy

### Vercel (Consigliato)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload cartella .next alla Netlify
```

### Docker
```bash
docker build -t partywoo-landing .
docker run -p 3000:3000 partywoo-landing
```

## 🔧 Personalizzazione

### Modificare i colori brand
Edita `app/globals.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --accent: #ec4899;
}
```

### Aggiungere nuove pagine
1. Crea cartella in `app/nome-pagina/`
2. Aggiungi `page.tsx`
3. Aggiorna navigazione in `Header.tsx`

## 📝 TODO

- [ ] Implementare backend per form demo
- [ ] Aggiungere animazioni scroll-based
- [ ] Integrare analytics (GA4)
- [ ] A/B testing per CTA
- [ ] Multilingua (i18n)

## 🤝 Contribuire

Questo è un progetto interno. Per modifiche contattare il team di sviluppo.

## 📄 Licenza

Proprietario - Partywoo! © 2024

---

**Built with ❤️ for Partywoo!**
