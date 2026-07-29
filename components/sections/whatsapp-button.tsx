"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { getWhatsAppLink } from "@/lib/constants";

/**
 * Botão fixo de WhatsApp. Fica ancorado no canto inferior em desktop e mobile,
 * conforme pedido no briefing ("Botão de WhatsApp fixo na parte inferior" no celular).
 * É 'use client' porque usa Framer Motion para a entrada e o pulso de destaque.
 */
export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift sm:bottom-6 sm:right-6"
    >
      {/* Anel de pulso discreto para chamar atenção sem ser intrusivo */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}
