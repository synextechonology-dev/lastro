"use client";

import { useEffect, useState } from "react";
import { useAparecer, useMovimentoReduzido } from "@/lib/movimento";
import styles from "./GraficoBarras.module.css";

type Dado = { rotulo: string; valor: number };

const DURACAO = 900;

/** Barras que sobem e números que contam juntos quando o card aparece. */
export function GraficoBarras({ dados }: { dados: Dado[] }) {
  const [ref, visivel] = useAparecer<HTMLDivElement>(0.4);
  const calmo = useMovimentoReduzido();
  const [subiu, setSubiu] = useState<boolean[]>(() => dados.map(() => false));
  const [contados, setContados] = useState<number[]>(() => dados.map(() => 0));
  const maior = Math.max(...dados.map((d) => d.valor));

  useEffect(() => {
    if (!visivel || calmo) return;
    const esperas: ReturnType<typeof setTimeout>[] = [];
    const quadros: number[] = [];

    dados.forEach((d, i) => {
      esperas.push(
        setTimeout(() => {
          setSubiu((s) => s.map((v, j) => (j === i ? true : v)));
          const ini = performance.now();
          const conta = (t: number) => {
            const p = Math.min(1, Math.max(0, (t - ini) / DURACAO));
            const n = Math.round(d.valor * (1 - Math.pow(1 - p, 3)));
            setContados((c) => c.map((v, j) => (j === i ? n : v)));
            if (p < 1) quadros[i] = requestAnimationFrame(conta);
          };
          quadros[i] = requestAnimationFrame(conta);
        }, 150 + i * 110),
      );
    });

    return () => {
      esperas.forEach(clearTimeout);
      quadros.forEach(cancelAnimationFrame);
    };
  }, [visivel, calmo, dados]);

  return (
    <div ref={ref} className={styles.barras} aria-hidden="true">
      {dados.map((d, i) => {
        const cheio = calmo || subiu[i];
        return (
          <div key={d.rotulo} className={styles.col}>
            <span className={styles.val}>{calmo ? d.valor : contados[i]}</span>
            <span
              className={styles.haste}
              style={{
                height: cheio ? `${(d.valor / maior) * 100}%` : 0,
                transition: cheio
                  ? "height 0.9s cubic-bezier(0.16, 1, 0.3, 1)"
                  : undefined,
              }}
            />
            <span className={styles.rot}>{d.rotulo}</span>
          </div>
        );
      })}
    </div>
  );
}
