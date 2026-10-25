import { site } from "./site";

/** Dados do controlador usados nas páginas de privacidade e cookies. */
export const legal = {
  razaoSocial: "Lastro Contabilidade Ltda. (fictícia)",
  cnpj: "00.000.000/0000-00",
  endereco: site.enderecoCompleto,
  email: site.email,
  whatsapp: site.telefone,
  canalPrivacidade: "privacidade@lastro.exemplo",
  encarregado: "",
  ultimaAtualizacao: "25 de outubro de 2026",
  hospedagem: "Vercel Inc.",
  /** Prazo para responder pedidos dos titulares, em dias. */
  prazoResposta: 15,
} as const;
