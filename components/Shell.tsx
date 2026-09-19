import type { ThemeShellProps } from "@venore/theme-sdk";
import { HeaderSlot } from "./HeaderSlot";
import { FooterSlot } from "./FooterSlot";
import { ContentSlot } from "./ContentSlot";
import { SidebarLeftSlot } from "./SidebarLeftSlot";

// Arranjo "rail" de developer tool (Linear/Vercel/Supabase): a SidebarLeft ocupa a altura
// INTEIRA da viewport, de ponta a ponta — o Header não corre por cima dela, só sobre a coluna de
// conteúdo à direita (diferente do Venore Slime, onde o Header é full-width e a sidebar começa
// abaixo dele). SidebarLeftSlot/HeaderSlot/ContentSlot/FooterSlot são os mesmos componentes do
// Venore Slime (só consomem tokens, docs/venore-docks.md regra 4) — a identidade "rail" vem
// inteira desta árvore, não de código deles.
//
// Footer mora DENTRO da coluna de conteúdo (abaixo de ContentSlot) — o `flex` externo
// (align-items: stretch, default) estica a SidebarLeftSlot pra acompanhar a altura de
// Header+Content+Footer somados, então a sidebar sempre cobre a coluna inteira à direita, nunca
// fica mais curta que ela.
export function Shell({
  header,
  footer,
  sidebarLeft,
  children,
  sidebarContextualEnabled,
  sidebarContextual,
  breadcrumbs,
  breadcrumbsJsonLd,
}: ThemeShellProps) {
  return (
    <div className="flex min-h-dvh flex-1">
      <SidebarLeftSlot {...sidebarLeft} />
      <div className="flex min-w-0 flex-1 flex-col">
        <HeaderSlot {...header} />
        <ContentSlot
          sidebarContextualEnabled={sidebarContextualEnabled}
          sidebarContextual={sidebarContextual}
          breadcrumbs={breadcrumbs}
          breadcrumbsJsonLd={breadcrumbsJsonLd}
        >
          {children}
        </ContentSlot>
        <FooterSlot {...footer} />
      </div>
    </div>
  );
}
