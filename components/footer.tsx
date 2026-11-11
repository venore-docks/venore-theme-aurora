import Link from "next/link";
import type { ReactNode } from "react";
import { ExternalLink, Lock } from "lucide-react";
import type { FooterRegionProps, RegionOverride, SitemapItem } from "@venore/theme-sdk";
import { t } from "@venore/theme-sdk/kit";
import { NavIcon } from "@venore/theme-sdk/ui";
import { getSitemapMeta } from "../sitemap-meta";

// Rodapé "Mapa do site" (região footer do Aurora). Cada item de 1º nível do menu `sitemap` vira um
// grupo. Grupo cujos filhos têm descrição (sitemap-meta.ts) vira cartão de tarefas: ícone, rótulo,
// descrição de uma linha e selos de "externo" / "requer login". Grupo sem descrições (ex.: Rede
// FEM) vira faixa de chips. Server component puro; ícones via NavIcon (registro do core).
const focusRing = "outline-none focus-visible:ring-2 focus-visible:ring-ring";

type Strings = FooterRegionProps["strings"];

function Anchor({ item, className, children }: { item: SitemapItem; className: string; children: ReactNode }) {
  if (item.href === null) return <span className={className}>{children}</span>;
  if (item.isExternal || item.opensInNewTab) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {children}
    </Link>
  );
}

function Badges({ item, restricted, strings }: { item: SitemapItem; restricted: boolean; strings: Strings }) {
  if (!restricted && !item.isExternal) return null;
  return (
    <span className="ms-auto flex shrink-0 items-center gap-1.5 text-muted-foreground/70">
      {restricted && (
        <>
          <Lock className="size-3.5" aria-hidden="true" />
          <span className="sr-only">{t(strings, "aurora.sitemap.restricted")}</span>
        </>
      )}
      {item.isExternal && (
        <>
          <ExternalLink className="size-3.5" aria-hidden="true" />
          <span className="sr-only">{t(strings, "aurora.sitemap.external")}</span>
        </>
      )}
    </span>
  );
}

function TaskGroup({ group, strings }: { group: SitemapItem; strings: Strings }) {
  const meta = getSitemapMeta(group.label);
  return (
    <section className="min-w-0 rounded-panel border border-border bg-card p-3 sm:p-4">
      <h3 className="flex items-center gap-2 px-2 pb-2 text-[11px] font-semibold uppercase tracking-caps text-muted-foreground">
        <NavIcon iconKey={meta.icon} className="size-4 text-primary" />
        {group.label}
      </h3>
      <ul className="space-y-0.5">
        {group.children.map((child) => {
          const m = getSitemapMeta(child.label);
          return (
            <li key={child.key}>
              <Anchor
                item={child}
                className={`group/link flex min-h-11 items-center gap-3 rounded-xl px-2 py-2 ui-motion-base hover:bg-muted active:bg-muted ${focusRing}`}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground ui-motion-base group-hover/link:bg-primary/12 group-hover/link:text-primary">
                  <NavIcon iconKey={m.icon} className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-foreground">{child.label}</span>
                  {m.description && <span className="block truncate text-xs text-muted-foreground">{m.description}</span>}
                </span>
                <Badges item={child} restricted={m.restricted === true} strings={strings} />
              </Anchor>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ChipGroup({ group, strings }: { group: SitemapItem; strings: Strings }) {
  const meta = getSitemapMeta(group.label);
  return (
    <section className="min-w-0 space-y-3 rounded-panel border border-border bg-accent/14 p-4 sm:p-5">
      <h3 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-caps text-muted-foreground">
        <NavIcon iconKey={meta.icon} className="size-4 text-primary" />
        {group.label}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.children.map((child) => (
          <li key={child.key}>
            <Anchor
              item={child}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground ui-motion-base hover:border-primary/50 hover:text-primary active:text-primary ${focusRing}`}
            >
              {child.label}
              <Badges item={child} restricted={false} strings={strings} />
            </Anchor>
          </li>
        ))}
      </ul>
    </section>
  );
}

const COLS_CLASS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
};

export const AuroraFooter: RegionOverride<FooterRegionProps> = ({ Default, ...props }) => {
  const { brand, sitemapItems, creditsEnabled, loginLinkHref, strings, slots, area } = props;
  const groups = sitemapItems.filter((item) => item.children.length > 0);
  // Sem grupos (menu vazio ou só links soltos) ou na área admin: o rodapé padrão do kit.
  if (area === "admin" || groups.length === 0) return <Default {...props} />;

  const isTaskGroup = (g: SitemapItem) => g.children.some((c) => getSitemapMeta(c.label).description);
  const tasks = groups.filter(isTaskGroup);
  const chips = groups.filter((g) => !isTaskGroup(g));
  const year = new Date().getFullYear();

  return (
    <footer data-region="footer" className="mt-auto border-t border-border text-muted-foreground">
      <nav aria-label={t(strings, "aurora.sitemap.label")} className="mx-auto w-full max-w-7xl space-y-5 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {slots.outletTop}
        <div className="max-w-prose space-y-2">
          <p className="text-base font-semibold text-foreground">{brand.name}</p>
          {brand.description.trim().length > 0 && <p className="text-pretty text-sm leading-6">{brand.description}</p>}
          <span aria-hidden className="block h-0.5 w-10 rounded-full bg-primary/40" />
        </div>
        {tasks.length > 0 && (
          <div className={`grid gap-4 sm:grid-cols-2 ${COLS_CLASS[Math.min(tasks.length, 3)]}`}>
            {tasks.map((group) => (
              <TaskGroup key={group.key} group={group} strings={strings} />
            ))}
          </div>
        )}
        {chips.map((group) => (
          <ChipGroup key={group.key} group={group} strings={strings} />
        ))}
      </nav>
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {year} {brand.name}. {t(strings, "aurora.sitemap.rights")}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {creditsEnabled ? <span data-credits="">{t(strings, "footer.credits")}</span> : null}
            {loginLinkHref && (
              <Link href={loginLinkHref} className={`rounded-sm uppercase tracking-caps hover:text-foreground ${focusRing}`}>
                {t(strings, "footer.signIn")}
              </Link>
            )}
          </div>
        </div>
        {slots.outletBottom}
      </div>
    </footer>
  );
};
