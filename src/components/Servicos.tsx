import { servicos, tambemAtendemos } from "@/content/servicos";
import { secaoServicos } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Icone } from "./Icones";
import styles from "./Servicos.module.css";

export function Servicos() {
  return (
    <section
      className={`${styles.servicos} claro`}
      id="servicos"
      aria-labelledby="titulo-serv"
    >
      <div className="wrap">
        <div className="sec-head">
          <p className="label">{secaoServicos.rotulo}</p>
          <h2 className="h2" id="titulo-serv">
            <Enfase texto={secaoServicos.titulo} />
          </h2>
          <p>{secaoServicos.texto}</p>
        </div>
        <ul className={styles.grid}>
          {servicos.map((s) => (
            <li key={s.titulo} className={`${styles.serv} camadas-canto`}>
              <span className="ico-box">
                <Icone nome={s.icone} />
              </span>
              <h3 className="h4">{s.titulo}</h3>
              <p>{s.texto}</p>
              <a
                className="link"
                href={linkWhatsApp(s.mensagem)}
                target="_blank"
                rel="noopener"
              >
                {secaoServicos.linkRotulo} <span className="seta">→</span>
              </a>
            </li>
          ))}
        </ul>
        <p className={styles.tambem}>
          <b>{secaoServicos.tambem}</b>
          {tambemAtendemos.map((t) => (
            <a
              key={t.titulo}
              className="link"
              href={linkWhatsApp(t.mensagem)}
              target="_blank"
              rel="noopener"
            >
              <Icone nome={t.icone} />
              {t.titulo}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
