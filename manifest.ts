import type { ThemeManifest } from "@venore/theme-sdk";
import { AURORA_MANIFEST_BASE } from "./manifest-base";

// Manifesto do contrato 8.0.0 (docs/themes/theme-system-v8.md no core). Só declara o que difere do
// kit; o resto (regiões, templates, estados) é o kit do core.
export const auroraManifest: ThemeManifest = {
  ...AURORA_MANIFEST_BASE,
  themeContractVersion: "8.0.0",

  // Arranjo "rail" (developer tool: Linear/Vercel/Supabase): rail de altura inteira à esquerda,
  // header só sobre a coluna de conteúdo, botão de recolher a rail dentro do header, menu do
  // header só a partir de lg (abaixo disso vai pro fim do drawer).
  layout: { preset: "rail", collapseControl: "header", headerNavVisibleFrom: "lg" },
  responsive: { mobileNav: "drawer", contextualBarMobile: "bottom" },

  // Rail sempre escura nos dois modos: o gerador de paleta (cor de marca/semente) mantém os tokens
  // da região escuros; as paletas escritas à mão tingem a rail pelo --primary (theme.css).
  palette: { regions: { rail: { tone: "dark" } } },

  options: [
    {
      key: "rail-tone",
      type: "select",
      label: "Tom da barra lateral",
      description: "A barra lateral escura é a identidade da Aurora; “Segue o modo” a deixa clara no modo claro.",
      group: "Layout",
      default: "dark",
      choices: [
        { value: "dark", label: "Sempre escura (tingida pela paleta)" },
        { value: "follow", label: "Segue o modo de cor" },
      ],
    },
    {
      key: "density",
      type: "select",
      label: "Densidade",
      description: "Altura de botões e campos e o respiro interno dos painéis.",
      group: "Layout",
      default: "comfortable",
      choices: [
        { value: "comfortable", label: "Confortável" },
        { value: "compact", label: "Compacta" },
      ],
    },
  ],

  fonts: { sans: "geist", mono: "geist-mono", choices: { sans: ["geist", "inter", "space-grotesk"], mono: ["geist-mono", "jetbrains-mono"] } },

  pageBuilder: {
    // Seção escura tingida pela marca, a mesma superfície da rail (nos dois modos).
    sectionStyles: [{ value: "midnight", label: "Meia-noite" }],
    // Variante só de CSS (theme.css, [data-block-variant="glow"]): o core renderiza o card de
    // sempre e a Aurora acrescenta borda e brilho na cor da marca.
    blockVariants: { "core.content.card": [{ value: "glow", label: "Brilho" }] },
  },
};
