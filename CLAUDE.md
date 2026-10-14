# @venore/theme-aurora — instruções para o Claude

Tema do [Venore Docks](https://github.com/venore-docks/venore-docks), instalado no core como dependência git
(`@venore/theme-aurora`). Este repo não roda sozinho: checagens rodam **a partir do core**.

Contrato **8.0.0** (`defineTheme`): declara manifesto, tokens e só as regiões/templates que diferem do kit
(`venore-slime`). Tema v8 não pode ter dívida em baseline de a11y/SSR. Leia `docs/themes/theme-system-v8.md` do core antes de mexer.

## Regras

As regras são as do core — não copie para cá:
- `.claude/rules/css-tokens.md` do core: valores de design só no `theme.css`, cores em `oklch`, vocabulário shadcn
  (`bg-card`, `text-muted-foreground`…), sem cor Tailwind crua; propriedades lógicas (`ms-`/`ps-`/`border-s`/`start-`).
- Tema só recebe props do slot e renderiza — nunca busca dado sozinho (`AGENTS.md` §2 do core).
- Mobile first (`AGENTS.md` §4 do core). Todo "AGENTS.md §N" citado aqui se refere ao **AGENTS.md do core**.

## Verificar contra o core

Com o core clonado em `../venore-docks`:

```bash
cd ../venore-docks
npm pkg set "dependencies.@venore/theme-aurora=file:../venore-theme-aurora"   # não commitar
npm install --no-audit --no-fund --loglevel=error
npm run theme:check -- --theme aurora --no-browser   # sem Playwright; rode completo antes de publicar
git checkout package.json package-lock.json                                 # desfaz o file:
```

## Versão

`package.json` `version` = tag `vX.Y.Z`. O workflow `tag-release.yml` cria a tag `v<version>` quando o `package.json` chega no `master` com versão nova — subir a versão basta para publicar.
O core passa a usar a versão nova com a skill `bump-plugin` do core — nunca ajuste o core para acomodar o pacote.

## Economia de tokens

- Uma sessão por tarefa; o que precisa sobreviver vai para a passagem de sessão (skill `passagem-de-sessao` do core).
- Anexe à sessão só os repos que vão mudar; para consultar o core, leia o arquivo pontual em vez de clonar tudo.
- Saída enxuta: `git diff --stat` antes do diff, arquivo grande por faixa, screenshot só do breakpoint que mudou.
