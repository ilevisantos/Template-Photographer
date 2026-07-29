"use client";

import { motion } from "framer-motion";
import { Heart, Camera, CalendarDays, Zap, Film, Users } from "lucide-react";

const SERVICES = [
  {
    icon: Heart,
    title: "Casamentos",
    description:
      "Cobertura completa do seu grande dia, do making of à festa, com sensibilidade e atenção a cada detalhe.",
  },
  {
    icon: Camera,
    title: "Ensaios",
    description:
      "Gestantes, casais, famílias e individuais. Cada ensaio planejado para refletir sua essência.",
  },
  {
    icon: CalendarDays,
    title: "Eventos",
    description:
      "Aniversários, formaturas e celebrações em geral registrados com energia e naturalidade.",
  },
  {
    icon: Zap,
    title: "Esportes",
    description:
      "Cobertura esportiva com foco na emoção do movimento, do esforço e da conquista.",
  },
  {
    icon: Film,
    title: "Filmagem",
    description:
      "Filmes e clipes que capturam a atmosfera do momento com qualidade cinematográfica.",
  },
  {
    icon: Users,
    title: "Corporativo",
    description:
      "Eventos e retratos corporativos com postura profissional e entrega ágil.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-28 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-coral">
            Serviços
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            O que fazemos por você
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="group rounded-brand border border-mist bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:shadow-lift"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-coral transition-colors group-hover:bg-coral/10">
                <Icon size={24} strokeWidth={1.5} />
              </span>
              <h3 className="mt-5 font-display text-xl font-medium text-ink">
                {title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
