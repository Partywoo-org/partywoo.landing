# 📊 Gestione Dati Raccolti

## 🎯 Sistemi di Raccolta Dati

Partywoo! raccoglie due tipi di dati:

### 1. **Beta Tester Signups** (Gestori Sale)
**Endpoint**: `/api/beta-signup`
**Form**: `/demo`

**Dati raccolti**:
- Nome
- Cognome
- Email
- Telefono
- Nome Sala
- Messaggio
- Timestamp
- ID univoco

**File**: `landing/data/beta-signups.json`

### 2. **Newsletter Subscribers** (Utenti Interessati)
**Endpoint**: `/api/newsletter`
**Form**: Homepage e altre pagine

**Dati raccolti**:
- Email
- Nome (opzionale)
- Timestamp
- ID univoco

**File**: `landing/data/newsletter-subscribers.json`

## 📁 Dove Trovare i Dati

I dati vengono salvati in file JSON nella cartella:
```
landing/data/
├── beta-signups.json
└── newsletter-subscribers.json
```

## 🔍 Visualizzare i Dati

### Opzione 1: Editor di Testo
Apri i file JSON con qualsiasi editor di testo:
```bash
cd landing/data
cat beta-signups.json
cat newsletter-subscribers.json
```

### Opzione 2: Formattato in Terminale
```bash
cat beta-signups.json | jq '.'
```

### Opzione 3: Script Node.js
```javascript
// read-signups.js
const fs = require('fs');

const betaSignups = JSON.parse(
  fs.readFileSync('./data/beta-signups.json', 'utf-8')
);

const newsletter = JSON.parse(
  fs.readFileSync('./data/newsletter-subscribers.json', 'utf-8')
);

console.log('Beta Tester:', betaSignups.length);
console.log('Newsletter:', newsletter.length);
```

## 📤 Esportare i Dati

### CSV Export (Excel)
Puoi convertire JSON in CSV con questo script:

```javascript
// export-csv.js
const fs = require('fs');
const { parse } = require('json2csv');

const data = JSON.parse(fs.readFileSync('./data/beta-signups.json', 'utf-8'));
const csv = parse(data);
fs.writeFileSync('./beta-signups.csv', csv);
console.log('✅ CSV esportato!');
```

Installazione dipendenza:
```bash
npm install json2csv
node export-csv.js
```

## 🔐 Privacy e Sicurezza

### File .gitignore
I dati sono già esclusi da Git in `.gitignore`:
```
data/
*.json
```

### GDPR Compliance
- ✅ Consenso implicito tramite form submission
- ✅ Dati minimi raccolti
- ✅ Possibilità di cancellazione manuale
- ⚠️ TODO: Implementare funzione di cancellazione automatica

## 🚀 Prossimi Passi (Produzione)

Per un ambiente di produzione, considera:

### 1. Database
Sostituire file JSON con database:
- **PostgreSQL** + Prisma
- **MongoDB** + Mongoose
- **Supabase** (consigliato per velocità)

### 2. Email Service
Integrare servizio email per notifiche:
- **Resend** (consigliato)
- **SendGrid**
- **Mailgun**

### 3. CRM Integration
Inviare dati automaticamente a:
- **HubSpot**
- **Mailchimp**
- **ActiveCampaign**

### 4. Analytics
Tracciare conversioni con:
- **Google Analytics**
- **Plausible**
- **PostHog**

## 📝 Esempio Struttura Dati

### Beta Signup
```json
{
  "id": "1696518400000",
  "nome": "Mario",
  "cognome": "Rossi",
  "email": "mario@example.com",
  "telefono": "+39 123 456 7890",
  "nomeSala": "Villa Rosa",
  "messaggio": "Vorrei testare la piattaforma",
  "timestamp": "2024-10-05T12:00:00.000Z"
}
```

### Newsletter Subscriber
```json
{
  "id": "1696518400000",
  "email": "utente@example.com",
  "nome": "Luigi",
  "timestamp": "2024-10-05T12:00:00.000Z"
}
```

## 🛠️ Troubleshooting

### File non trovato
Se i file non esistono, verranno creati automaticamente alla prima submission.

### Permessi di scrittura
Assicurati che Next.js abbia i permessi per scrivere nella cartella `data/`:
```bash
chmod 755 data/
```

### Dati duplicati
L'API newsletter controlla automaticamente email duplicate.
Per beta signups, attualmente non c'è controllo duplicati (feature intenzionale per permettere modifiche).

---

**Nota**: Questo è un sistema di base per raccolta dati. Per produzione, migra a un database e servizio email professionale.
