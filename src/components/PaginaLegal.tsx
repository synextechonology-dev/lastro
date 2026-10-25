import type { ReactNode } from "react";
import { legal } from "@/content/legal";
import { Header } from "./Header";
import { Rodape } from "./Rodape";
import { Topbar } from "./Topbar";
import styles from "./PaginaLegal.module.css";

type ItemIndice = { id: string; titulo: string };

/** Moldura das páginas de privacidade e cookies: cabeçalho, índice, texto e rodapé. */
export function PaginaLegal({
  titulo,
  resumo,
  indice,
  children,
}: {
  titulo: string;
  resumo: ReactNode;
  indice: ItemIndice[];
  children: ReactNode;
}) {
  return (
    <>
      <Topbar />
      <Header />
      <main id="inicio">
        <div className={`${styles.pagina} claro`}>
          <div className="wrap">
            <article className={styles.artigo}>
              <header className={styles.topo}>
                <span className="selo-conceito">Projeto conceito · escritório fictício</span>
                <h1>{titulo}</h1>
                <p className={styles.data}>
                  Última atualização: {legal.ultimaAtualizacao}
                </p>
                <div className={styles.resumo}>{resumo}</div>
              </header>
              <nav className={styles.indice} aria-label="Neste documento">
                <p className="label">Neste documento</p>
                <ol>
                  {indice.map((i) => (
                    <li key={i.id}>
                      <a href={`#${i.id}`}>{i.titulo}</a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className={styles.texto}>{children}</div>
            </article>
          </div>
        </div>
      </main>
      <Rodape />
    </>
  );
}

/** Uma seção do documento, com título H2 e âncora. */
export function SecaoLegal({
  id,
  titulo,
  children,
}: {
  id: string;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`t-${id}`} className={styles.secao}>
      <h2 id={`t-${id}`}>{titulo}</h2>
      {children}
    </section>
  );
}

/** Frase de destaque dentro de uma seção. */
export function Destaque({ children }: { children: ReactNode }) {
  return <p className={styles.destaque}>{children}</p>;
}

/** Tabela com rolagem horizontal em telas estreitas. */
export function TabelaLegal({
  legenda,
  colunas,
  children,
}: {
  legenda: string;
  colunas: string[];
  children: ReactNode;
}) {
  return (
    <div className={styles.tabelaWrap} tabIndex={0} role="region" aria-label={legenda}>
      <table className={styles.tabela}>
        <caption className="sr-only">{legenda}</caption>
        <thead>
          <tr>
            {colunas.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
