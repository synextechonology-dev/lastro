"use client";

import type { CSSProperties } from "react";
import { useAparecer } from "@/lib/movimento";
import styles from "./TracoDesenhado.module.css";

/** Linha que sobe e se desenha uma vez, quando aparece na tela. */
export function TracoDesenhado({
  alt,
  legenda,
}: {
  alt: string;
  legenda: string;
}) {
  const [ref, visivel] = useAparecer<HTMLElement>(0.2);

  return (
    <figure ref={ref} className={`${styles.graf} ${visivel ? styles.run : ""}`}>
      <svg
        className={styles.traco}
        viewBox="0 0 240 110"
        fill="none"
        role="img"
        aria-label={alt}
      >
        <polyline
          className={styles.tr}
          points="10,92 58,66 96,78 140,34 186,48 228,14"
          style={{ stroke: "var(--tinta)", "--len": 330, "--i": 0 } as CSSProperties}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          className={styles.tr}
          cx="228"
          cy="14"
          r="7"
          style={
            {
              stroke: "var(--ouro)",
              fill: "var(--papel)",
              "--len": 46,
              "--i": 1,
            } as CSSProperties
          }
          strokeWidth="3"
        />
      </svg>
      <figcaption>{legenda}</figcaption>
    </figure>
  );
}
