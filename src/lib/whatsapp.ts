import { site } from "@/content/site";

export function linkWhatsApp(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** Mensagem pronta do formulário de contato. A empresa é opcional. */
export function mensagemContato(caso: string, nome: string, empresa: string): string {
  return (
    `Olá! Vim pelo site da Lastro.\nMeu caso: ${caso}\nNome: ${nome}` +
    (empresa ? `\nEmpresa: ${empresa}` : "")
  );
}
