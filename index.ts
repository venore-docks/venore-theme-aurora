// Entrada 7.x (compatibilidade, só a 0.2.x — sai na 0.3.0). Um core 8.x lê `./theme` (theme.ts) e
// nunca importa este arquivo; um core 7.x importa daqui o `Shell` (o da 0.1.13, congelado em
// legacy/) e de "./manifest" o manifesto com contrato 7.0.0. Nada aqui pode depender do SDK v8
// (@venore/theme-sdk/kit, defineTheme): um core 7.x não tem esses módulos.
export { auroraManifest } from "./legacy/manifest";
export { Shell } from "./legacy/Shell";
export { AURORA_COLOR_PALETTES } from "./color-palettes";
