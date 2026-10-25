import { equipe } from "@/content/equipe";
import { site } from "@/content/site";
import { secaoEquipe } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import styles from "./Equipe.module.css";

export function Equipe() {
  return (
    <section
      className={`${styles.equipe} escuro`}
      id="equipe"
      aria-labelledby="titulo-equipe"
    >
      <div className="wrap">
        <div className="sec-head">
          <p className="label">{secaoEquipe.rotulo}</p>
          <h2 className="h2" id="titulo-equipe">
            <Enfase texto={secaoEquipe.titulo} />
          </h2>
          <p>{secaoEquipe.texto}</p>
        </div>
        <ul className={styles.grid} data-pendente="Equipe e CRC fictícios">
          {equipe.map((p) => (
            <li key={p.nome} className={`${styles.pessoa} camadas-canto`}>
              <span className={styles.avatar} aria-hidden="true">
                {p.iniciais}
              </span>
              <div>
                <h3>{p.nome}</h3>
                <p className={styles.cargo}>{p.cargo}</p>
              </div>
              <p>{p.texto}</p>
              <ul aria-label="Assuntos">
                {p.assuntos.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p className={styles.reg}>{p.registro}</p>
            </li>
          ))}
        </ul>
        <p className={`nota-conceito ${styles.nota}`}>
          <span className="selo-conceito">{site.selos.equipe}</span>
        </p>
      </div>
    </section>
  );
}
