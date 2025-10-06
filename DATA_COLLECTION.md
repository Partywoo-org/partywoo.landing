# 📊 Gestione Dati Raccolti

## 🎯 Sistemi di Raccolta Dati

⚡ **INTEGRAZIONE SENDGRID ATTIVA**: Tutti i contatti vengono salvati esclusivamente su SendGrid in tempo reale. Vedi `SENDGRID_SETUP.md` per dettagli.

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

**Archiviazione**: SendGrid Marketing Contacts

### 2. **Newsletter Subscribers** (Utenti Interessati)
**Endpoint**: `/api/newsletter`
**Form**: Homepage e altre pagine

**Dati raccolti**:
- Email
- Nome (opzionale)
- Timestamp
- ID univoco

**Archiviazione**: SendGrid Marketing Contacts

## 📁 Dove Trovare i Dati

I dati vengono salvati **esclusivamente su SendGrid**:

1. Vai su [SendGrid Dashboard](https://app.sendgrid.com)
2. **Marketing** → **Contacts**
3. Cerca per email o esporta la lista completa

## 🔍 Visualizzare i Dati

### SendGrid Dashboard

1. **Accedi a SendGrid**:
   - Vai su [app.sendgrid.com](https://app.sendgrid.com)
   - Fai login con le tue credenziali

2. **Visualizza i contatti**:
   - Sidebar → **Marketing** → **Contacts**
   - Vedrai tutti i contatti raccolti

3. **Cerca un contatto specifico**:
   - Usa la barra di ricerca per cercare per email
   - Filtra per lista se hai configurato liste separate

## 📤 Esportare i Dati

### Da SendGrid Dashboard

1. Vai su **Marketing** → **Contacts**
2. Seleziona i contatti che vuoi esportare (o seleziona tutti)
3. Clicca su **Export** in alto a destra
4. Scegli il formato:
   - **CSV** (per Excel, Google Sheets)
   - **JSON** (per elaborazione programmatica)
5. Scarica il file esportato

## 🔐 Privacy e Sicurezza

### GDPR Compliance
- ✅ Consenso implicito tramite form submission
- ✅ Dati minimi raccolti
- ✅ Dati salvati su SendGrid (certificato GDPR-compliant)
- ✅ Possibilità di cancellazione contatti tramite SendGrid Dashboard

### Gestione Cancellazione Dati

Per cancellare un contatto (diritto alla cancellazione GDPR):

1. Vai su SendGrid Dashboard → Marketing → Contacts
2. Cerca il contatto per email
3. Clicca sui 3 puntini → **Delete Contact**

## 🚀 Funzionalità Avanzate

### 1. Liste Separate (Consigliato)

Crea liste dedicate in SendGrid per organizzare meglio i contatti:
- Lista "Newsletter Subscribers"
- Lista "Beta Testers"

Vedi `SENDGRID_SETUP.md` per istruzioni dettagliate.

### 2. Custom Fields

Aggiungi custom fields in SendGrid per salvare:
- Nome sala
- Messaggio
- Altri dati personalizzati

Vedi `SENDGRID_SETUP.md` per la configurazione.

### 3. Email Automation

Configura email automatiche di benvenuto:
- Dynamic Templates in SendGrid
- Automazioni triggered da nuovi contatti

### 4. Analytics e Monitoraggio

- **SendGrid Activity**: Monitora le richieste API
- **SendGrid Stats**: Vedi le statistiche dei contatti
- Integrazione con Google Analytics per tracciare conversioni

## 📝 Struttura Dati Inviati a SendGrid

### Beta Signup
```typescript
{
  email: "mario@example.com",
  first_name: "Mario",
  last_name: "Rossi",
  phone_number: "+39 123 456 7890",
  // custom_fields (se configurati):
  // - nomeSala: "Villa Rosa"
  // - messaggio: "Vorrei testare la piattaforma"
}
```

### Newsletter Subscriber
```typescript
{
  email: "luigi@example.com",
  first_name: "Luigi",
  // Timestamp gestito automaticamente da SendGrid
}
```

## 🛠️ Troubleshooting

### Contatti non arrivano a SendGrid
1. Verifica che `SENDGRID_API_KEY` sia configurata in produzione
2. Controlla i logs del server per errori
3. Verifica che l'API key abbia i permessi "Marketing"

### Email duplicate
SendGrid gestisce automaticamente i duplicati - i contatti esistenti vengono aggiornati invece che duplicati.

### Errori 500 in produzione
Vedi `PRODUCTION_SETUP.md` per la configurazione completa delle variabili d'ambiente.

---

**Nota**: Tutti i dati sono gestiti esclusivamente tramite SendGrid, una piattaforma certificata GDPR-compliant e sicura.
