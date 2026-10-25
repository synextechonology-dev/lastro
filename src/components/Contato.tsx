import { secaoContato } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { FormularioContato } from "./FormularioContato";
import styles from "./Contato.module.css";

export function Contato() {
  return (
    <section
      className={`${styles.contato} escuro`}
      id="contato"
      aria-labelledby="titulo-contato"
    >
      <div className="wrap">
        <div className="sec-head">
          <p className="label">{secaoContato.rotulo}</p>
          <h2 className="h2" id="titulo-contato">
            <Enfase texto={secaoContato.titulo} />
          </h2>
          <p>{secaoContato.texto}</p>
        </div>
        <FormularioContato />
        <p className={styles.alt}>
          {secaoContato.alternativa} <a href="#onde">{secaoContato.alternativaLink}</a>.
        </p>
      </div>
    </section>
  );
}
