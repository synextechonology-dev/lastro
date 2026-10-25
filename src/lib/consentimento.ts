/**
 * Escolha do visitante sobre cookies.
 *
 * Hoje o site só usa o essencial (a própria escolha do aviso), então o aviso
 * tem um botão só: "Entendi".
 *
 * Se um dia entrar uma ferramenta de análise:
 *  1. o aviso ganha dois botões, "Aceitar" e "Só os essenciais", que gravam
 *     `{ essenciais: true, analise: true }` ou `{ essenciais: true, analise: false }`;
 *  2. `podeUsar("analise")` passa a devolver `lerEscolha()?.analise === true`;
 *  3. o script da ferramenta só é carregado dentro de um `if (podeUsar("analise"))`,
 *     nunca antes do aceite;
 *  4. a página /cookies e a política de privacidade são atualizadas.
 */

export type Categoria = "essenciais" | "analise";
export type Escolha = Record<Categoria, boolean>;

export const CHAVE = "lastro-cookies";

/** Guarda a escolha na memória quando o navegador não deixa usar o armazenamento local. */
let memoria: Escolha | null = null;
let reaberto = false;
const ouvintes = new Set<() => void>();

function avisar() {
  ouvintes.forEach((f) => f());
}

export function lerEscolha(): Escolha | null {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (bruto) {
      const valor: unknown = JSON.parse(bruto);
      if (valor && typeof valor === "object" && (valor as Escolha).essenciais === true) {
        return { essenciais: true, analise: (valor as Escolha).analise === true };
      }
    }
  } catch {
    // Armazenamento bloqueado ou valor inválido: vale a memória.
  }
  return memoria;
}

export function gravarEscolha(escolha: Escolha) {
  memoria = escolha;
  try {
    localStorage.setItem(CHAVE, JSON.stringify(escolha));
  } catch {
    // Sem armazenamento local: a escolha vale só até fechar a página.
  }
  reaberto = false;
  avisar();
}

/** Hoje nenhuma categoria além das essenciais está em uso. */
export function podeUsar(categoria: Categoria): boolean {
  if (categoria === "essenciais") return true;
  return false;
}

/* Pequena "loja" para o aviso, o rodapé e a barra de WhatsApp conversarem. */

export function assinar(ouvinte: () => void) {
  ouvintes.add(ouvinte);
  window.addEventListener("storage", ouvinte);
  return () => {
    ouvintes.delete(ouvinte);
    window.removeEventListener("storage", ouvinte);
  };
}

export function avisoAberto(): boolean {
  return reaberto || lerEscolha() === null;
}

export function foiReaberto(): boolean {
  return reaberto;
}

export function reabrirAviso() {
  reaberto = true;
  avisar();
}
