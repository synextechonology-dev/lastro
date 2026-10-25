"use client";

import { useEffect } from "react";

/** Liga o modo revisão (`?revisao=1`): marca `data-revisao` no <html>. */
export function ModoRevisao() {
  useEffect(() => {
    const ligado = new URLSearchParams(window.location.search).get("revisao") === "1";
    document.documentElement.toggleAttribute("data-revisao", ligado);
    return () => document.documentElement.removeAttribute("data-revisao");
  }, []);
  return null;
}
