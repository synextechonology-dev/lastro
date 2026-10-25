import { site } from "@/content/site";
import { Icone } from "./Icones";
import styles from "./Topbar.module.css";

export function Topbar() {
  return (
    <div className={`${styles.topbar} escuro`}>
      <div className="wrap">
        <ul data-pendente="Endereço, telefone e e-mail fictícios">
          <li>
            <Icone nome="pin" />
            {site.endereco} · {site.cidade}
          </li>
          <li>
            <Icone nome="fone" />
            {site.telefone}
          </li>
          <li className={styles.soDesk}>
            <Icone nome="mail" />
            {site.email}
          </li>
        </ul>
        <ul>
          <li className={styles.soDesk}>
            <Icone nome="relogio" />
            {site.horarioCurto}
          </li>
          <li>
            <span className="selo-conceito">{site.selos.conceito}</span>
          </li>
          <li>
            <a href={site.instagram} aria-label="Instagram da Lastro">
              <Icone nome="insta" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
