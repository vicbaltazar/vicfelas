# VitóriaOS — Portfolio

Portfolio em Next.js 14 (App Router) + TypeScript + Tailwind CSS, com a estética
de um "desktop" retrô em tom pastel: janelas com barra de título monoespaçada,
dock de navegação fixo e um terminalzinho de skills.

## Paleta

| Nome        | Hex       | Uso                                  |
| ----------- | --------- | ------------------------------------- |
| cream       | `#fffaf3` | fundo base                            |
| pink-petal  | `#ffb6c1` | destaque primário (botões, hero)      |
| sky-powder  | `#b0e0e6` | destaque secundário (links, chrome)   |
| lime-glow   | `#dde874` | destaque terciário (status, cursor)   |
| ink-plum    | `#3d2b3f` | texto principal / bordas              |
| mauve-soft  | `#a98aa8` | texto secundário                      |

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

> As fontes (Space Mono, JetBrains Mono, Quicksand) são carregadas via
> `next/font/google` no build — é só precisar de internet na primeira vez
> que você rodar `npm run dev` ou `npm run build`.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.tsx      → fontes + metadata + overlay CRT
  page.tsx         → monta as seções (sobre, projetos, skills, contato)
  globals.css       → grid de fundo, scanlines, scrollbar customizada
components/
  Window.tsx       → janela reutilizável (o elemento-assinatura do design)
  MenuBar.tsx       → barra superior com relógio
  Dock.tsx          → dock inferior de navegação
  ProjectCard.tsx   → janela de projeto
  SkillsTerminal.tsx→ janela estilo terminal com a stack
data/
  projects.ts       → seus projetos (edite aqui pra adicionar/trocar)
```

## Editando conteúdo

- **Projetos:** edite `data/projects.ts`.
- **Skills:** edite o array `skillGroups` em `components/SkillsTerminal.tsx`.
- **Texto do "sobre" e contato:** edite direto em `app/page.tsx`.
- **Cores:** edite `tailwind.config.ts` (bloco `theme.extend.colors`).

## Deploy

Funciona out-of-the-box na Vercel: importe o repositório e é só dar deploy,
sem variáveis de ambiente necessárias.
# vicfelas
