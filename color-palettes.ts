import type { ColorPalette } from "@venore/theme-sdk";
import { generateHueRotationPalettes, THEME_HUE_PRESETS } from "@venore/theme-sdk/palettes";

// Ponto de partida aproxima o índigo-violeta do bloco .dark de theme.css — presets alternativos
// que o admin pode escolher em /admin/settings/brand, girando o matiz a partir daqui.
const GENERATED_PALETTES = generateHueRotationPalettes(
  {
    light: {
      primary: "oklch(0.53 0.21 275)",
      primaryForeground: "oklch(0.98 0.01 275)",
      accent: "oklch(0.93 0.035 275)",
      accentForeground: "oklch(0.28 0.03 275)",
      ring: "oklch(0.53 0.18 275)",
    },
    dark: {
      primary: "oklch(0.72 0.19 275)",
      primaryForeground: "oklch(0.16 0.02 275)",
      accent: "oklch(0.32 0.05 275)",
      accentForeground: "oklch(0.94 0.02 275)",
      ring: "oklch(0.68 0.18 275)",
    },
  },
  THEME_HUE_PRESETS,
);

// Paleta escrita à mão (não gerada por generateHueRotationPalettes) — os tons exatos de
// primary/accent/ring do Portal do Colaborador (FEM) no tema legado "Carlin Harbour"
// (fem-colaborador/src/modules/carlin-harbour-theme/preset.ts), pedido do cliente em
// PORTAL-COLABORADOR-FEM.md §9: "aplicar o aurora com as cores da FEM". Uma rotação de hue não
// bastaria aqui porque o preset original tem primary e accent no MESMO matiz (~205–210°, só
// luminosidade diferente) — generateHueRotationPalettes rotacionaria os dois hues igualmente e
// perderia essa relação. Estrutura (background/radius/fonte) continua sendo a da Aurora — só a
// cor de marca muda.
const FEM_PALETTE: ColorPalette = {
  id: "fem",
  name: "FEM",
  light: {
    primary: "oklch(0.52 0.099 210.2)",
    "primary-foreground": "oklch(0.973 0.01 219.6)",
    accent: "oklch(0.752 0.096 205.7)",
    "accent-foreground": "oklch(0.215 0.027 225.7)",
    ring: "oklch(0.52 0.099 210.2)",
  },
  dark: {
    primary: "oklch(0.752 0.096 205.7)",
    "primary-foreground": "oklch(0.215 0.027 225.7)",
    accent: "oklch(0.52 0.099 210.2)",
    "accent-foreground": "oklch(0.973 0.01 219.6)",
    ring: "oklch(0.752 0.096 205.7)",
  },
};

export const AURORA_COLOR_PALETTES: ColorPalette[] = [...GENERATED_PALETTES, FEM_PALETTE];
