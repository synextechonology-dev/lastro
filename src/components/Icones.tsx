import type { CSSProperties, ReactNode } from "react";

const caminhos = {
  zap: (
    <>
      <path d="M4.5 19.5l1.2-3.6A8 8 0 1 1 8.4 18.6z" />
      <path d="M9.2 8.6c.2 2.6 2.4 5 5.2 5.6l1-1.1-1.8-.9-.7.6c-1-.4-1.9-1.3-2.3-2.3l.6-.7-.9-1.8z" />
    </>
  ),
  cal: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4M9 14.5l2 2 4-4" />
    </>
  ),
  troca: <path d="M4 8h15M15.5 4.5L19 8l-3.5 3.5M20 16H5M8.5 12.5L5 16l3.5 3.5" />,
  porta: (
    <>
      <path d="M3 21h18M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17" />
      <path d="M6 21l7-2V5L7 3" />
      <path d="M11 12v.01" />
    </>
  ),
  pessoas: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 14.2c2.4 0 4 1.7 4 4.3" />
    </>
  ),
  cracha: (
    <>
      <rect x="4.5" y="4" width="15" height="17" rx="2.5" />
      <path d="M9.5 4V2.8h5V4" />
      <path d="M12 9.2l1.1 2.2 2.4.3-1.8 1.7.5 2.4-2.2-1.2-2.2 1.2.5-2.4-1.8-1.7 2.4-.3z" />
    </>
  ),
  saida: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4.5 4.5V19.5A1.5 1.5 0 0 1 17 21H7a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 7 3z" />
      <path d="M14 3v4.5h4.5M9 11.5h6M9 15h3" />
      <path d="M12.5 18.2c.8-.9 1.4-.9 1.8 0s1 .9 1.7 0" />
    </>
  ),
  saude: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  broto: (
    <>
      <path d="M12 21v-9" />
      <path d="M12 12c0-4 2.8-6.5 7-6.5 0 4-2.8 6.5-7 6.5z" />
      <path d="M12 14.5c0-3.2-2.3-5.5-6-5.5 0 3.2 2.3 5.5 6 5.5z" />
    </>
  ),
  loja: (
    <>
      <path d="M4 9.5V20h16V9.5M3 9.5l1.5-5h15L21 9.5H3z" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  maleta: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  fone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  nuvem: (
    <>
      <path d="M7 18.5h10a4 4 0 0 0 .6-8A6 6 0 0 0 6 11a3.8 3.8 0 0 0 1 7.5z" />
      <path d="M9.5 14l2 2 3.5-3.5" />
    </>
  ),
  insta: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7v.01" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  sino: (
    <>
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  mais: <path d="M12 5v14M5 12h14" />,
  alerta: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.5v.01" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type NomeIcone = keyof typeof caminhos;

export function Icone({
  nome,
  className = "",
  style,
}: {
  nome: NomeIcone | (string & {});
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={`ico ${className}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={style}
    >
      {caminhos[nome as NomeIcone]}
    </svg>
  );
}
