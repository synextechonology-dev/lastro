import { processo } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { TracoDesenhado } from "./efeitos/TracoDesenhado";
import styles from "./ComoFunciona.module.css";

export function ComoFunciona() {
  return (
    <section
      className={`${styles.processo} claro`}
      id="como-funciona"
      aria-labelledby="titulo-proc"
    >
      <div className="wrap">
        <div className={styles.top}>
          <div className="sec-head">
            <p className="label">{processo.rotulo}</p>
            <h2 className="h2" id="titulo-proc">
              <Enfase texto={processo.titulo} />
            </h2>
            <p>{processo.texto}</p>
          </div>
          <TracoDesenhado
            alt={processo.graficoAlt}
            legenda={processo.graficoLegenda}
          />
        </div>
        <ol className={styles.passos}>
          {processo.passos.map((p, i) => (
            <li key={p.titulo} className={styles.passo}>
              <span className={styles.num} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="h4">{p.titulo}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
