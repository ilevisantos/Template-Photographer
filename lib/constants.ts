// Centraliza dados que se repetem em vários componentes (Navbar, Hero, CTA,
// WhatsAppButton, Footer). Trocar o número de telefone aqui atualiza o site inteiro.

// troque pelo número real, formato internacional sem espaços/símbolos.
export const WHATSAPP_NUMBER = "SEU NÚMERO_AQUI"; // Exemplo: "5511999999999" para Brasil

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vi o site do {Fotógrafo} e gostaria de solicitar um orçamento.";

export function getWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SITE = {
  name: "Fotógrafo",
  owner: "Seu Nome",
  city: "Cidade, Brazil",
  instagram: "https://www.instagram.com",
  banlek: "https://banlek.com",
} as const;
