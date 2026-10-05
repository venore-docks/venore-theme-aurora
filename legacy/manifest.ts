import type { ThemeManifest } from "@venore/theme-sdk";
import { AURORA_MANIFEST_BASE } from "../manifest-base";

// Compatibilidade 7.x (só a 0.2.x; sai na 0.3.0): o export "./manifest" do pacote aponta pra cá.
// Um core 7.x lê o manifesto por esse caminho e exige themeContractVersion ^7 (ativação e o teste
// do registro); um core 8.x lê o manifesto v8 de `./theme` e nunca importa este arquivo.
export const auroraManifest: ThemeManifest = { ...AURORA_MANIFEST_BASE, themeContractVersion: "7.0.0" };
