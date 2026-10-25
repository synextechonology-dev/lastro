/**
 * Títulos e textos de apoio de cada seção. Palavras entre `*asteriscos*`
 * saem em Instrument Serif itálico (a "ênfase" do design system).
 */

export const hero = {
  rotulo: "Contabilidade · Santa Cruz do Rio Pardo",
  titulo: "Sua empresa em *ordem*, sem dor de cabeça.",
  texto:
    "Cuidamos dos impostos, da folha e da papelada. Você acompanha tudo pelo WhatsApp e foca no que faz o seu negócio crescer.",
  botaoPrincipal: {
    rotulo: "Trocar de contador",
    mensagem: "Olá! Tenho um CNPJ e quero trocar de contador.",
  },
  botaoSecundario: {
    rotulo: "Abrir minha empresa",
    mensagem: "Olá! Quero abrir minha empresa.",
  },
  notas: ["Troca sem parar a operação", "Atendimento por gente da cidade"],
  videoAlt:
    "Vídeo aéreo de drone sobrevoando os telhados de Santa Cruz do Rio Pardo",
};

export const diferenciais = [
  {
    icone: "zap",
    titulo: "Resposta pelo WhatsApp",
    texto: "Dúvida sobre imposto ou nota? Você fala direto com o seu contador.",
  },
  {
    icone: "nuvem",
    titulo: "Tudo digital",
    texto: "Guias, notas e relatórios chegam no seu celular, sem papel.",
  },
  {
    icone: "cal",
    titulo: "Prazos em dia",
    texto: "A gente avisa antes de cada vencimento para você não pagar multa.",
  },
] as const;

export const secaoServicos = {
  rotulo: "O que fazemos",
  titulo: "Principais *serviços*",
  texto: "Da abertura do CNPJ à folha de pagamento, tudo num lugar só.",
  linkRotulo: "Falar sobre isso",
  tambem: "Também atendemos:",
};

export const faixaCta = {
  titulo: "O seu contador *demora* para responder?",
  texto: "A troca é mais simples do que parece. A gente cuida de tudo com o contador atual.",
  botao: "Quero trocar de contador",
  mensagem: "Olá! Quero trocar de contador.",
};

export const processo = {
  rotulo: "Troca de contador",
  titulo: "Como funciona a *troca*",
  texto:
    "Quatro passos, sem parar a sua empresa e sem você precisar falar com o contador atual.",
  graficoAlt:
    "Linha que sobe da troca de contador até o primeiro mês com tudo em dia",
  graficoLegenda: "Da conversa no WhatsApp ao primeiro mês em dia",
  passos: [
    {
      titulo: "Conversa pelo WhatsApp",
      texto: "Você conta como está a empresa hoje e o que não está funcionando.",
    },
    {
      titulo: "Análise do seu CNPJ",
      texto: "Olhamos o regime, os impostos e as pendências antes de qualquer proposta.",
    },
    {
      titulo: "A gente fala com o contador atual",
      texto: "Pedimos os documentos e fazemos a transferência por você.",
    },
    {
      titulo: "Tudo em dia",
      texto: "A partir do mês seguinte, as guias e os relatórios chegam no seu celular.",
    },
  ],
};

export const secaoPlanos = {
  rotulo: "Planos",
  titulo: "Um plano para cada *fase* da empresa",
  texto:
    "Valor fixo por mês, sem surpresa no fim do mês. E todo mês você recebe um relatório simples de como a empresa está.",
};

export const secaoPrazos = {
  rotulo: "Calendário",
  titulo: "Nenhum *prazo* esquecido",
  texto:
    "Os vencimentos que mais pesam para quem tem empresa. A gente acompanha cada um e avisa você antes.",
};

export const secaoEquipe = {
  rotulo: "Equipe",
  titulo: "Quem cuida da sua *empresa*",
  texto:
    "Você sabe o nome de quem responde. Sem central de atendimento e sem passar de mão em mão.",
};

export const secaoDepoimento = {
  titulo: "O que dizem nossos *clientes*",
  segmentos: "Segmentos que atendemos",
};

export const secaoDuvidas = {
  rotulo: "Dúvidas",
  titulo: "Perguntas *frequentes*",
  texto: "O que mais perguntam antes de trocar de contador ou abrir a empresa.",
  link: "Ainda tem dúvida? Fale com um contador",
  mensagem: "Olá! Tenho uma dúvida antes de contratar a Lastro.",
};

export const secaoContato = {
  rotulo: "Contato",
  titulo: "Conte o seu caso e fale com um *contador*",
  texto: "Preencha em 20 segundos. A mensagem já chega pronta no nosso WhatsApp.",
  campoCaso: "Qual é o seu caso?",
  casoVazio: "Escolha uma opção",
  casos: [
    "Quero trocar de contador",
    "Quero abrir minha empresa",
    "Sou MEI",
    "Sou da área da saúde",
    "Sou produtor rural",
    "Outro assunto",
  ],
  campoNome: "Seu nome",
  nomeExemplo: "Ex.: Mariana Costa",
  campoEmpresa: "Empresa ou CNPJ",
  empresaOpcional: "(opcional)",
  empresaExemplo: "Ex.: Mercado Costa",
  erroCaso: "Escolha o seu caso.",
  erroNome: "Digite o seu nome.",
  enviar: "Enviar pelo WhatsApp",
  prontaTitulo: "Sua mensagem está pronta",
  abrirConversa: "Abrir conversa no WhatsApp",
  avisoPrivacidade:
    "Seus dados não ficam salvos no site. Eles só montam a mensagem que você envia pelo WhatsApp.",
  avisoPrivacidadeLink: "Veja a política de privacidade",
  avisoEnvio: "Ao abrir a conversa, você envia estes dados ao escritório pelo WhatsApp.",
  alternativa: "Prefere conversar pessoalmente?",
  alternativaLink: "Agende uma visita ao escritório",
};

export const secaoOnde = {
  rotulo: "Onde estamos",
  titulo: "Venha tomar um *café* com a gente",
  endereco: "Endereço",
  horario: "Horário",
  telefone: "Telefone e WhatsApp",
  email: "E-mail",
  comoChegar: "Como chegar",
  mapaAlt:
    "Mapa ilustrativo do centro de Santa Cruz do Rio Pardo com a localização do escritório",
  mapaNota: "[Mapa real entra na versão final]",
};

export const rodape = {
  tag: "A base que o seu negócio precisa para *crescer*.",
  navegacao: [
    { href: "/#servicos", rotulo: "Serviços" },
    { href: "/#como-funciona", rotulo: "Como funciona" },
    { href: "/#planos", rotulo: "Planos" },
    { href: "/#equipe", rotulo: "Equipe" },
    { href: "/#duvidas", rotulo: "Dúvidas" },
    { href: "/#onde", rotulo: "Onde estamos" },
    { href: "/#contato", rotulo: "Contato" },
  ],
  servicos: [
    "Contabilidade mensal",
    "Troca de contador",
    "Abertura de empresa",
    "Departamento pessoal",
  ],
  privacidade: "Política de privacidade",
  cookies: "Política de cookies",
  preferencias: "Preferências de cookies",
};

export const cookies = {
  texto:
    "Este site usa só o essencial para funcionar. Não usamos cookies de análise nem de publicidade.",
  link: "Saiba mais",
  entendi: "Entendi",
};
