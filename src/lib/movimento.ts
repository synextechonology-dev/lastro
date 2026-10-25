import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const CONSULTA = "(prefers-reduced-motion: reduce)";

function assinar(aoMudar: () => void) {
  const mq = window.matchMedia(CONSULTA);
  mq.addEventListener("change", aoMudar);
  return () => mq.removeEventListener("change", aoMudar);
}

/** true quando o visitante pediu menos movimento. No servidor é sempre false. */
export function useMovimentoReduzido(): boolean {
  return useSyncExternalStore(
    assinar,
    () => window.matchMedia(CONSULTA).matches,
    () => false,
  );
}

/**
 * Dispara uma vez, quando o elemento aparece na tela. Se o observador não
 * responder em 1,5 s, dispara mesmo assim (mesma regra da prévia).
 */
export function useAparecer<T extends Element>(limiar = 0.2) {
  const ref = useRef<T>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      const id = setTimeout(() => setVisivel(true), 0);
      return () => clearTimeout(id);
    }
    let respondeu = false;
    const obs = new IntersectionObserver(
      (itens) => {
        respondeu = true;
        if (itens[0].isIntersecting) {
          setVisivel(true);
          obs.disconnect();
        }
      },
      { threshold: limiar },
    );
    obs.observe(el);
    const limite = setTimeout(() => {
      if (!respondeu) setVisivel(true);
    }, 1500);
    return () => {
      obs.disconnect();
      clearTimeout(limite);
    };
  }, [limiar]);

  return [ref, visivel] as const;
}
