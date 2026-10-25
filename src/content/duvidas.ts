export type Duvida = {
  pergunta: string;
  resposta: string;
};

export const duvidas: Duvida[] = [
  {
    pergunta: "Preciso avisar o meu contador atual?",
    resposta:
      "Você não precisa ter essa conversa sozinho. A gente entra em contato com o contador atual, pede os documentos e combina a data da transferência.",
  },
  {
    pergunta: "Posso trocar de contador no meio do ano?",
    resposta:
      "Pode. A troca é feita em qualquer mês. A gente combina a data com cuidado para nenhuma guia ficar sem responsável.",
  },
  {
    pergunta: "Quanto tempo leva a troca?",
    resposta:
      "Na maioria dos casos, a partir do mês seguinte as guias e os relatórios já saem pela Lastro. Depende de quanto tempo o contador atual leva para entregar os documentos.",
  },
  {
    pergunta: "Sou MEI. Preciso de contador?",
    resposta:
      "Não é obrigatório. Mas ajudamos com a guia mensal, a declaração anual e o momento certo de sair do MEI, que é quando os erros costumam aparecer.",
  },
  {
    pergunta: "Vocês atendem empresas de outras cidades?",
    resposta:
      "Atendemos. O atendimento é pelo WhatsApp e os documentos são digitais. Quem é de Santa Cruz do Rio Pardo também pode vir ao escritório.",
  },
  {
    pergunta: "Como eu recebo as guias e os relatórios?",
    resposta:
      "Pelo WhatsApp e por e-mail. As guias chegam com antecedência e o relatório do mês vem em linguagem simples.",
  },
];
