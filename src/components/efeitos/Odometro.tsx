"use client";

import { useAparecer, useMovimentoReduzido } from "@/lib/movimento";
import styles from "./Odometro.module.css";

const DIGITOS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * Número em que cada dígito é uma fita de 0 a 9 que desliza até o valor
 * quando aparece na tela. O leitor de tela lê o valor real.
 */
export function Odometro({ valor }: { valor: string }) {
  const [ref, visivel] = useAparecer<HTMLElement>(0.4);
  const calmo = useMovimentoReduzido();
  const rodar = visivel || calmo;

  return (
    <strong ref={ref}>
      <span className="sr-only">{valor}</span>
      <span className={styles.odo} aria-hidden="true">
        {valor.split("").map((c, i) => {
          if (!/\d/.test(c)) {
            return (
              <span key={i} className={styles.sep}>
                {c}
              </span>
            );
          }
          const fita = valor.slice(0, i).replace(/\D/g, "").length;
          return (
            <span key={i} className={styles.digito}>
              <span
                className={styles.fita}
                style={{
                  transform: `translateY(${rodar ? -Number(c) * 10 : 0}%)`,
                  transitionDelay: `${120 + fita * 110}ms`,
                }}
              >
                {DIGITOS.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </strong>
  );
}
