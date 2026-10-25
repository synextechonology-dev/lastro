import Link from "next/link";
import { site } from "@/content/site";
import { rodape } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { Logo } from "./Logo";
import { PreferenciasCookies } from "./PreferenciasCookies";
import styles from "./Rodape.module.css";

export function Rodape() {
  return (
    <footer className={`${styles.rodape} escuro`}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <Logo href="/#inicio" rotulo={`${site.nomeCompleto}, voltar ao início`} />
            <p className={styles.tag}>
              <Enfase texto={rodape.tag} />
            </p>
          </div>
          <nav aria-label="Rodapé">
            <h2>Navegação</h2>
            <ul>
              {rodape.navegacao.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.rotulo}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2>Serviços</h2>
            <ul>
              {rodape.servicos.map((s) => (
                <li key={s}>
                  <Link href="/#servicos">{s}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contato</h2>
            <ul data-pendente="Dados fictícios">
              <li>{site.telefone}</li>
              <li>{site.email}</li>
              <li>{site.endereco}</li>
              <li>{site.horarioCurto}</li>
            </ul>
          </div>
        </div>
        <div className={styles.final}>
          <span>{site.copyright}</span>
          <span className={styles.legais}>
            <a href="/privacidade">{rodape.privacidade}</a>
            <a href="/cookies">{rodape.cookies}</a>
            <PreferenciasCookies>{rodape.preferencias}</PreferenciasCookies>
          </span>
        </div>
      </div>
    </footer>
  );
}
