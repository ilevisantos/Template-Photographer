"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// fadeUp usa whileInView (dispara quando o elemento entra na viewport ao rolar),
// diferente do Hero que usa animate (dispara assim que a página carrega).
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="sobre" className="py-24 sm:py-28 md:py-32">
      <div className="container grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative order-2 aspect-[4/5] w-full overflow-hidden rounded-brand shadow-soft md:order-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1200&auto=format&fit=crop"
            alt="{Fotógrafo} fotografando durante um ensaio ao ar livre"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            loading="lazy"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="order-1 flex flex-col items-start text-left md:order-2"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Sobre
          </span>

          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Mais do que imagens, registramos histórias.
          </h2>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ink/80">
            Sou um fotógrafo e filmmaker apaixonado por
            transformar momentos únicos em memórias eternas. Cada clique é
            pensado para capturar não só o que se vê, mas o que se sente —
            com sensibilidade, técnica e um olhar atento aos detalhes que
            fazem toda a diferença.
          </p>

          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink/80">
            Trabalho com casamentos, ensaios, famílias e eventos, sempre
            buscando entregar um material autêntico, elegante e que
            realmente represente cada história.
          </p>

          {/* Pequena assinatura, conforme pedido no briefing */}
          <p className="mt-8 font-display text-2xl italic text-ink/70">
            Fotógrafo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
