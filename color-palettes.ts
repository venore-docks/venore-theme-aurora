import type { ColorPalette } from "@venore/theme-sdk";

// Catálogo escrito à mão: cada preset tem personalidade própria — não só o matiz, mas também
// croma (vibração), luminosidade e a relação entre primary e accent (análoga, complementar ou
// monocromática). Antes era generateHueRotationPalettes, que girava só o hue e deixava os presets
// parecidos demais entre si. Ao aplicar, o core usa o primary como semente do resto da paleta e
// mantém os tokens declarados aqui (setPresetColorPalette). O rail tinge pela cor primary
// (theme.css, --aurora-brand). Ids estáveis (`oceano`, `ametista`, `ambar`, `rubro`, `fem`) — podem
// estar salvos como paleta ativa em algum site.
const ESPACO: ColorPalette = {
  // Azul-elétrico profundo com accent ciano gelado — o mais "tech" do catálogo.
  id: "oceano",
  name: "Espaço",
  light: {
    primary: "oklch(0.5 0.22 262)",
    "primary-foreground": "oklch(0.98 0.01 262)",
    accent: "oklch(0.92 0.06 210)",
    "accent-foreground": "oklch(0.3 0.08 220)",
    ring: "oklch(0.55 0.2 262)",
  },
  dark: {
    primary: "oklch(0.7 0.18 255)",
    "primary-foreground": "oklch(0.16 0.03 262)",
    accent: "oklch(0.34 0.08 215)",
    "accent-foreground": "oklch(0.93 0.05 205)",
    ring: "oklch(0.72 0.16 230)",
  },
};

const AMETISTA: ColorPalette = {
  // Magenta-púrpura saturado com accent rosa — mais expressivo e quente que o índigo base.
  id: "ametista",
  name: "Ametista",
  light: {
    primary: "oklch(0.52 0.24 318)",
    "primary-foreground": "oklch(0.98 0.01 318)",
    accent: "oklch(0.92 0.06 350)",
    "accent-foreground": "oklch(0.33 0.12 350)",
    ring: "oklch(0.56 0.22 330)",
  },
  dark: {
    primary: "oklch(0.72 0.2 320)",
    "primary-foreground": "oklch(0.17 0.04 318)",
    accent: "oklch(0.35 0.1 350)",
    "accent-foreground": "oklch(0.94 0.04 350)",
    ring: "oklch(0.74 0.18 340)",
  },
};

const AMBAR: ColorPalette = {
  // Laranja-âmbar quente com accent terracota — terroso, editorial. Primary claro no escuro com
  // texto escuro por cima (como um botão de "warning" bem resolvido).
  id: "ambar",
  name: "Âmbar",
  light: {
    primary: "oklch(0.6 0.17 55)",
    "primary-foreground": "oklch(0.18 0.03 55)",
    accent: "oklch(0.92 0.05 35)",
    "accent-foreground": "oklch(0.36 0.1 35)",
    ring: "oklch(0.62 0.16 55)",
  },
  dark: {
    primary: "oklch(0.78 0.16 70)",
    "primary-foreground": "oklch(0.2 0.04 60)",
    accent: "oklch(0.36 0.08 40)",
    "accent-foreground": "oklch(0.94 0.04 50)",
    ring: "oklch(0.78 0.15 65)",
  },
};

const RUBRO: ColorPalette = {
  // Carmim intenso com accent no complementar (verde-azulado) — o mais contrastante.
  id: "rubro",
  name: "Rubro",
  light: {
    primary: "oklch(0.52 0.21 22)",
    "primary-foreground": "oklch(0.98 0.01 22)",
    accent: "oklch(0.92 0.05 185)",
    "accent-foreground": "oklch(0.32 0.07 190)",
    ring: "oklch(0.55 0.2 22)",
  },
  dark: {
    primary: "oklch(0.7 0.19 22)",
    "primary-foreground": "oklch(0.17 0.03 22)",
    accent: "oklch(0.34 0.06 190)",
    "accent-foreground": "oklch(0.93 0.04 185)",
    ring: "oklch(0.7 0.18 22)",
  },
};

const FLORESTA: ColorPalette = {
  // Verde-esmeralda com accent lima — orgânico, calmo.
  id: "floresta",
  name: "Floresta",
  light: {
    primary: "oklch(0.5 0.13 158)",
    "primary-foreground": "oklch(0.98 0.01 158)",
    accent: "oklch(0.93 0.07 125)",
    "accent-foreground": "oklch(0.34 0.08 130)",
    ring: "oklch(0.54 0.13 158)",
  },
  dark: {
    primary: "oklch(0.74 0.15 158)",
    "primary-foreground": "oklch(0.18 0.03 158)",
    accent: "oklch(0.35 0.07 130)",
    "accent-foreground": "oklch(0.94 0.06 125)",
    ring: "oklch(0.75 0.14 150)",
  },
};

const GRAFITE: ColorPalette = {
  // Quase monocromático: cinza-aço de croma baixíssimo, primary e accent no mesmo matiz — sóbrio,
  // corporativo.
  id: "grafite",
  name: "Grafite",
  light: {
    primary: "oklch(0.32 0.02 250)",
    "primary-foreground": "oklch(0.98 0.005 250)",
    accent: "oklch(0.93 0.01 250)",
    "accent-foreground": "oklch(0.3 0.02 250)",
    ring: "oklch(0.45 0.03 250)",
  },
  dark: {
    primary: "oklch(0.88 0.015 250)",
    "primary-foreground": "oklch(0.18 0.01 250)",
    accent: "oklch(0.32 0.015 250)",
    "accent-foreground": "oklch(0.94 0.01 250)",
    ring: "oklch(0.75 0.02 250)",
  },
};

// Paleta escrita à mão (não gerada por generateHueRotationPalettes) — os tons exatos de
// primary/accent/ring do Portal do Colaborador (FEM) no tema legado "Carlin Harbour"
// (fem-colaborador/src/modules/carlin-harbour-theme/preset.ts), pedido do cliente em
// PORTAL-COLABORADOR-FEM.md §9: "aplicar o aurora com as cores da FEM". Uma rotação de hue não
// bastaria aqui porque o preset original tem primary e accent no MESMO matiz (~205–210°, só
// luminosidade diferente) — generateHueRotationPalettes rotacionaria os dois hues igualmente e
// perderia essa relação. Estrutura (background/radius/fonte) continua sendo a da Aurora — só a
// cor de marca muda. Id continua "fem" (estável, já pode estar salvo como paletteId ativo em
// algum site) — só o nome exibido virou "Oceano" (pedido de sessão: o teal/petróleo deste preset
// lê mais como "oceano" do que o antigo preset azul, que virou "Espaço" acima).
const FEM_PALETTE: ColorPalette = {
  id: "fem",
  name: "Oceano",
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

export const AURORA_COLOR_PALETTES: ColorPalette[] = [ESPACO, AMETISTA, AMBAR, RUBRO, FLORESTA, GRAFITE, FEM_PALETTE];
