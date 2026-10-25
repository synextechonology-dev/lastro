# Prompt para colar no Claude Code

Abra esta pasta no VS Code, inicie o Claude Code (modelo Opus) e cole o texto abaixo.

---

Leia o `CLAUDE.md`, o `docs/design-system.md` e o `docs/pendencias.md`. Depois abra `previa/index.html`: essa é a prévia aprovada do site e a referência visual exata.

Transforme a prévia num projeto Next.js (App Router, TypeScript) seguindo a estrutura de pastas e as regras do `CLAUDE.md`.

Faça nesta ordem e pare no fim de cada etapa para eu conferir:

1. Crie o projeto Next.js nesta pasta, configure as fontes com `next/font/google`, crie o `globals.css` com os tokens e mova as mídias de `previa/` para `public/midia/`.
2. Crie os arquivos de `src/content/` com todos os textos e dados da prévia, sem mudar nenhuma palavra.
3. Crie `Logo`, `Icones`, `Topbar`, `Header` e `Hero`. Compare com a prévia em 390, 768 e 1440 px.
4. Crie as demais seções, na ordem do `CLAUDE.md`.
5. Crie os 4 efeitos em `components/efeitos/`, com o mesmo comportamento da prévia e respeitando `prefers-reduced-motion`.
6. Crie o formulário de contato e `lib/whatsapp.ts`.
7. Crie as páginas `/privacidade` e `/cookies` e o aviso de cookies.
8. Crie o modo `?revisao=1` com as pendências de `docs/pendencias.md`.
9. Rode `npm run build`, corrija os erros e me diga o que ficou diferente da prévia.

Regras: não troque textos, não invente seções, não adicione bibliotecas sem me perguntar e mantenha todos os selos de "projeto conceito".
