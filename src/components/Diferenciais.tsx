import { diferenciais } from "@/content/textos";
import { Icone } from "./Icones";
import styles from "./Diferenciais.module.css";

export function Diferenciais() {
  return (
    <div className={styles.difs}>
      <div className="wrap">
        <ul aria-label="Diferenciais">
          {diferenciais.map((d) => (
            <li key={d.titulo} className="camadas-canto">
              <span className="ico-box">
                <Icone nome={d.icone} />
              </span>
              <h2 className="h4">{d.titulo}</h2>
              <p>{d.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
