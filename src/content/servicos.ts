export type Servico = {
  icone: string;
  titulo: string;
  texto: string;
  mensagem: string;
};

export const servicos: Servico[] = [
  {
    icone: "cal",
    titulo: "Contabilidade mensal",
    texto: "Fiscal e contábil em dia, com as guias de imposto prontas no prazo.",
    mensagem: "Olá! Quero saber sobre a contabilidade mensal.",
  },
  {
    icone: "troca",
    titulo: "Troca de contador",
    texto:
      "A gente busca os documentos com o contador atual. Você não precisa se preocupar com nada.",
    mensagem: "Olá! Quero trocar de contador.",
  },
  {
    icone: "porta",
    titulo: "Abertura de empresa",
    texto:
      "Escolhemos com você o tipo de empresa e o regime que fazem sentido para o seu negócio.",
    mensagem: "Olá! Quero abrir minha empresa.",
  },
  {
    icone: "pessoas",
    titulo: "Departamento pessoal",
    texto: "Folha de pagamento, férias, admissão e demissão dos seus funcionários.",
    mensagem: "Olá! Quero ajuda com folha e funcionários.",
  },
  {
    icone: "cracha",
    titulo: "MEI e saída do MEI",
    texto:
      "Guia mensal, declaração anual e a mudança para microempresa quando o faturamento crescer.",
    mensagem: "Olá! Sou MEI e quero ajuda.",
  },
  {
    icone: "doc",
    titulo: "Imposto de renda",
    texto: "Declaração de pessoa física para você, sócios e família.",
    mensagem: "Olá! Quero fazer minha declaração de imposto de renda.",
  },
];

export const tambemAtendemos: Servico[] = [
  {
    icone: "saude",
    titulo: "Médicos, dentistas e clínicas",
    texto: "",
    mensagem: "Olá! Trabalho na área da saúde e quero falar com um contador.",
  },
  {
    icone: "broto",
    titulo: "Produtor rural",
    texto: "",
    mensagem: "Olá! Sou produtor rural e quero falar com um contador.",
  },
];

export const segmentos = [
  { icone: "loja", rotulo: "Comércio" },
  { icone: "maleta", rotulo: "Serviços" },
  { icone: "saude", rotulo: "Saúde" },
  { icone: "broto", rotulo: "Rural" },
  { icone: "cracha", rotulo: "MEI" },
] as const;
