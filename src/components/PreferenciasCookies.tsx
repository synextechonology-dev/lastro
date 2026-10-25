"use client";

import type { ReactNode } from "react";
import { reabrirAviso } from "@/lib/consentimento";

/** Botão com cara de link que reabre o aviso de cookies. */
export function PreferenciasCookies({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button type="button" className={className} onClick={reabrirAviso}>
      {children}
    </button>
  );
}
