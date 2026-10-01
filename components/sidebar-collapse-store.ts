"use client";

// Estado de colapso da sidebar compartilhado entre SidebarLeftSlot (aplica a largura) e
// SidebarCollapseButton (mora no HeaderSlot) — slots irmãos sem ancestral client comum, mesmo
// motivo de mobile-nav-store.ts. `null` = ainda não alternado nesta sessão do navegador: vale o
// valor que o servidor resolveu do cookie (`collapsed` de SidebarLeftSlotProps), inclusive no SSR.
import { useSyncExternalStore } from "react";

let collapsedOverride: boolean | null = null;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useSidebarCollapsed(fromServer: boolean): boolean {
  return useSyncExternalStore(
    subscribe,
    () => collapsedOverride ?? fromServer,
    () => fromServer,
  );
}

export function setSidebarCollapsed(value: boolean) {
  collapsedOverride = value;
  for (const listener of listeners) listener();
}
