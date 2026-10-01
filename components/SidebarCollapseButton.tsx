"use client";

import { useTransition } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { setSidebarCollapsed, useSidebarCollapsed } from "./sidebar-collapse-store";

// Mora DENTRO do <header> (não da sidebar): o header é sticky com z-40 e precisa ficar sempre por
// cima do resto, então um botão filho da sidebar nunca conseguia aparecer sobre ele. Como filho do
// header, herda o stacking do header e fica por cima sem disputar z-index. `left-0` +
// `-translate-x-1/2` o puxa metade pra fora do header, sobre a borda do rail — mesma posição
// visual de antes. Também acompanha o header sticky ao rolar. Só desktop (colapso é conceito de lg+).
// Estado otimista no store (a largura muda no clique); a Server Action só persiste o cookie.
export function SidebarCollapseButton({
  collapsed: collapsedFromServer,
  onToggleCollapsed,
}: {
  collapsed: boolean;
  onToggleCollapsed: () => Promise<void>;
}) {
  const collapsed = useSidebarCollapsed(collapsedFromServer);
  const [, startTransition] = useTransition();

  function handleClick() {
    setSidebarCollapsed(!collapsed);
    startTransition(() => {
      onToggleCollapsed();
    });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-expanded={!collapsed}
      aria-label={collapsed ? "Expandir barra lateral" : "Colapsar barra lateral"}
      className="absolute top-4 left-0 z-10 hidden size-11 -translate-x-1/2 items-center justify-center rounded-full border border-ring bg-card text-foreground shadow-panel ui-motion-base outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring lg:flex"
    >
      {collapsed ? <ChevronRight className="size-4" aria-hidden="true" /> : <ChevronLeft className="size-4" aria-hidden="true" />}
    </button>
  );
}
