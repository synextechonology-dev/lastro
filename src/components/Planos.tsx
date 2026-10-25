import { planos, relatorio, seloMaisEscolhido } from "@/content/planos";
import { site } from "@/content/site";
import { secaoPlanos } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { linkWhatsApp } from "@/lib/whatsapp";
import { GraficoBarras } from "./efeitos/GraficoBarras";
import { Odometro } from "./efeitos/Odometro";
import { Icone } from "./Icones";
import styles from "./Planos.module.css";

export function Planos() {
  return (
    <section
      className={`${styles.planos} escuro`}
      id="planos"
      aria-labelledby="titulo-planos"
    >
      <div className="wrap">
        <div className={styles.top}>
          <div className="sec-head">
            <p className="label">{secaoPlanos.rotulo}</p>
            <h2 className="h2" id="titulo-planos">
              <Enfase texto={secaoPlanos.titulo} />
            </h2>
            <p>{secaoPlanos.texto}</p>
          </div>
          <figure
            className={styles.graf}
            aria-labelledby="graf-titulo"
            data-pendente="Dados do gráfico fictícios"
          >
            <div className={styles.grafTop}>
              <b id="graf-titulo">{relatorio.titulo}</b>
              <span>{relatorio.unidade}</span>
            </div>
            <p className="sr-only">{relatorio.descricao}</p>
            <GraficoBarras dados={relatorio.dados} />
            <p className={styles.grafPe}>
              <i aria-hidden="true" />
              {relatorio.rodape}
            </p>
          </figure>
        </div>
        <ul className={styles.grid}>
          {planos.map((p) => (
            <li key={p.id}>
              <article
                className={`${styles.plano} ${p.destaque ? styles.destaque : ""} camadas-canto`}
                aria-labelledby={p.id}
              >
                {p.destaque && <span className={styles.selo}>{seloMaisEscolhido}</span>}
                <header>
                  <h3 id={p.id}>{p.nome}</h3>
                  <span>{p.regime}</span>
                </header>
                <p
                  className={styles.preco}
                  data-pendente={p.preco ? "Preço de exemplo" : undefined}
                >
                  {p.preco ? (
                    <>
                      <small>R$</small>
                      <Odometro valor={p.preco} />
                      <small>/mês</small>
                    </>
                  ) : (
                    <strong className={styles.sob}>{p.precoTexto}</strong>
                  )}
                </p>
                <ul>
                  {p.itens.map((item) => (
                    <li key={item}>
                      <Icone nome="check" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn ${p.destaque ? "btn-pri" : "btn-sec"}`}
                  href={linkWhatsApp(p.mensagem)}
                  target="_blank"
                  rel="noopener"
                >
                  {p.botao}
                </a>
              </article>
            </li>
          ))}
        </ul>
        <p className="nota-conceito">
          <span className="selo-conceito">{site.selos.valores}</span>
        </p>
      </div>
    </section>
  );
}
