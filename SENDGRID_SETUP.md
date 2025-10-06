# 📧 Integrazione SendGrid

## ✅ Configurazione Completata

L'integrazione con SendGrid è già configurata e funzionante. Quando qualcuno si iscrive alla newsletter o al programma beta, i dati vengono automaticamente inviati a SendGrid.

## 🔑 API Key

La tua API Key di SendGrid è già configurata nel file `.env.local`:
```
SENDGRID_API_KEY=SG.xxxxx... (chiave nascosta per sicurezza)
```

⚠️ **IMPORTANTE**: Il file `.env.local` è già nel `.gitignore` e NON verrà mai committato su GitHub per sicurezza. La chiave API reale è configurata solo localmente e nelle variabili d'ambiente di produzione.

## 📊 Come Funziona

### 1. Newsletter (`/api/newsletter`)
Quando qualcuno si iscrive alla newsletter:
- ✅ Salva i dati localmente in `data/newsletter-subscribers.json` (backup)
- ✅ Aggiunge il contatto automaticamente a SendGrid
- ✅ Salva: email, nome (opzionale)

### 2. Beta Tester (`/api/beta-signup`)
Quando qualcuno si iscrive al programma beta:
- ✅ Salva i dati localmente in `data/beta-signups.json` (backup)
- ✅ Aggiunge il contatto automaticamente a SendGrid
- ✅ Salva: nome, cognome, email, telefono, nome sala, messaggio

## 🎯 Prossimi Passi in SendGrid

### 1. Creare Liste Separate (Opzionale ma Consigliato)

Vai su SendGrid Dashboard → Marketing → Contacts → Lists e crea:

1. **Lista "Newsletter Subscribers"**
   - Per gestire separatamente gli iscritti alla newsletter

2. **Lista "Beta Testers"**
   - Per gestire separatamente i beta tester

Poi aggiorna `.env.local`:
```env
SENDGRID_NEWSLETTER_LIST_ID=xxxxx-xxxx-xxxx-xxxx-xxxxxxxxx
SENDGRID_BETA_LIST_ID=xxxxx-xxxx-xxxx-xxxx-xxxxxxxxx
```

### 2. Creare Custom Fields per Beta Tester

Per salvare informazioni extra dei beta tester (nome sala, messaggio), crea questi custom fields:

1. Vai su SendGrid Dashboard → Marketing → Field Definitions
2. Clicca "Create New Field"
3. Crea questi campi:

| Field Name | Field Type | Example Value |
|------------|------------|---------------|
| `nome_sala` | Text | Villa Rosa |
| `messaggio` | Text Area | Vorrei testare la piattaforma |

4. Annota l'ID del campo (es. `e1_T`, `e2_T`)
5. Aggiorna il codice in `app/api/beta-signup/route.ts`:

```typescript
custom_fields: {
  e1_T: data.nomeSala,      // Sostituisci e1_T con l'ID del tuo campo
  e2_T: data.messaggio || '' // Sostituisci e2_T con l'ID del tuo campo
}
```

## 🧪 Test dell'Integrazione

### Test Newsletter:
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","nome":"Mario"}'
```

### Test Beta Signup:
```bash
curl -X POST http://localhost:3000/api/beta-signup \
  -H "Content-Type: application/json" \
  -d '{
    "nome":"Mario",
    "cognome":"Rossi",
    "email":"mario@example.com",
    "telefono":"+39 123 456 7890",
    "nomeSala":"Villa Rosa",
    "messaggio":"Vorrei testare la piattaforma"
  }'
```

Dopo il test, controlla:
1. **Console logs**: Dovresti vedere `✅ Contatto aggiunto a SendGrid`
2. **SendGrid Dashboard**: Vai su Marketing → Contacts e cerca l'email

## 📧 Invio Email di Benvenuto (Opzionale)

Se vuoi inviare automaticamente email di benvenuto, puoi:

1. **Creare un Dynamic Template in SendGrid**
   - Dashboard → Email API → Dynamic Templates
   - Crea template per "Benvenuto Newsletter" e "Benvenuto Beta"

2. **Aggiornare gli endpoint API** per inviare email:
```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

await sgMail.send({
  to: email,
  from: 'noreply@partywoo.it', // Verifica questo indirizzo in SendGrid
  templateId: 'd-xxxxxxxxxxxxx', // ID del tuo template
  dynamicTemplateData: {
    nome: nome,
    // altri dati...
  }
});
```

## 🔍 Monitoraggio

### Logs in Tempo Reale
Quando il server è in esecuzione (`npm run dev`), vedrai:
- `✅ Contatto aggiunto a SendGrid: email@example.com`
- `❌ Errore SendGrid:` (se qualcosa va male)

### SendGrid Dashboard
- **Contacts**: Vedi tutti i contatti raccolti
- **Activity**: Monitora l'attività API
- **Stats**: Statistiche sulle email inviate (se configuri l'invio)

## ⚠️ Troubleshooting

### Errore: "Unauthorized"
- Verifica che l'API Key in `.env.local` sia corretta
- Controlla che l'API Key abbia i permessi "Marketing"

### Contatti non appaiono in SendGrid
- Controlla i logs della console
- Verifica che l'API Key sia attiva
- Prova il test curl sopra

### Email duplicate
- SendGrid gestisce automaticamente i duplicati
- Non verranno create entry duplicate se l'email esiste già

## 🚀 Deploy in Produzione

Quando fai il deploy su Vercel/Netlify/altro:

1. **Non committare mai `.env.local`** (è già nel .gitignore)
2. **Aggiungi le variabili d'ambiente nel dashboard del tuo hosting**:
   - `SENDGRID_API_KEY=` (la tua chiave API SendGrid)
   - (opzionale) `SENDGRID_NEWSLETTER_LIST_ID=...`
   - (opzionale) `SENDGRID_BETA_LIST_ID=...`

## 📚 Risorse

- [SendGrid Docs - Add Contacts](https://docs.sendgrid.com/api-reference/contacts/add-or-update-a-contact)
- [SendGrid Docs - Custom Fields](https://docs.sendgrid.com/ui/managing-contacts/custom-fields)
- [SendGrid Docs - Lists](https://docs.sendgrid.com/ui/managing-contacts/create-and-manage-contacts-lists)

---

**Nota**: Attualmente i contatti vengono aggiunti alla lista principale di SendGrid. Per gestire liste separate, segui la sezione "Prossimi Passi" sopra.
