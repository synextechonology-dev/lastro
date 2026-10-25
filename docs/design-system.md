# Lastro Contabilidade — design system aplicado

Resumo da identidade (PDF em `marca/`) do jeito que foi aplicado na prévia. Em caso de dúvida, vale o que está em `previa/index.html`.

## Cores

| Token | HEX | Uso |
|---|---|---|
| --noite | #0B1220 | Fundo das seções escuras; texto sobre ouro |
| --grafite | #131B2C | Cards e superfícies no escuro |
| --linha-escura | rgba(255,255,255,.08) | Bordas e divisórias no escuro |
| --ouro | #D4A84B | Botão principal, base do logo, palavra de ênfase, número principal. Nunca em texto corrido |
| --ouro-hover | #DDB866 | Hover do botão principal |
| --ouro-ativo | #C29538 | Clique do botão principal |
| --ouro-escuro | #7A5C17 | Ouro para texto e ícones no claro |
| --menta | #3DDC97 | Status positivo e checks no escuro |
| --gelo | #E8EDF5 | Texto principal no escuro |
| --nevoa | #8A94A7 | Texto secundário no escuro |
| --papel | #F5F3EE | Fundo das seções claras |
| --tinta | #0B1220 | Texto principal no claro; botão "Como chegar" |
| --cinza | #5B6474 | Texto secundário no claro |
| --linha-clara | #E2DED5 | Bordas e divisórias no claro |

Contraste aprovado: gelo/noite 15,9 · névoa/noite 6,1 · ouro/noite 8,5 · menta/noite 10,6 · noite/ouro 8,5 · tinta/papel 16,9 · cinza/papel 5,4 · ouro-escuro/papel 5,6.
Não usar: ouro sobre papel em texto (2,0) e névoa sobre papel (2,8).

Tokens por seção: a classe `.escuro` ou `.claro` redefine `--fg`, `--fg2`, `--linha`, `--sup`, `--enf`, `--foco` e `--hover-sup`. Os componentes usam esses tokens e funcionam nos dois fundos.

## Tipografia

| Nível | Fonte | Desktop | Mobile |
|---|---|---|---|
| H1 | Geist 500, -0,025em | 56/60 | 36 |
| H2 | Geist 500, -0,02em | 38/44 | 28 |
| H3 | Geist 500 | 24/30 | 20 |
| H4 (título de card) | Geist 500 | 18 | 17 |
| Ênfase | Instrument Serif itálico 400, 1,08em, cor `--enf` | uma palavra por título | |
| Corpo | Geist 400 | 16/26 | 16 |
| Pequeno | Geist 400 | 13/20 | 13 |
| Rótulo | Geist Mono 400, 11, caixa alta, 0,08em | | |
| Números e preços | Geist Mono 500, tabulares | 40 a 48 | 36 |

## Forma

- Botões e chips em pílula (999px). Cards 14 px. Campos 10 px.
- Botão principal: ouro, texto noite, Geist 600 15, altura 48, padding 0 26.
- Botão secundário: contorno 1,5 px na cor `--fg`, fundo transparente.
- Ícones em traço 1,5 px, 24 px, dentro de um quadrado de 44 px com borda e raio 10.
- Sombra só no claro: 0 12px 32px rgba(11,18,32,.08).
- Padrão de camadas: linhas horizontais com espaçamento crescente (SVG na prévia). No fim do hero, no canto dos cards, na faixa de CTA e no contato.
- Brilho: radial de ouro a 8% atrás do hero e dos planos.

## Logo

Símbolo em `viewBox 0 0 100 88`: haste 10 x 70 · barra de cima 50 x 13 · barra do meio (y 34) 72 x 13 · base em ouro (y 68) 100 x 20.
"Lastro" em Geist 600 com -0,035em; "CONTABILIDADE" em Geist Mono 9 px com 0,24em.
