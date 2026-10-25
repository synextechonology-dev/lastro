export type Pessoa = {
  iniciais: string;
  nome: string;
  cargo: string;
  texto: string;
  assuntos: string[];
  registro: string;
};

export const equipe: Pessoa[] = [
  {
    iniciais: "RA",
    nome: "Rafael Almeida",
    cargo: "Contador responsável",
    texto:
      "Cuida da contabilidade e do planejamento das empresas do Simples e do Lucro Presumido.",
    assuntos: ["Contabilidade", "Planejamento", "Troca de contador"],
    registro: "CRC-SP 000000/O-0 · exemplo",
  },
  {
    iniciais: "CD",
    nome: "Camila Duarte",
    cargo: "Departamento pessoal",
    texto:
      "Faz a folha de pagamento, as férias e as admissões. Responde as dúvidas sobre funcionários.",
    assuntos: ["Folha", "Férias", "FGTS"],
    registro: "Atende pelo WhatsApp · exemplo",
  },
  {
    iniciais: "LF",
    nome: "Lucas Ferreira",
    cargo: "Fiscal e MEI",
    texto:
      "Emite as guias, cuida das notas fiscais e acompanha quem está perto de sair do MEI.",
    assuntos: ["Guias", "Notas fiscais", "MEI"],
    registro: "Atende pelo WhatsApp · exemplo",
  },
];
