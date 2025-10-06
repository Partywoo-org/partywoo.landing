import { NextResponse } from 'next/server';
import client from '@sendgrid/client';

client.setApiKey(process.env.SENDGRID_API_KEY || '');

interface BetaSignupData {
  nome: string;
  cognome: string;
  email: string;
  telefono?: string;
  nomeSala: string;
  messaggio?: string;
}

async function addBetaToSendGrid(data: BetaSignupData) {
  try {
    // Verifica che l'API key sia configurata
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SENDGRID_API_KEY non configurata');
      return false;
    }

    const contactData = {
      contacts: [
        {
          email: data.email,
          first_name: data.nome,
          last_name: data.cognome,
          phone_number: data.telefono || '',
          custom_fields: {
            // Puoi aggiungere custom fields qui se li crei in SendGrid
            // e1_T: data.nomeSala, // esempio: campo custom per nome sala
          }
        }
      ]
    };

    const request = {
      url: `/v3/marketing/contacts`,
      method: 'PUT' as const,
      body: contactData
    };

    await client.request(request);
    console.log('✅ Beta tester aggiunto a SendGrid:', data.email);
    return true;
  } catch (error) {
    console.error('❌ Errore SendGrid beta signup:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validazione
    if (!body.nome || !body.email || !body.nomeSala) {
      return NextResponse.json(
        { error: 'Nome, email e nome sala sono obbligatori' },
        { status: 400 }
      );
    }

    // Prepara i dati
    const signup = {
      ...body,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Invia a SendGrid
    const sendgridSuccess = await addBetaToSendGrid(body as BetaSignupData);

    if (!sendgridSuccess) {
      throw new Error('Errore invio a SendGrid');
    }

    // Log per debug
    console.log('✅ Nuova iscrizione beta:', signup);

    return NextResponse.json({
      success: true,
      message: 'Iscrizione ricevuta con successo!'
    });

  } catch (error) {
    console.error('❌ Errore salvataggio iscrizione beta:', error);
    return NextResponse.json(
      { error: 'Errore durante il salvataggio' },
      { status: 500 }
    );
  }
}
