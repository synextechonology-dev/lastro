import { faixaCta } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Icone } from "./Icones";
import styles from "./FaixaCta.module.css";

export function FaixaCta() {
  return (
    <section className={`${styles.faixa} escuro`} aria-labelledby="titulo-faixa">
      <div className="wrap">
        <div>
          <h2 id="titulo-faixa">
            <Enfase texto={faixaCta.titulo} />
          </h2>
          <p>{faixaCta.texto}</p>
        </div>
        <a
          className="btn btn-pri"
          href={linkWhatsApp(faixaCta.mensagem)}
          target="_blank"
          rel="noopener"
        >
          <Icone nome="zap" />
          {faixaCta.botao}
        </a>
      </div>
    </section>
  );
}
