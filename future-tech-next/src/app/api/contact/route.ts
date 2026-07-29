import { NextResponse } from "next/server";

type ContactMessage = {
  id: number;
  nom: string;
  email: string;
  message: string;
};

const messages: ContactMessage[] = [];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function GET() {
  return NextResponse.json(messages, { status: 200 });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { success: false, message: "Les données envoyées sont invalides." },
      { status: 400 },
    );
  }

  const nom = typeof body.nom === "string" ? body.nom.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (nom.length < 3) {
    return NextResponse.json(
      { success: false, message: "Le nom doit contenir au moins 3 caractères." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { success: false, message: "Veuillez saisir une adresse email valide." },
      { status: 400 },
    );
  }

  if (message.length < 20) {
    return NextResponse.json(
      {
        success: false,
        message: "Le message doit contenir au moins 20 caractères.",
      },
      { status: 400 },
    );
  }

  messages.push({
    id: messages.length + 1,
    nom,
    email,
    message,
  });

  return NextResponse.json(
    { success: true, message: "Votre message a été envoyé avec succès." },
    { status: 200 },
  );
}
