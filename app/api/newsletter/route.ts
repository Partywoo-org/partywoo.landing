import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

async function addToSendGrid(email: string, firstName?: string) {
  try {
    const data = {
      contacts: [
        {
          email: email,
          first_name: firstName || '',
          custom_fields: {
            // Aggiungi custom fields se necessario
          }
        }
      ]
    };

    const request = {
      url: `/v3/marketing/contacts`,
      method: 'PUT' as const,
      body: data
    };

    await sgMail.request(request);
    console.log('✅ Contatto aggiunto a SendGrid:', email);
    return true;
  } catch (error) {
    console.error('❌ Errore SendGrid:', error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validazione email
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email è obbligatoria' },
        { status: 400 }
      );
    }

    // Validazione formato email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email non valida' },
        { status: 400 }
      );
    }

    // Prepara i dati
    const subscriber = {
      email: body.email,
      nome: body.nome || '',
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Path del file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'newsletter-subscribers.json');

    // Crea directory se non esiste
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Leggi subscribers esistenti o crea array vuoto
    let subscribers = [];
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8');
      subscribers = JSON.parse(fileContent);
    }

    // Controlla se email già esiste
    const emailExists = subscribers.some(
      (sub: { email: string }) => sub.email.toLowerCase() === body.email.toLowerCase()
    );

    if (emailExists) {
      return NextResponse.json({
        success: true,
        message: 'Sei già iscritto alla newsletter!'
      });
    }

    // Aggiungi nuovo subscriber
    subscribers.push(subscriber);

    // Salva localmente
    await writeFile(filePath, JSON.stringify(subscribers, null, 2));

    // Invia a SendGrid
    await addToSendGrid(subscriber.email, subscriber.nome);

    // Log per debug
    console.log('✅ Nuova iscrizione newsletter:', subscriber);

    return NextResponse.json({
      success: true,
      message: 'Grazie per esserti iscritto!'
    });

  } catch (error) {
    console.error('❌ Errore salvataggio iscrizione newsletter:', error);
    return NextResponse.json(
      { error: 'Errore durante il salvataggio' },
      { status: 500 }
    );
  }
}
