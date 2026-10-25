# O que falta: Lastro Contabilidade

Com `?revisao=1` no endereço, cada item abaixo aparece no site com borda rosa e uma etiqueta.

## 1. Mídia

| O quê | Situação | O que fazer |
|---|---|---|
| Vídeo do hero | Os 3 primeiros segundos têm o texto "Santa Cruz do Rio Pardo" e a marca de outro perfil gravados | Cortar os 3 s iniciais ou gerar de novo no Google Flow a partir de uma foto sem texto |
| Foto de reserva (`hero-santa-cruz.jpg`) | Tem o mesmo texto e a mesma marca gravados; 405 x 720 px | Usar só como reserva. Para a versão final, foto sem texto com pelo menos 1000 px de largura |
| Mapa | Ilustrativo | Num site real, link para o Google Maps com o endereço verdadeiro |

## 2. Dados fictícios (trocar quando virar site de cliente)

Tudo em `src/content/`:
- WhatsApp `(14) 90000-0000` → `5514900000000`
- Endereço `Rua Exemplo, 123, Centro`
- E-mail `contato@lastro.exemplo`
- Preços dos planos (R$ 149,90 e R$ 349,90)
- Equipe (Rafael Almeida, Camila Duarte, Lucas Ferreira) e o CRC `000000/O-0`
- Depoimento e iniciais dos avatares
- Dados do gráfico (faturamento de maio a setembro)

## 3. Conferir antes de publicar

- Datas do calendário de prazos (salários no 5º dia útil, DAS e FGTS no dia 20, declaração do MEI em 31/05). Conferidas em outubro de 2026; regras mudam.
- Respostas das dúvidas frequentes, com o contador responsável de cada escritório real.

## 4. Decisões que dá para mudar

- Botão do cabeçalho em contorno, para o ouro ficar só no "Trocar de contador" da primeira tela.
- "Onde estamos" saiu do menu do topo (não cabia) e ficou no rodapé.
- Botão elástico com escala 1,08 (o código de origem usava 1,14).
- Página com 13 seções. Se precisar enxugar, as primeiras candidatas a sair são Depoimento e Faixa de CTA.
