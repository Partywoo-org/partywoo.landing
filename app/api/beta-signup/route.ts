import { NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

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

    // Path del file
    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'beta-signups.json');

    // Crea directory se non esiste
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // Leggi signups esistenti o crea array vuoto
    let signups = [];
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8');
      signups = JSON.parse(fileContent);
    }

    // Aggiungi nuovo signup
    signups.push(signup);

    // Salva
    await writeFile(filePath, JSON.stringify(signups, null, 2));

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
