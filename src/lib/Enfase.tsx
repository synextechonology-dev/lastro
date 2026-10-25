import { Fragment } from "react";

/** Transforma `*palavra*` em `<em>palavra</em>` (a ênfase em Instrument Serif). */
export function Enfase({ texto }: { texto: string }) {
  return texto.split(/\*([^*]+)\*/g).map((parte, i) =>
    i % 2 === 1 ? <em key={i}>{parte}</em> : <Fragment key={i}>{parte}</Fragment>,
  );
}
