"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
} from "@/lib/portfolio-data";

type Filter = PortfolioCategory | "Todos";

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Todos");

  const items =
    filter === "Todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="bg-cream-light py-24 sm:py-28 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Portfólio
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Histórias que já registramos
          </h2>
        </div>

        {/* Filtro por categoria — rolável horizontalmente no mobile */}
        <div className="no-scrollbar mt-10 flex justify-start gap-2 overflow-x-auto sm:mt-12 sm:justify-center sm:overflow-visible">
          {(["Todos", ...PORTFOLIO_CATEGORIES] as Filter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "shrink-0 rounded-brand px-5 py-2.5 font-body text-sm font-medium transition-colors",
                filter === cat
                  ? "bg-coral text-white"
                  : "bg-transparent text-ink/70 hover:text-coral"
              )}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid editorial: itens "lg" ocupam 2 linhas, criando a mistura de
            tamanhos grandes/pequenos pedida no briefing. */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:auto-rows-[220px] sm:gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.figure
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={cn(
                  "group relative aspect-[4/3] overflow-hidden rounded-brand shadow-soft sm:aspect-auto",
                  item.size === "lg" && "sm:row-span-2"
                )}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.category}, Usuário Fotografias`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay: nome da categoria + botão, aparece no hover (desktop)
                    e some sozinho no mobile onde não existe hover real. */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0">
                  <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-coral-soft">
                    {item.category}
                  </span>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="font-display text-lg text-white">
                      {item.title}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      {item.category === "Vídeos" ? (
                        <PlayCircle size={20} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </span>
                  </div>
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
