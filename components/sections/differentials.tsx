"use client";

import { motion } from "framer-motion";
import {
  MessageCircleHeart,
  ScanSearch,
  Aperture,
  Sparkles,
  PackageCheck,
  Star,
} from "lucide-react";

const DIFFERENTIALS = [
  { icon: MessageCircleHeart, label: "Atendimento personalizado" },
  { icon: ScanSearch,         label: "Planejamento de cada ensaio" },
  { icon: Aperture,           label: "Equipamentos profissionais" },
  { icon: Sparkles,           label: "Edição cuidadosa" },
  { icon: PackageCheck,       label: "Entrega organizada" },
  { icon: Star,               label: "Experiência variada" },
];

export default function Differentials() {
  return (
    <section className="bg-cream-light py-20 sm:py-24">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {DIFFERENTIALS.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-coral shadow-soft">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <p className="font-body text-sm font-medium leading-snug text-ink/80">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
