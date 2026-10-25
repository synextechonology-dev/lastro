import { prazos, prazosNota } from "@/content/prazos";
import { secaoPrazos } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { Icone } from "./Icones";
import styles from "./Prazos.module.css";

export function Prazos() {
  return (
    <section
      className={`${styles.prazos} claro`}
      id="prazos"
      aria-labelledby="titulo-prazos"
    >
      <div className="wrap">
        <div className="sec-head">
          <p className="label">{secaoPrazos.rotulo}</p>
          <h2 className="h2" id="titulo-prazos">
            <Enfase texto={secaoPrazos.titulo} />
          </h2>
          <p>{secaoPrazos.texto}</p>
        </div>
        <ul className={styles.grid} data-pendente="Conferir as datas antes de publicar">
          {prazos.map((p) => (
            <li key={p.rotulo} className={`${styles.prazo} camadas-canto`}>
              <p className="label">{p.rotulo}</p>
              <strong className={p.menor ? styles.menor : undefined}>{p.data}</strong>
              <p>{p.texto}</p>
            </li>
          ))}
        </ul>
        <div className={styles.nota}>
          <span>
            <Icone nome="sino" />
            {prazosNota.lembrete}
          </span>
          <small>{prazosNota.aviso}</small>
        </div>
      </div>
    </section>
  );
}
