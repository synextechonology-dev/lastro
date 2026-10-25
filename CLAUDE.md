# Lastro Contabilidade — site (projeto conceito da Synex)

Este arquivo é lido pelo Claude Code em toda sessão. Ele diz o que é o projeto, o que já foi decidido e como o código deve ser escrito.

## O que é

- Site de um escritório de contabilidade **fictício**, a Lastro Contabilidade, de Santa Cruz do Rio Pardo (SP).
- É um **projeto conceito** da Synex: modelo do nicho contabilidade para mostrar a leads. Nunca é apresentado como cliente real.
- Público: empresários que já têm CNPJ (troca de contador), quem quer abrir empresa e MEI.
- Conversão: WhatsApp. Cada serviço, plano e botão abre o WhatsApp com uma mensagem pronta. Não existe pedido com retirada ou entrega neste nicho.

## Fonte da verdade

| O quê | Onde |
|---|---|
| Layout, textos, seções, comportamento | `previa/index.html` (prévia aprovada na etapa C4) |
| Identidade visual (logo, cores, fontes, ícones, componentes) | `marca/Lastro_Contabilidade_identidade_visual.pdf` |
| Tokens e regras resumidos | `docs/design-system.md` |
| O que ainda falta | `docs/pendencias.md` |

A prévia é a referência visual. O site em Next.js deve ficar **igual** a ela em desktop (1440), tablet (768) e mobile (390). Não redesenhe, não troque textos e não invente seções.

## Stack (fixa)

- Next.js com App Router e TypeScript
- CSS próprio com variáveis (CSS Modules por componente + `globals.css` com os tokens). Sem Tailwind e sem biblioteca de UI.
- Fontes com `next/font/google`: Geist, Geist Mono, Instrument Serif (itálico 400)
- Ícones: SVG em traço desenhados no próprio projeto (`src/components/Icones.tsx`), copiados da prévia. Sem biblioteca de ícones.
- Repositório no GitHub e deploy na Vercel
- Sem banco e sem servidor: o formulário monta a mensagem e abre o WhatsApp

## Estrutura de pastas

```
src/
  app/
    layout.tsx            fontes, metadados, <html lang="pt-BR">
    page.tsx              monta as seções na ordem abaixo
    globals.css           tokens da marca e estilos base
    privacidade/page.tsx  política de privacidade (LGPD)
    cookies/page.tsx      política de cookies (LGPD)
    icon.svg              favicon (símbolo do logo)
  components/
    Topbar.tsx  Header.tsx  Hero.tsx  Diferenciais.tsx  Servicos.tsx
    FaixaCta.tsx  ComoFunciona.tsx  Planos.tsx  Prazos.tsx  Equipe.tsx
    Depoimento.tsx  Duvidas.tsx  Contato.tsx  OndeEstamos.tsx  Rodape.tsx
    BarraWhatsApp.tsx  AvisoCookies.tsx  Logo.tsx  Icones.tsx
    efeitos/  Odometro.tsx  GraficoBarras.tsx  TracoDesenhado.tsx  BotaoElastico.tsx
  content/
    site.ts       nome, WhatsApp, endereço, horário, e-mail, Instagram, url
    servicos.ts   planos.ts   prazos.ts   equipe.ts   duvidas.ts   depoimento.ts
  lib/
    whatsapp.ts   monta o link wa.me com a mensagem
public/
  midia/hero-video.mp4  midia/hero-poster.jpg  midia/hero-santa-cruz.jpg
```

Todo texto e dado editável fica em `src/content/`. Os componentes só leem de lá. Assim o João troca nome, telefone, preços e textos sem mexer em componente, e o mesmo código vira o site de um escritório real.

## Ordem das seções (não mudar)

1. Top bar (some no mobile)
2. Cabeçalho fixo
3. Hero com vídeo
4. Diferenciais (3 cards sobrepostos ao fim do hero)
5. Serviços
6. Faixa de CTA
7. Como funciona a troca (com o traço que se desenha)
8. Planos (com o gráfico de barras e o odômetro nos preços)
9. Calendário de prazos
10. Equipe
11. Depoimento + segmentos
12. Dúvidas frequentes
13. Contato (formulário que abre o WhatsApp)
14. Onde estamos
15. Rodapé
16. Barra fixa de WhatsApp no mobile + aviso de cookies

Fundos alternam escuro (`--noite`) e claro (`--papel`), exatamente como na prévia.

## Regras de código

- Mobile-first. Breakpoints: 768, 1024 e 1200 px.
- HTML semântico: `header`, `nav`, `main`, `section` com `aria-labelledby`, `article`, `footer`, um único `h1`.
- Toque mínimo de 44 px. Foco visível em ouro (`--ouro` no escuro, `--ouro-escuro` no claro).
- Contraste AA. Pares aprovados estão em `docs/design-system.md`.
- `prefers-reduced-motion`: sem animação, tudo aparece no estado final e o vídeo fica parado no pôster.
- Componentes de efeito são `"use client"`. Todo o resto é Server Component.
- Imagens com `next/image`. O vídeo do hero com `<video autoPlay muted loop playsInline poster>`.
- Nenhuma dependência nova sem necessidade. Os efeitos são CSS e JavaScript puro, como na prévia.
- Nada de `localStorage` para dados importantes; só para lembrar a escolha do aviso de cookies.

## Efeitos (copiar o comportamento da prévia)

| Efeito | Onde | Regra |
|---|---|---|
| Botão elástico | "Trocar de contador" e "Abrir minha empresa" no hero | Mola com rigidez .22 e amortecimento .72. Escala 1,08 no hover, .94 no clique. Só em dispositivos com hover. O laço roda só enquanto o botão se mexe |
| Gráfico de barras | Card "Relatório de setembro" na seção Planos | Barras sobem e os números contam juntos quando o card aparece na tela. Último mês em ouro |
| Traço que se desenha | Ao lado do título de Como funciona | `stroke-dasharray` do tamanho da linha; dispara uma vez ao aparecer |
| Odômetro | Preços dos planos Essencial e Empresa | Cada dígito é uma fita de 0 a 9; dispara ao aparecer; leitor de tela lê o valor real |

Todos disparam por `IntersectionObserver`, uma vez só, com um tempo limite de 1,5 s caso o observador não responda.

## WhatsApp

- Número em `src/content/site.ts`. Hoje é fictício: `5514900000000`.
- `lib/whatsapp.ts` exporta `linkWhatsApp(mensagem)` → `https://wa.me/<numero>?text=<mensagem codificada>`.
- Cada serviço, plano e botão tem a sua mensagem (estão no atributo `data-msg` da prévia).
- Formulário de contato: caso + nome obrigatórios, empresa opcional. Valida no envio, mostra erro embaixo do campo, monta a mensagem e mostra o botão "Abrir conversa no WhatsApp".

## LGPD (etapa C6)

- Páginas `/privacidade` e `/cookies` com texto em português simples. Dados do controlador em `src/content/legal.ts`.
- Aviso de cookies com um botão só, "Entendi" (o site só usa o essencial). A escolha fica salva no navegador (chave `lastro-cookies`) via `src/lib/consentimento.ts`. Se entrar uma ferramenta de análise, o aviso ganha "Aceitar" e "Só os essenciais" e a ferramenta só carrega depois do aceite (`podeUsar("analise")`).
- Rodapé tem "Preferências de cookies", que reabre o aviso.
- Formulário: aviso de que os dados não ficam salvos no site; sem caixa "li e aceito" (a base legal é o pedido de contato).
- Enquanto o aviso estiver aberto, a barra fixa de WhatsApp do mobile fica escondida.

## Projeto conceito: o que nunca pode faltar

- Selo "Projeto conceito" na top bar.
- "Valores de exemplo · projeto conceito" abaixo dos planos.
- "Equipe de exemplo · projeto conceito" abaixo da equipe.
- "Depoimento de exemplo · projeto conceito" acima do depoimento.
- Rodapé: "© Lastro Contabilidade · Projeto conceito da Synex. Escritório fictício."
- Modo revisão: com `?revisao=1` no endereço, tudo que está em `docs/pendencias.md` aparece com borda rosa e uma etiqueta.

## Como trabalhar

- Opus para estrutura, design e efeitos; Sonnet para ajustes simples.
- Antes de dar uma etapa por pronta, compare com `previa/index.html` aberto no navegador nas três larguras.
- Commits pequenos, em português, um por seção.
