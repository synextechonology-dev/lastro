import { duvidas } from "@/content/duvidas";
import { secaoDuvidas } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Icone } from "./Icones";
import styles from "./Duvidas.module.css";

export function Duvidas() {
  return (
    <section
      className={`${styles.faq} claro`}
      id="duvidas"
      aria-labelledby="titulo-faq"
    >
      <div className="wrap">
        <div className={styles.dentro}>
          <div className="sec-head">
            <p className="label">{secaoDuvidas.rotulo}</p>
            <h2 className="h2" id="titulo-faq">
              <Enfase texto={secaoDuvidas.titulo} />
            </h2>
            <p>{secaoDuvidas.texto}</p>
            <div className={styles.cta}>
              <a
                className="link"
                href={linkWhatsApp(secaoDuvidas.mensagem)}
                target="_blank"
                rel="noopener"
              >
                {secaoDuvidas.link} <span className="seta">→</span>
              </a>
            </div>
          </div>
          <div
            className={styles.lista}
            data-pendente="Conferir as respostas com o contador do escritório"
          >
            {duvidas.map((d) => (
              <details key={d.pergunta}>
                <summary>
                  {d.pergunta}
                  <span className={styles.mais} aria-hidden="true">
                    <Icone nome="mais" />
                  </span>
                </summary>
                <p>{d.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
