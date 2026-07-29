"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Cliente A",
    role: "Casamento",
    text: "O Fotógrafo capturou cada momento do nosso casamento com uma sensibilidade incrível. Quando vimos as fotos, choramos de emoção. Cada detalhe estava lá, exatamente como vivemos.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cliente B",
    role: "Ensaio Gestante",
    text: "Estava nervosa por nunca ter feito um ensaio, mas o Fotógrafo me deixou completamente à vontade. As fotos ficaram lindas e agora são o meu maior tesouro.",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Cliente C",
    role: "Evento Corporativo",
    text: "Profissionalismo do início ao fim. Entrega rápida, material de altíssima qualidade e um trabalho que elevou a imagem da nossa empresa. Recomendo sem hesitar.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Cliente D",
    role: "Ensaio de Casal",
    text: "Nunca me senti tão natural na frente de uma câmera. O Fotógrafo tem um jeito especial de criar o ambiente certo para os momentos mais genuínos aparecerem.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

const INTERVAL = 4500;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % TESTIMONIALS.length),
    []
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Avança automaticamente, mas pausa quando o usuário interage (hover).
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = TESTIMONIALS[current];

  return (
    <section
      id="depoimentos"
      className="py-24 sm:py-28 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Depoimentos
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="relative mx-auto mt-14 max-w-2xl">
          {/* Aspas decorativas grandes */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-0 select-none font-display text-[8rem] leading-none text-coral/15"
          >
            "
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="rounded-brand bg-white px-8 py-10 shadow-soft sm:px-12 sm:py-14"
            >
              <p className="font-body text-base leading-relaxed text-ink/80 sm:text-lg">
                {t.text}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-coral/20">
                  <Image
                    src={t.avatar}
                    alt={`Foto de ${t.name}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-coral">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles de navegação */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots indicadores */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-coral" : "w-2 bg-mist"
                  }`}
                />
              ))}
            </div>

            {/* Setas */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Depoimento anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist text-ink/50 transition-colors hover:border-coral hover:text-coral"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Próximo depoimento"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist text-ink/50 transition-colors hover:border-coral hover:text-coral"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
