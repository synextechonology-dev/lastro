"use client";

import { useEffect, useState } from "react";
import { menu, mensagemPadrao, site } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Icone } from "./Icones";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={`${styles.header} ${rolou ? styles.rolou : ""} escuro`}
      id="topo"
    >
      <div className="wrap">
        <Logo href="/#inicio" rotulo={`${site.nomeCompleto}, início`} />
        <nav className={styles.nav} aria-label="Principal">
          <ul>
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className={`btn btn-sec ${styles.btnCab}`}
          href={linkWhatsApp(mensagemPadrao)}
          target="_blank"
          rel="noopener"
        >
          <Icone nome="zap" />
          Falar no WhatsApp
        </a>
        <button
          className={styles.menuBtn}
          type="button"
          aria-expanded={aberto}
          aria-controls="painel"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          <Icone nome={aberto ? "x" : "menu"} />
        </button>
      </div>
      <div
        className={styles.painel}
        id="painel"
        hidden={!aberto}
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setAberto(false);
        }}
      >
        <div className="wrap">
          <ul>
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.rotulo}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
