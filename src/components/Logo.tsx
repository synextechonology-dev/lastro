import styles from "./Logo.module.css";

export function SimboloLogo({ cor = "currentColor" }: { cor?: string }) {
  return (
    <svg viewBox="0 0 100 88" aria-hidden="true" style={{ color: cor }}>
      <rect x="0" y="0" width="10" height="70" fill="currentColor" />
      <rect x="0" y="0" width="50" height="13" fill="currentColor" />
      <rect x="0" y="34" width="72" height="13" fill="currentColor" />
      <rect x="0" y="68" width="100" height="20" fill="#D4A84B" />
    </svg>
  );
}

export function Logo({ href, rotulo }: { href: string; rotulo: string }) {
  return (
    <a className={styles.logo} href={href} aria-label={rotulo}>
      <SimboloLogo />
      <span>
        <b>Lastro</b>
        <small>CONTABILIDADE</small>
      </span>
    </a>
  );
}
