"use server";

import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const prenom = (formData.get("prenom") as string | null)?.trim() ?? "";
  const nom = (formData.get("nom") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  if (!prenom || !email || !message) {
    return { status: "error", message: "Veuillez remplir tous les champs obligatoires." };
  }

  try {
    await resend.emails.send({
      from: "Contact Lymar <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nouveau message de ${prenom} ${nom}`,
      text: `Prénom : ${prenom}\nNom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`,
      html: `
        <p><strong>Prénom :</strong> ${prenom}</p>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p><strong>Message :</strong></p>
        <p style="white-space:pre-wrap">${message}</p>
      `,
    });
    return { status: "success" };
  } catch {
    return { status: "error", message: "Une erreur est survenue. Veuillez réessayer." };
  }
}
