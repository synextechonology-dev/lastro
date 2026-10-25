import { site } from "@/content/site";
import { secaoOnde } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { Icone } from "./Icones";
import { SimboloLogo } from "./Logo";
import styles from "./OndeEstamos.module.css";

const linhas = [
  { icone: "pin", chave: secaoOnde.endereco, valor: site.enderecoCompleto },
  { icone: "relogio", chave: secaoOnde.horario, valor: site.horario },
  { icone: "fone", chave: secaoOnde.telefone, valor: site.telefone },
  { icone: "mail", chave: secaoOnde.email, valor: site.email },
] as const;

export function OndeEstamos() {
  return (
    <section
      className={`${styles.onde} claro`}
      id="onde"
      aria-labelledby="titulo-onde"
    >
      <div className="wrap">
        <div className="sec-head">
          <p className="label">{secaoOnde.rotulo}</p>
          <h2 className="h2" id="titulo-onde">
            <Enfase texto={secaoOnde.titulo} />
          </h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <dl data-pendente="Endereço, telefone e e-mail fictícios">
              {linhas.map((l) => (
                <div key={l.chave}>
                  <dt>
                    <span className="ico-box">
                      <Icone nome={l.icone} />
                    </span>
                  </dt>
                  <dd className={styles.k}>{l.chave}</dd>
                  <dd className={styles.v}>{l.valor}</dd>
                </div>
              ))}
            </dl>
            <a
              className="btn btn-tinta"
              href={site.mapaUrl}
              target="_blank"
              rel="noopener"
            >
              <Icone nome="pin" />
              {secaoOnde.comoChegar}
            </a>
          </div>
          <div
            className={styles.mapa}
            role="img"
            aria-label={secaoOnde.mapaAlt}
            data-pendente="Mapa ilustrativo: trocar pelo Google Maps"
          >
            <div className={styles.pin}>
              <span>
                <SimboloLogo cor="var(--gelo)" />
                {site.nomeCompleto}
              </span>
              <i />
            </div>
            <small>{secaoOnde.mapaNota}</small>
          </div>
        </div>
      </div>
    </section>
  );
}
