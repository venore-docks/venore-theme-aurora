import type { ThemeManifest } from "@venore/theme-sdk";

export const auroraManifest: ThemeManifest = {
  key: "aurora",
  name: "Aurora",
  version: "0.1.8",
  themeContractVersion: "7.0.0",
  // logoUrl real vem de contexts/settings (upload em /admin/settings/brand) — isto só declara os
  // valores padrão de exibição. Cor aproxima o índigo-violeta de --primary no modo escuro
  // (referência visual do tema).
  brandAesthetics: { mode: "svg", size: 96, scrolledSize: 84, position: "left", color: "oklch(0.72 0.19 275)" },
  colorModes: ["light", "dark"],
};
