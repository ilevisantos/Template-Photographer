"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Quais eventos vocês atendem?",
    a: "Atendemos casamentos, aniversários, formaturas, eventos corporativos, ensaios fotográficos (gestantes, casais, famílias, individuais) e cobertura esportiva. Se tiver algum evento diferente em mente, entre em contato — adoramos novos desafios.",
  },
  {
    q: "Vocês fazem vídeos também?",
    a: "Sim! Além da fotografia, produzimos filmes de casamento, clipes de eventos e coberturas completas em vídeo. O trabalho audiovisual é tão cuidadoso quanto o fotográfico.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "É simples: entre em contato pelo WhatsApp, conte um pouco sobre o seu evento (data, tipo, local) e enviamos uma proposta personalizada sem compromisso. Cada orçamento é feito sob medida.",
  },
  {
    q: "Atendem outras cidades?",
    a: "Sim, atendemos em diversas cidades da região e também viajamos para outros estados mediante combinação de logística e deslocamento. Consulte disponibilidade pelo WhatsApp.",
  },
  {
    q: "Qual o prazo de entrega?",
    a: "O prazo varia conforme o tipo de trabalho. Ensaios costumam ser entregues em até 15 dias úteis; eventos maiores, como casamentos, em até 40 dias. Tudo isso é alinhado no momento da contratação.",
  },
  {
    q: "Como faço o agendamento?",
    a: "Pelo WhatsApp! Após o orçamento aprovado, definimos a data, assinamos o contrato e garantimos a sua reserva na agenda. É rápido e sem burocracia.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-mist last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
      >
        <span className="font-body text-base font-medium text-ink sm:text-lg">
          {q}
        </span>
        <span
          className={cn(
            "mt-1 shrink-0 text-coral transition-transform duration-300",
            open && "rotate-45"
          )}
        >
          <Plus size={20} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 font-body text-sm leading-relaxed text-ink/70 sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream-light py-24 sm:py-28 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            FAQ
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Perguntas frequentes
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-14 max-w-2xl rounded-brand bg-white px-6 shadow-soft sm:px-10"
        >
          {FAQS.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
