// Metadados de apresentação do "Mapa do site" (ícone, descrição de uma linha e se a página exige
// login). O contrato SitemapItem do core só carrega rótulo/href, então o tema complementa por
// rótulo normalizado (minúsculas, sem acento/pontuação). Item sem entrada aqui renderiza só com
// o rótulo — nada quebra. Textos em pt-BR (instância Portal do Colaborador).
export type SitemapMeta = { icon?: string; description?: string; restricted?: boolean };

export function metaKey(label: string): string {
  return label
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const META: Record<string, SitemapMeta> = {
  // Grupos
  "meu-dia-a-dia": { icon: "sunrise" },
  "minha-carreira": { icon: "rocket" },
  "cultura-e-comunidade": { icon: "heart-handshake" },
  "rede-fem": { icon: "network" },
  // Meu dia a dia
  "ponto-eletronico": { icon: "timer", description: "Registre e consulte suas marcações" },
  holerite: { icon: "receipt", description: "Consulte seu contracheque" },
  colabora: { icon: "life-buoy", description: "Abra uma requisição ou chamado", restricted: true },
  calendario: { icon: "calendar-days", description: "Datas e eventos da FEM", restricted: true },
  // Minha carreira
  pcs: { icon: "award", description: "Plano de cargos e salários", restricted: true },
  gratificacoes: { icon: "gift", description: "Regras e critérios de gratificação", restricted: true },
  manuais: { icon: "book-open", description: "Guias e procedimentos internos", restricted: true },
  "novos-colaboradores": { icon: "user-plus", description: "Tudo para começar bem na FEM", restricted: true },
  "trabalhe-conosco": { icon: "briefcase", description: "Vagas abertas e como se candidatar" },
  // Cultura e comunidade
  noticias: { icon: "newspaper", description: "Novidades e comunicados" },
  aniversariantes: { icon: "cake", description: "Quem faz aniversário no mês", restricted: true },
  capelania: { icon: "heart-handshake", description: "Apoio espiritual e acolhimento", restricted: true },
  "heranca-presenca": { icon: "church", description: "Projeto da Capelania" },
  "sobre-a-fem": { icon: "building-2", description: "Conheça a nossa história" },
  ouvidoria: { icon: "message-square", description: "Seu canal de escuta", restricted: true },
};

export function getSitemapMeta(label: string): SitemapMeta {
  return META[metaKey(label)] ?? {};
}
