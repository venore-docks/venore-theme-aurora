import { defineTheme } from "@venore/theme-sdk";
import { auroraManifest } from "./manifest";
import { AURORA_COLOR_PALETTES } from "./color-palettes";

// Aurora no contrato 8.0.0: nenhuma região, template ou estado próprio — o kit do core cobre tudo.
// A identidade inteira é o arranjo "rail" (manifest.ts) + tokens (theme.css): rail escura tingida
// pela paleta via tokens de região (--region-rail-*), larguras compactas, scrim escuro, tipografia
// tight. O core lê este módulo pelo export "./theme" (default).
export const auroraTheme = defineTheme({
  manifest: auroraManifest,
  layout: "rail",
  colorPalettes: AURORA_COLOR_PALETTES,
});

export default auroraTheme;
