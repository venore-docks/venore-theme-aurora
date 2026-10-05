# @venore/theme-aurora

Tema do [Venore Docks](https://github.com/venore-docks/venore-docks) inspirado em ferramentas de
desenvolvedor (Linear/Vercel/Supabase): cinza quase preto com leve viés violeta, um único acento
índigo-violeta, cantos contidos, animações curtas e um **rail** de navegação sempre escuro, tingido
pela cor da paleta ativa. O modo escuro é a referência; o claro existe porque o contrato exige os
dois.

## Estrutura (contrato 8.0.0)

| Arquivo | Papel |
|---|---|
| `theme.ts` | `export default defineTheme({ manifest, layout: "rail", colorPalettes })` — entrada `./theme` lida pelo core 8.x |
| `manifest.ts` | manifesto v8: layout (`rail`, colapso no header, menu do header a partir de `lg`), regra de paleta (rail escura), opções, fontes, estilos de seção e variantes de bloco |
| `manifest-base.ts` | campos comuns aos dois manifestos (chave, **versão**, marca, modos) |
| `theme.css` | todos os tokens: bloco `[data-theme="aurora"]`, bloco `.dark`, tokens da rail (`--region-rail-*`), opções e estilos |
| `color-palettes.ts` | catálogo de paletas escrito à mão (ids estáveis: `oceano`, `ametista`, `ambar`, `rubro`, `floresta`, `grafite`, `fem`) |
| `index.ts` + `legacy/` | **só compatibilidade 7.x** (sai na 0.3.0): `Shell` da 0.1.13 congelado e manifesto com contrato 7.0.0 (export `./manifest`) |

O pacote é TypeScript cru e só compila dentro do core (`@venore/theme-sdk` é alias do core).

## Como funciona no v8

- Não há componente próprio: header, rail, drawer, footer, trilha, menu do usuário, templates e
  estados são do kit do core. A Aurora escolhe o arranjo (`layout: "rail"`) e fornece tokens.
- Rail: o kit marca `<aside data-region="rail">` e remapeia o vocabulário shadcn para
  `--region-rail-*`. A Aurora declara esses tokens no `<html>` misturando `var(--primary)` (já com a
  paleta ativa) a um quase-preto de matiz `none` — a rail muda de cor com a paleta e nunca clareia.
  No escuro, só fundo e texto secundário diferem da página.
- Forma: `padding-inline: 0.75rem` na rail (ícones centrados nos 4.25rem recolhidos), borda de 2px
  no admin-nav a partir de `lg`, scrim escuro via gancho `[data-scrim]` do kit.
- Opções (`/admin/themes/customize`): `data-opt-rail-tone="follow"` deixa a rail clara no modo
  claro; `data-opt-density="compact"` aperta controles e painéis.
- Page builder: estilo de seção `midnight` e card `glow` (`[data-block-variant="glow"]`), só CSS.

## Testar antes de publicar

No checkout do core (com dependências instaladas):

```sh
rm -rf node_modules/@venore/theme-aurora
cp -r ../venore-theme-aurora node_modules/@venore/theme-aurora && rm -rf node_modules/@venore/theme-aurora/.git
npm run -s gen:registries
npx tsx scripts/theme-check.ts --theme aurora
```

## Publicar uma versão

1. Suba `version` no `package.json` **e** em `manifest-base.ts` (mesmo número).
2. Atualize o `CHANGELOG.md`.
3. Faça push no `master` — o workflow cria a tag `vX.Y.Z`.
4. No core, atualize o pin e o lockfile juntos:
   `npm install "@venore/theme-aurora@github:venore-docks/venore-theme-aurora#vX.Y.Z"`
   (editar só o `package.json` deixa o lockfile no commit antigo e o deploy instala a versão velha).
