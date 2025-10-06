# 🚀 Setup Produzione

## ⚠️ IMPORTANTE: Configurazione Variabili d'Ambiente

Per far funzionare il sito in produzione, **devi configurare le variabili d'ambiente** nel pannello del tuo hosting.

### 📋 Variabili Richieste

```
SENDGRID_API_KEY=SG.xxxxx... (la tua chiave SendGrid)
```

## 🔧 Come Configurare

### Se stai usando **Vercel**:

1. Vai su [vercel.com](https://vercel.com)
2. Seleziona il tuo progetto `partywoo-landing`
3. Vai su **Settings** → **Environment Variables**
4. Aggiungi:
   - **Name**: `SENDGRID_API_KEY`
   - **Value**: (la tua chiave API SendGrid - vedi `.env.local` in locale)
   - **Environments**: Seleziona **Production**, **Preview**, e **Development**
5. Clicca **Save**
6. **Redeploy** il sito (Settings → Deployments → click sui 3 puntini → Redeploy)

### Se stai usando **Netlify**:

1. Vai su [netlify.com](https://netlify.com)
2. Seleziona il tuo sito
3. Vai su **Site settings** → **Environment variables**
4. Clicca **Add a variable**
5. Aggiungi:
   - **Key**: `SENDGRID_API_KEY`
   - **Value**: (la tua chiave API SendGrid - vedi `.env.local` in locale)
6. Clicca **Save**
7. Vai su **Deploys** → **Trigger deploy** → **Deploy site**

### Se stai usando un altro hosting:

Consulta la documentazione del tuo provider su come configurare le variabili d'ambiente.
La variabile necessaria è: `SENDGRID_API_KEY`

## 🔍 Verifica Configurazione

Dopo aver configurato e redeployato, verifica che tutto funzioni:

1. Vai su `https://landing.partywoo.it` (o il tuo dominio)
2. Vai alla pagina newsletter o beta signup
3. Prova a inviare il form
4. Se funziona, vedrai il messaggio di successo
5. Controlla SendGrid Dashboard → Marketing → Contacts per vedere il contatto

## 📝 Note Importanti

### File System Read-Only in Produzione

⚠️ **Il salvataggio locale dei file JSON non funziona in produzione!**

Gli hosting serverless (Vercel, Netlify, ecc.) hanno un filesystem **read-only**.

**Soluzione implementata:**
- I dati vengono salvati **solo su SendGrid** in produzione
- In sviluppo locale, continuano a essere salvati anche nei file JSON in `data/`
- Il codice gestisce automaticamente questa differenza

### Dove Vengono Salvati i Dati

- **Sviluppo locale**: File JSON in `data/` + SendGrid
- **Produzione**: Solo SendGrid

### Come Accedere ai Dati Raccolti

1. **SendGrid Dashboard**:
   - Vai su [app.sendgrid.com](https://app.sendgrid.com)
   - Marketing → Contacts
   - Cerca per email o esporta la lista

2. **Locale (solo sviluppo)**:
   - File in `data/beta-signups.json`
   - File in `data/newsletter-subscribers.json`

## 🐛 Troubleshooting

### Errore 500 su `/api/newsletter` o `/api/beta-signup`

**Causa**: La variabile `SENDGRID_API_KEY` non è configurata

**Soluzione**:
1. Verifica di aver aggiunto la variabile d'ambiente nel pannello hosting
2. Fai un redeploy del sito
3. Controlla i logs del deployment per eventuali errori

### Come Vedere i Logs in Produzione

**Vercel**:
- Dashboard → Deployments → Seleziona il deployment → Clicca "View Function Logs"

**Netlify**:
- Dashboard → Functions → Seleziona la function → View logs

### Contatti Non Arrivano a SendGrid

1. Verifica che l'API key sia corretta
2. Controlla che l'API key abbia i permessi "Marketing" in SendGrid
3. Verifica i logs di produzione per vedere eventuali errori

## 📊 Monitoraggio

### SendGrid Activity

Vai su SendGrid Dashboard → Activity per vedere:
- Quante richieste API sono state fatte
- Eventuali errori
- Rate limits

### Logs Produzione

Controlla regolarmente i logs per vedere:
- `✅ Contatto aggiunto a SendGrid:` = Successo
- `❌ SENDGRID_API_KEY non configurata` = Variabile mancante
- `❌ Errore SendGrid:` = Problema con SendGrid API
- `⚠️ Filesystem read-only, skip salvataggio locale` = Normale in produzione

---

**Fatto questo setup, il sistema di raccolta contatti funzionerà perfettamente in produzione!** 🎉
