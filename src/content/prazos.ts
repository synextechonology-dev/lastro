export type Prazo = {
  rotulo: string;
  data: string;
  /** Texto longo na data ("5º dia útil") usa fonte menor. */
  menor?: boolean;
  texto: string;
};

export const prazos: Prazo[] = [
  {
    rotulo: "Salários",
    data: "5º dia útil",
    menor: true,
    texto: "Pagamento dos funcionários, todo mês.",
  },
  {
    rotulo: "DAS · Simples e MEI",
    data: "Dia 20",
    texto: "Guia mensal de impostos do mês anterior.",
  },
  {
    rotulo: "FGTS",
    data: "Dia 20",
    texto: "Depósito dos funcionários pelo FGTS Digital.",
  },
  {
    rotulo: "Declaração do MEI",
    data: "31/05",
    texto: "Declaração anual de faturamento do ano anterior.",
  },
];

export const prazosNota = {
  lembrete: "Lembrete pelo WhatsApp 5 dias antes de cada vencimento.",
  aviso: "Datas gerais. Em feriados e fins de semana o prazo pode mudar.",
};
