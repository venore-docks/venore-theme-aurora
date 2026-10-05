# Changelog

Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/). A versão segue
`package.json#version` (e `manifest.ts`, que precisa ter o mesmo número).

## [0.2.0] - 2026-10-05

### Changed

- Migrado para o contrato de tema 8.0.0 do Venore Docks (`theme.ts` com `defineTheme`, exportado em
  `./theme`; `venoreTheme` no `package.json`). Layout `rail` do kit, colapso no header e menu do
  header a partir de `lg` declarados no manifesto.
- Componentes próprios substituídos pelo kit do core: nenhuma região forkada. A identidade (rail
  escura tingida pela paleta nos dois modos, borda sutil a 18% no claro, larguras 15rem/4.25rem,
  scrim escuro, tipografia) vive só em tokens: `[data-aurora-rail]` virou `--region-rail-*`.
- JS client do tema: 4,7 KB gz (9 módulos) → 0.

### Added

- Opções: `rail-tone` (sempre escura / segue o modo) e `density` (confortável / compacta).
- Estilo de seção `midnight` e variante `glow` do bloco card (só CSS); escolhas de fonte.
- Regra de paleta `regions.rail.tone = "dark"` (paleta gerada por cor de marca mantém a rail escura).

### Compatibility

- Cores 7.x continuam funcionando nesta versão: `index.ts` exporta o `Shell` da 0.1.13 (congelado
  em `legacy/`) e `./manifest` aponta para um manifesto com contrato 7.0.0. Sai na 0.3.0.

## [0.1.13] - 2026-10-01

### Changed

- Rail fixo na altura da tela no desktop: o menu não some ao rolar a página.
- Menu do cabeçalho só aparece no header a partir do desktop; no mobile vai pro fim do drawer.
- Fundo atrás do drawer mobile escurece a página (token `--aurora-scrim`) em vez do véu claro.
- Ícones centralizados no rail recolhido; títulos de grupo do admin sem transparência
  (contraste ≥ 4.5:1).

## [0.1.12] - 2026-10-01

### Fixed

- Borda do rail no modo claro quase branca: agora usa a cor da borda da página com opacidade baixa
  (18%). Inclui o segmento ativo do seletor Site/Admin.
- Rail não seguia o matiz das paletas distantes do violeta (Floresta saía azul, Rubro saía
  magenta): as misturas de cor usam base com matiz `none`.
- Texto secundário do rail no modo escuro abaixo de 4.5:1 de contraste depois do tingimento.
- Marca do header encostando no botão de recolher a sidebar (folga à esquerda no desktop).

### Added

- README e este CHANGELOG.

## [0.1.11] - 2026-10-01

### Added

- Rail tingido pela cor primária da paleta ativa, sempre escuro.
- Paletas escritas à mão com mais personalidade (Espaço, Ametista, Âmbar, Rubro, Floresta,
  Grafite, Oceano).

### Changed

- Botão de recolher a sidebar mora dentro do header (fica sempre por cima e acompanha o header
  fixo).

## [0.1.10] - 2026-10-01

### Fixed

- Sidebar ilegível no modo claro (texto do modo claro sobre o rail escuro).
- `manifest.version` defasado em relação à tag.
- JSON-LD do breadcrumb serializado com `serializeJsonLd`.

### Added

- `capabilities.headerBehavior` (libera o formulário de header fixo/encolher em `/admin/themes`).

## [0.1.9] - 2026-09-30

- Respeita `nav.hideLoginLink` e o link de login no rodapé.

## [0.1.8] - 2026-09-24

- Paletas renomeadas: FEM → Oceano, Oceano → Espaço (ids mantidos).

## [0.1.7] - 2026-09-24

- Botão de recolher a sidebar com borda de destaque sobre o header no modo escuro.

## [0.1.6] - 2026-09-23

- `manifest.version` sincronizado com o `package.json`.

## [0.1.5] - 2026-09-23

- Botão de recolher a sidebar não fica mais atrás do header.

## [0.1.4] - 2026-09-22

- Link externo do main-nav abre em nova aba.

## [0.1.3] - 2026-09-20

- Paleta FEM (Portal do Colaborador), escrita à mão.

## [0.1.2] - 2026-09-19

- Sidebar do site com a mesma cor da sidebar do admin.

## [0.1.1] - 2026-09-19

- Ícones não são mais cortados no rail recolhido.

## [0.1.0] - 2026-09-19

- Primeira versão: arranjo rail (sidebar de altura inteira, header só sobre o conteúdo).
