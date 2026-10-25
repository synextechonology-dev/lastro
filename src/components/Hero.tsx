import { hero } from "@/content/textos";
import { Enfase } from "@/lib/Enfase";
import { linkWhatsApp } from "@/lib/whatsapp";
import { BotaoElastico } from "./efeitos/BotaoElastico";
import { HeroVideo } from "./HeroVideo";
import { Icone } from "./Icones";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`${styles.hero} escuro`} aria-labelledby="titulo-hero">
      <div className={`wrap ${styles.conteudo}`}>
        <div className={styles.txt}>
          <p className="label">{hero.rotulo}</p>
          <h1 id="titulo-hero">
            <Enfase texto={hero.titulo} />
          </h1>
          <p className={`lead ${styles.lead}`}>{hero.texto}</p>
          <div className={styles.acoes}>
            <BotaoElastico
              className="btn btn-pri"
              href={linkWhatsApp(hero.botaoPrincipal.mensagem)}
              target="_blank"
              rel="noopener"
            >
              {hero.botaoPrincipal.rotulo}
            </BotaoElastico>
            <BotaoElastico
              className="btn btn-sec"
              href={linkWhatsApp(hero.botaoSecundario.mensagem)}
              target="_blank"
              rel="noopener"
            >
              {hero.botaoSecundario.rotulo}
            </BotaoElastico>
          </div>
          <p className={styles.nota}>
            {hero.notas.map((nota) => (
              <span key={nota}>
                <Icone nome="check" />
                {nota}
              </span>
            ))}
          </p>
        </div>
        <div className={styles.midia}>
          <figure
            className={styles.foto}
            data-pendente="Vídeo: cortar os 3 s com texto gravado"
          >
            <HeroVideo rotulo={hero.videoAlt} />
          </figure>
        </div>
      </div>
    </section>
  );
}
