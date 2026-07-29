"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";

// Variantes compartilhadas: cada filho aparece com um pequeno atraso em cascata
// (staggerChildren), criando a sensação de "fade up" orquestrado pedida no briefing.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo — troque pela foto/vídeo real.
          priority=true porque essa é a maior imagem visível no primeiro load (LCP). */}
      <Image
        src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1920&auto=format&fit=crop"
        alt="Casal de noivos em momento espontâneo durante ensaio fotográfico ao ar livre"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay escuro para garantir contraste do texto branco sobre a foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/35 to-ink/60" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative z-10 flex flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="max-w-3xl text-balance font-display text-4xl font-medium leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Cada momento merece ser lembrado da melhor forma.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance font-body text-base leading-relaxed text-white/90 sm:text-lg"
        >
          Mais do que registrar fotos, é sobre eternizar momentos e 
          transformar sentimentos em lembranças.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="#portfolio">Ver Portfólio</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-white/80 transition-colors hover:text-white sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ChevronDown size={28} />
        </motion.span>
      </motion.a>
    </section>
  );
}
