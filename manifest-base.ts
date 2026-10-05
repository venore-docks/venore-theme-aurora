import type { ThemeManifest } from "@venore/theme-sdk";

// Campos do manifesto que valem para os dois contratos: o v8 (manifest.ts, lido pelo core 8.x via
// `./theme`) e o 7.x de compatibilidade (legacy/manifest.ts, lido por cores 7.x via `./manifest`).
// Fica num arquivo só com campos 7.x para os dois manifestos não divergirem de versão — e para o
// typecheck de um core 7.x (que não conhece os campos v8) nunca precisar abrir manifest.ts.
export const AURORA_MANIFEST_BASE: Omit<ThemeManifest, "themeContractVersion"> = {
  key: "aurora",
  name: "Aurora",
  // Mesmo número de package.json#version (o /admin/themes compara com as tags do repositório).
  version: "0.2.0",
  // logoUrl real vem de contexts/settings (upload em /admin/settings/brand) — isto só declara os
  // valores padrão de exibição. Cor aproxima o índigo-violeta de --primary no modo escuro
  // (referência visual do tema).
  brandAesthetics: { mode: "svg", size: 96, scrolledSize: 84, position: "left", color: "oklch(0.72 0.19 275)" },
  colorModes: ["light", "dark"],
  // O header do kit respeita stickyEnabled/scrollShrinkEnabled — libera o formulário em /admin/themes.
  capabilities: { headerBehavior: true },
};
