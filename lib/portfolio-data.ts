// Dados do portfólio isolados dos componentes: assim, quando tiver
// as fotos reais, basta editar este array — nenhum componente precisa mudar.

export type PortfolioCategory =
  | "Casamentos"
  | "Ensaios"
  | "Eventos"
  | "Esportes"
  | "Vídeos";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Casamentos",
  "Ensaios",
  "Eventos",
  "Esportes",
  "Vídeos",
];

export interface PortfolioItem {
  id: string;
  category: PortfolioCategory;
  title: string;
  image: string;
  // Controla o tamanho no grid editorial: "lg" ocupa 2 linhas, "sm" ocupa 1.
  size: "lg" | "sm";
}

// substituir as URLs do Unsplash pelas fotos reais (em /public/images).
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "casamento-01",
    category: "Casamentos",
    title: "Cerimônia ao entardecer",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: "ensaio-01",
    category: "Ensaios",
    title: "Ensaio de casal",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=900&auto=format&fit=crop",
    size: "sm",
  },
  {
    id: "gestante-01",
    category: "Ensaios",
    title: "Ensaio gestante",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=900&auto=format&fit=crop",
    size: "sm",
  },
  {
    id: "evento-01",
    category: "Eventos",
    title: "Festa de aniversário",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: "esporte-01",
    category: "Esportes",
    title: "Cobertura esportiva",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=900&auto=format&fit=crop",
    size: "sm",
  },
  {
    id: "casamento-02",
    category: "Casamentos",
    title: "Detalhes da cerimônia",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop",
    size: "sm",
  },
  {
    id: "video-01",
    category: "Vídeos",
    title: "Filme do casamento",
    image:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop",
    size: "lg",
  },
  {
    id: "familia-01",
    category: "Ensaios",
    title: "Ensaio em família",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=900&auto=format&fit=crop",
    size: "sm",
  },
];
