import Link from "next/link";
import { CameraIcon, Instagram } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { NAV_LINKS, SITE, getWhatsAppLink } from "@/lib/constants";

// Footer é um Server Component puro — sem animações ou estado,
// então não precisa de 'use client'. Renderiza no servidor, chega
// como HTML estático para o browser: mais rápido, melhor pro SEO.

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mist bg-cream py-14 sm:py-16">
      <div className="container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Coluna 1 — marca + cidade */}
          <div>
            <p className="font-display text-2xl font-semibold text-ink">
              {SITE.name}
            </p>
            <p className="mt-2 font-body text-sm text-ink/60">{SITE.owner}</p>
            <p className="mt-1 font-body text-sm text-ink/50">{SITE.city}</p>

            {/* Redes sociais */}
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Usuário Fotografias"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist text-ink/50 transition-colors hover:border-coral hover:text-coral"
              >
                <Instagram size={18} />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Usuário Fotografias"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist text-ink/50 transition-colors hover:border-coral hover:text-coral"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2 — links rápidos */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              Links rápidos
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-ink/60 transition-colors hover:text-coral"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — CTA contato */}
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-ink/40">
              Contato
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink/60">
              Quer registrar um momento especial? Fale diretamente pelo
              WhatsApp — respondemos rápido.
            </p>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-coral transition-opacity hover:opacity-75"
            >
              <WhatsAppIcon size={16} />
              Enviar mensagem
            </a>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-mist pt-8 sm:flex-row">
          <p className="font-body text-xs text-ink/40">
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-ink/30">
            Desenvolvido com cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
}
