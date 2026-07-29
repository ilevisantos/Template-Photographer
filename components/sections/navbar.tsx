"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE, getWhatsAppLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Precisa ser Client Component porque:
 * 1. Lê a posição do scroll (window) para trocar de estilo — isso só existe no browser.
 * 2. Guarda estado (useState) do menu mobile aberto/fechado.
 * Componentes Server não têm acesso a `window` nem a hooks de estado/efeito.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto (evita "double scroll")
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isSolid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isSolid ? "bg-cream-light/95 shadow-soft backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <nav
        className="container flex h-20 items-center justify-between"
        aria-label="Navegação principal"
      >
        <Link
          href="#top"
          className={cn(
            "font-display text-xl font-semibold tracking-wide transition-colors",
            isSolid ? "text-ink" : "text-white"
          )}
        >
          {SITE.name}
        </Link>

        {/* Links de navegação — visíveis apenas a partir de md (mobile first) */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium transition-colors hover:text-coral",
                  isSolid ? "text-ink" : "text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="default">
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
        </div>

        {/* Botão hambúrguer — visível só no mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          className={cn(
            "-mr-2 flex h-11 w-11 items-center justify-center rounded-brand transition-colors md:hidden",
            isSolid ? "text-ink" : "text-white"
          )}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Painel do menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-cream-light md:hidden"
          >
            <ul className="container flex flex-col gap-1 pb-8 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-center font-body text-base font-medium text-ink transition-colors hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-3">
                <Button asChild size="lg" className="w-full">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    Solicitar orçamento
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
