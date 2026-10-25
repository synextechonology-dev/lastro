import { depoimento } from "@/content/depoimento";
import { site } from "@/content/site";
import { segmentos } from "@/content/servicos";
import { secaoDepoimento } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { Icone } from "./Icones";
import styles from "./Depoimento.module.css";

export function Depoimento() {
  return (
    <section className={`${styles.depo} claro`} aria-labelledby="titulo-depo">
      <div className="wrap">
        <div className="sec-head center">
          <span className="selo-conceito">{site.selos.depoimento}</span>
          <h2 className="h2" id="titulo-depo">
            <Enfase texto={secaoDepoimento.titulo} />
          </h2>
        </div>
        <figure data-pendente="Depoimento e avatares fictícios">
          <svg className={styles.aspas} viewBox="0 0 40 40" aria-hidden="true">
            <path
              fill="currentColor"
              d="M8 30c-1.7-2-2.5-4.3-2.5-7 0-5.6 3.6-10.3 9.6-13l1.5 2.3c-3.6 1.9-5.6 4.4-6 7.4 3.1 0 5.2 2 5.2 5 0 3-2.2 5.2-5.1 5.2-1 0-1.9.1-2.7.1zm17 0c-1.7-2-2.5-4.3-2.5-7 0-5.6 3.6-10.3 9.6-13l1.5 2.3c-3.6 1.9-5.6 4.4-6 7.4 3.1 0 5.2 2 5.2 5 0 3-2.2 5.2-5.1 5.2-1 0-1.9.1-2.7.1z"
            />
          </svg>
          <blockquote>
            <p>{depoimento.texto}</p>
          </blockquote>
          <div className={styles.avatares} aria-hidden="true">
            {depoimento.avatares.map((a) => (
              <span
                key={a.iniciais + a.tom}
                className={`${styles.av} ${a.tom === "g" ? styles.g : styles.p}`}
              >
                {a.iniciais}
              </span>
            ))}
          </div>
          <figcaption>
            <b>{depoimento.autor}</b>
            <span>{depoimento.detalhe}</span>
          </figcaption>
        </figure>
        <div className={styles.segmentos}>
          <p className="label">{secaoDepoimento.segmentos}</p>
          <ul>
            {segmentos.map((s) => (
              <li key={s.rotulo}>
                <Icone nome={s.icone} />
                {s.rotulo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
