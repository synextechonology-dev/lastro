export type Plano = {
  id: string;
  nome: string;
  regime: string;
  /** Valor exibido e lido pelo odômetro. Ausente quando o plano é sob consulta. */
  preco?: string;
  precoTexto?: string;
  destaque?: boolean;
  itens: string[];
  botao: string;
  mensagem: string;
};

export const planos: Plano[] = [
  {
    id: "p1",
    nome: "Essencial",
    regime: "MEI",
    preco: "149,90",
    itens: [
      "Guia mensal do MEI em dia",
      "Declaração anual do MEI",
      "Orientação para emitir nota fiscal",
      "Atendimento pelo WhatsApp",
    ],
    botao: "Quero este plano",
    mensagem: "Olá! Tenho interesse no plano Essencial (MEI).",
  },
  {
    id: "p2",
    nome: "Empresa",
    regime: "Simples Nacional",
    preco: "349,90",
    destaque: true,
    itens: [
      "Contabilidade e fiscal mensal",
      "Folha de até 3 funcionários",
      "Aviso antes de cada vencimento",
      "Relatório mensal em linguagem simples",
      "Atendimento pelo WhatsApp",
    ],
    botao: "Quero este plano",
    mensagem: "Olá! Tenho interesse no plano Empresa (Simples Nacional).",
  },
  {
    id: "p3",
    nome: "Completo",
    regime: "Lucro Presumido",
    precoTexto: "Sob consulta",
    itens: [
      "Contabilidade completa",
      "Departamento pessoal",
      "Planejamento tributário anual",
      "Reunião mensal de resultados",
    ],
    botao: "Pedir proposta",
    mensagem: "Olá! Quero uma proposta do plano Completo (Lucro Presumido).",
  },
];

export const seloMaisEscolhido = "Mais escolhido";

/** Card "Relatório de setembro" (valores em R$ mil). */
export const relatorio = {
  titulo: "Relatório de setembro",
  unidade: "R$ mil · exemplo",
  descricao:
    "Faturamento de maio a setembro, em mil reais: 42, 48, 45, 56 e 63.",
  rodape: "Impostos de setembro pagos em dia",
  dados: [
    { rotulo: "Mai", valor: 42 },
    { rotulo: "Jun", valor: 48 },
    { rotulo: "Jul", valor: 45 },
    { rotulo: "Ago", valor: 56 },
    { rotulo: "Set", valor: 63 },
  ],
};
