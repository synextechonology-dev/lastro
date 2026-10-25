import type { ReactNode } from "react";

/**
 * Marca um trecho como pendente. Só aparece com `?revisao=1` no endereço
 * (borda rosa e etiqueta com a nota); fora disso é texto normal.
 */
export function Pendente({ nota, children }: { nota: string; children: ReactNode }) {
  return <span data-pendente={nota}>{children}</span>;
}
