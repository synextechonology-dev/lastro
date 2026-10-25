"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useMovimentoReduzido } from "@/lib/movimento";
import styles from "./BotaoElastico.module.css";

const RIGIDEZ = 0.22;
const AMORTECIMENTO = 0.72;

/**
 * Link-botão com mola. Escala 1,08 no hover e 0,94 no clique, só em
 * dispositivos com hover. O laço de animação roda apenas enquanto o botão se mexe.
 */
export function BotaoElastico({
  href,
  className,
  children,
  target,
  rel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const calmo = useMovimentoReduzido();

  useEffect(() => {
    const el = ref.current;
    if (!el || calmo || !window.matchMedia("(hover: hover)").matches) return;

    let escala = 1;
    let vel = 0;
    let alvo = 1;
    let id: number | null = null;

    function passo() {
      if (!el) return;
      const forca = (alvo - escala) * RIGIDEZ;
      vel = (vel + forca) * AMORTECIMENTO;
      escala += vel;
      if (Math.abs(vel) < 0.0004 && Math.abs(alvo - escala) < 0.0004) {
        escala = alvo;
        el.style.transform = alvo === 1 ? "" : `scale(${alvo})`;
        id = null;
        return;
      }
      el.style.transform = `scale(${escala.toFixed(4)})`;
      id = requestAnimationFrame(passo);
    }

    function mira(v: number) {
      alvo = v;
      if (id === null) id = requestAnimationFrame(passo);
    }

    const eventos: [string, () => void][] = [
      ["mouseenter", () => mira(1.08)],
      ["mouseleave", () => mira(1)],
      ["mousedown", () => mira(0.94)],
      ["mouseup", () => mira(1.08)],
      ["focus", () => mira(1.04)],
      ["blur", () => mira(1)],
    ];
    eventos.forEach(([nome, fn]) => el.addEventListener(nome, fn));

    return () => {
      eventos.forEach(([nome, fn]) => el.removeEventListener(nome, fn));
      if (id !== null) cancelAnimationFrame(id);
      el.style.transform = "";
    };
  }, [calmo]);

  return (
    <a
      ref={ref}
      href={href}
      className={`${className ?? ""} ${styles.elastico}`.trim()}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
}
