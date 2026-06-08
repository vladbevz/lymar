"use client";

import { useActionState } from "react";
import { FadeUp } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";
import { PLANITY_LOCATIONS } from "@/lib/site";

const initial: ContactState = { status: "idle" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initial);

  if (state.status === "success") {
    return (
      <section className="py-12 lg:py-24 bg-warm border-t border-zinc-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="font-logo text-4xl font-light text-black mb-4">Merci !</p>
            <p className="font-(family-name:--font-inter) text-sm text-zinc-500">
              Votre message a bien été envoyé. Anastasiia vous répondra dans les plus brefs délais.
            </p>
          </FadeUp>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 lg:py-24 bg-warm border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp>
          <p className="text-xs tracking-[0.25em] uppercase font-(family-name:--font-inter) text-zinc-400 mb-3">
            Message
          </p>
          <h2 className="font-logo text-4xl font-light text-black mb-12">
            Envoyer un message
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form action={action} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                  Prénom <span className="text-zinc-400">*</span>
                </label>
                <Input
                  name="prenom"
                  required
                  placeholder="Votre prénom"
                  className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                  Nom
                </label>
                <Input
                  name="nom"
                  placeholder="Votre nom"
                  className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black"
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                Email <span className="text-zinc-400">*</span>
              </label>
              <Input
                name="email"
                type="email"
                required
                placeholder="votre@email.fr"
                className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black"
              />
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase font-(family-name:--font-inter) text-zinc-500 mb-2 block">
                Message <span className="text-zinc-400">*</span>
              </label>
              <Textarea
                name="message"
                required
                placeholder="Votre message, la prestation souhaitée..."
                rows={6}
                className="rounded-none border-zinc-200 bg-white font-(family-name:--font-inter) text-sm focus-visible:ring-0 focus-visible:border-black resize-none"
              />
            </div>

            {state.status === "error" && (
              <p className="font-(family-name:--font-inter) text-xs text-red-500">
                {state.message}
              </p>
            )}

            <p className="font-(family-name:--font-inter) text-[11px] text-zinc-400 leading-relaxed">
              En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour répondre à votre demande, conformément à notre{" "}
              <a href="/politique-confidentialite" className="underline hover:text-black transition-colors">
                politique de confidentialité
              </a>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                type="submit"
                disabled={pending}
                className="w-full sm:w-auto bg-black text-white hover:bg-zinc-700 rounded-none px-12 py-3 tracking-widest uppercase text-xs font-(family-name:--font-inter) disabled:opacity-50"
              >
                {pending ? "Envoi…" : "Envoyer"}
              </Button>
              <p className="font-(family-name:--font-inter) text-xs text-zinc-400">
                Pour une réservation rapide, privilégiez Planity —{" "}
                {PLANITY_LOCATIONS.map((loc, i) => (
                  <span key={loc.href}>
                    <a
                      href={loc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-black transition-colors"
                    >
                      {loc.city}
                    </a>
                    {i < PLANITY_LOCATIONS.length - 1 && " · "}
                  </span>
                ))}
              </p>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
