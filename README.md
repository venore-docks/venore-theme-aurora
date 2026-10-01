# @venore/theme-aurora

Tema do [Venore Docks](https://github.com/venore-docks/venore-docks) inspirado em ferramentas de
desenvolvedor (Linear/Vercel/Supabase): cinza quase preto com leve viés violeta, um único acento
índigo-violeta, cantos contidos, animações curtas e um **rail** de navegação sempre escuro, tingido
pela cor da paleta ativa. O modo escuro é a referência; o claro existe porque o contrato exige os
dois.

## Estrutura

| Arquivo | Papel |
|---|---|
| `manifest.ts` | key `aurora`, versão, contrato de tema (`themeContractVersion`), marca, modos de cor e `capabilities` |
| `theme.css` | todos os tokens: bloco `[data-theme="aurora"]`, bloco `.dark` e as regras do rail |
| `color-palettes.ts` | catálogo de paletas escrito à mão (ids estáveis — podem estar salvos como paleta ativa) |
| `index.ts` | barrel: `Shell`, manifest e paletas |
| `components/` | o `Shell` e os slots (header, sidebar, conteúdo, footer, breadcrumbs) |
| `.github/workflows/tag-release.yml` | cria a tag `vX.Y.Z` quando a versão do `package.json` muda no `master` |

O pacote é TypeScript cru e **só compila dentro do core**: `@venore/theme-sdk` é um alias de
tsconfig do Venore Docks (`src/theme-sdk/`), e o Next transpila o pacote via `transpilePackages`.

## Como o core usa o tema

- O `package.json` do core fixa o tema por tag: `github:venore-docks/venore-theme-aurora#vX.Y.Z`.
- `scripts/gen-theme-registry.ts` (core) registra manifest/`Shell`/paletas, importa o `theme.css` e
  gera um `@source` para o Tailwind ler as classes dos componentes deste pacote.
- O `/admin/themes` usa `manifest.version` como versão instalada e compara com as tags do repo —
  por isso `manifest.version` e `package.json#version` precisam andar juntos.

## Rail

O rail usa `--aurora-brand` (o `--primary` já resolvido no `<html>`, com a paleta ativa) misturado a
um quase-preto fixo, então muda de cor com a paleta mas nunca clareia. No modo claro, os tokens de
texto e superfície são redeclarados dentro do rail (`[data-aurora-rail]`) para ler sobre o fundo
escuro. As misturas usam base com matiz `none` para não puxar o matiz da marca para o violeta.

## Publicar uma versão

1. Suba `version` no `package.json` **e** em `manifest.ts` (mesmo número).
2. Atualize o `CHANGELOG.md`.
3. Faça push no `master` — o workflow cria a tag `vX.Y.Z`.
4. No core, atualize o pin e o lockfile juntos:
   `npm install "@venore/theme-aurora@github:venore-docks/venore-theme-aurora#vX.Y.Z"`
   (editar só o `package.json` deixa o lockfile no commit antigo e o deploy instala a versão velha).

## Testar antes de publicar

No checkout do core, com as dependências instaladas:

```sh
rm -rf node_modules/@venore/theme-aurora
cp -r ../venore-theme-aurora node_modules/@venore/theme-aurora
npm run typecheck && npm run test
```

O `theme.css` precisa declarar todos os tokens do contrato (os mesmos do `venore-slime`, menos a
identidade exclusiva dele) — ver `src/themes/theme-token-contract.ts` no core.
