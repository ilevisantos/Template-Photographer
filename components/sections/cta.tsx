"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { getWhatsAppLink } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="bg-coral py-24 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            Vamos registrar seu próximo momento?
          </h2>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-white/85">
            Entre em contato pelo WhatsApp e solicite um orçamento sem
            compromisso. Respondemos rapidinho!
          </p>

          <motion.a
            href={getWhatsAppLink(
              "Olá! Vi o site e gostaria de solicitar um orçamento para um ensaio/evento."
            )}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 inline-flex items-center gap-3 rounded-brand bg-whatsapp px-8 py-4 font-body text-base font-semibold text-white shadow-lift transition-all"
          >
            <WhatsAppIcon size={22} />
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
