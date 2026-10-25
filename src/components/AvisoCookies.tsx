"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { cookies } from "@/content/textos";
import {
  assinar,
  avisoAberto,
  foiReaberto,
  gravarEscolha,
} from "@/lib/consentimento";
import styles from "./AvisoCookies.module.css";

export function AvisoCookies() {
  const aberto = useSyncExternalStore(assinar, avisoAberto, () => false);
  const reaberto = useSyncExternalStore(assinar, foiReaberto, () => false);
  const botao = useRef<HTMLButtonElement>(null);

  // Enquanto o aviso estiver aberto, a barra fixa de WhatsApp do mobile fica escondida.
  useEffect(() => {
    document.documentElement.toggleAttribute("data-aviso-cookies", aberto);
    return () => document.documentElement.removeAttribute("data-aviso-cookies");
  }, [aberto]);

  // Ao reabrir pelo rodapé, o foco vai para o botão (funciona só com teclado).
  useEffect(() => {
    if (aberto && reaberto) botao.current?.focus();
  }, [aberto, reaberto]);

  if (!aberto) return null;

  return (
    <div
      className={`${styles.cookies} escuro`}
      role="region"
      aria-label="Aviso de cookies"
    >
      <div className={styles.dentro}>
        <p>
          {cookies.texto} <a href="/cookies">{cookies.link}</a>
        </p>
        <div className={styles.acoes}>
          <button
            ref={botao}
            className="btn btn-pri"
            type="button"
            onClick={() => gravarEscolha({ essenciais: true, analise: false })}
          >
            {cookies.entendi}
          </button>
        </div>
      </div>
    </div>
  );
}
