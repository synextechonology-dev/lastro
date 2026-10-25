import type { Metadata } from "next";
import { PaginaLegal, SecaoLegal, TabelaLegal, Destaque } from "@/components/PaginaLegal";
import { PreferenciasCookies } from "@/components/PreferenciasCookies";
import styles from "./cookies.module.css";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Quais cookies a Lastro Contabilidade usa hoje: só o essencial.",
};

const indice = [
  { id: "o-que-sao", titulo: "O que são cookies" },
  { id: "o-que-usamos", titulo: "O que o site usa hoje" },
  { id: "como-apagar", titulo: "Como apagar" },
  { id: "no-futuro", titulo: "Se um dia usarmos ferramentas de análise" },
];

export default function Cookies() {
  return (
    <PaginaLegal
      titulo="Política de cookies"
      indice={indice}
      resumo={
        <>
          <p>
            <strong>Em resumo:</strong> este site usa só o essencial para funcionar.
          </p>
          <p>Hoje não usamos cookies de análise nem de publicidade.</p>
        </>
      }
    >
      <SecaoLegal id="o-que-sao" titulo="1. O que são cookies">
        <p>
          Cookies são pequenos arquivos que um site guarda no seu navegador. O armazenamento
          local é uma tecnologia parecida, com a mesma função.
        </p>
        <p>Eles servem para o site lembrar de algo, como uma escolha que você fez.</p>
      </SecaoLegal>

      <SecaoLegal id="o-que-usamos" titulo="2. O que o site usa hoje">
        <TabelaLegal
          legenda="Cookies e armazenamento local usados pelo site"
          colunas={["Nome", "Tipo", "Para quê", "Duração"]}
        >
          <tr>
            <td>
              <code className={styles.codigo}>lastro-cookies</code>
            </td>
            <td>Armazenamento local · essencial</td>
            <td>Guarda a sua escolha sobre o aviso de cookies.</td>
            <td>Até você limpar o navegador.</td>
          </tr>
        </TabelaLegal>
        <Destaque>Hoje não usamos cookies de análise nem de publicidade.</Destaque>
        <p>
          Se você quiser ver o aviso de novo, use o botão abaixo.{" "}
          <PreferenciasCookies className={styles.botaoLink}>
            Abrir preferências de cookies
          </PreferenciasCookies>
        </p>
      </SecaoLegal>

      <SecaoLegal id="como-apagar" titulo="3. Como apagar">
        <p>Você pode apagar o que o site guardou a qualquer momento, pelo navegador:</p>
        <ol>
          <li>Abra as configurações do navegador.</li>
          <li>Procure por “privacidade” ou “histórico”.</li>
          <li>Escolha limpar dados de navegação.</li>
          <li>Marque “cookies e dados de sites” e confirme.</li>
        </ol>
        <p>Depois disso, o aviso de cookies aparece de novo na sua próxima visita.</p>
      </SecaoLegal>

      <SecaoLegal id="no-futuro" titulo="4. Se um dia usarmos ferramentas de análise">
        <p>
          Se isso acontecer, elas só serão ativadas depois do seu aceite. Esta página será
          atualizada antes.
        </p>
      </SecaoLegal>
    </PaginaLegal>
  );
}
