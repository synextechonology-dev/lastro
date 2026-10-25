"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { secaoContato } from "@/content/textos";
import { linkWhatsApp, mensagemContato } from "@/lib/whatsapp";
import { Icone } from "./Icones";
import styles from "./FormularioContato.module.css";

export function FormularioContato() {
  const [caso, setCaso] = useState("");
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [erros, setErros] = useState({ caso: false, nome: false });
  const [mensagem, setMensagem] = useState<string | null>(null);

  const casoRef = useRef<HTMLSelectElement>(null);
  const nomeRef = useRef<HTMLInputElement>(null);
  const resultadoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mensagem) resultadoRef.current?.scrollIntoView({ block: "nearest" });
  }, [mensagem]);

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const c = caso.trim();
    const n = nome.trim();
    setErros({ caso: !c, nome: !n });
    if (!c) return casoRef.current?.focus();
    if (!n) return nomeRef.current?.focus();
    setMensagem(mensagemContato(c, n, empresa.trim()));
  }

  return (
    <>
      <form className={styles.form} onSubmit={enviar} noValidate>
        <div className={`${styles.campo} ${erros.caso ? styles.erro : ""}`}>
          <label htmlFor="caso">{secaoContato.campoCaso}</label>
          <select
            ref={casoRef}
            id="caso"
            name="caso"
            value={caso}
            aria-describedby="e-caso"
            aria-invalid={erros.caso}
            onChange={(e) => {
              setCaso(e.target.value);
              setErros((x) => ({ ...x, caso: false }));
            }}
          >
            <option value="">{secaoContato.casoVazio}</option>
            {secaoContato.casos.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <p className={styles.msgErro} id="e-caso" hidden={!erros.caso}>
            <Icone nome="alerta" style={{ width: 16, height: 16 }} />
            {secaoContato.erroCaso}
          </p>
        </div>
        <div className={`${styles.campo} ${erros.nome ? styles.erro : ""}`}>
          <label htmlFor="nome">{secaoContato.campoNome}</label>
          <input
            ref={nomeRef}
            id="nome"
            name="nome"
            type="text"
            autoComplete="name"
            placeholder={secaoContato.nomeExemplo}
            value={nome}
            aria-describedby="e-nome"
            aria-invalid={erros.nome}
            onChange={(e) => {
              setNome(e.target.value);
              setErros((x) => ({ ...x, nome: false }));
            }}
          />
          <p className={styles.msgErro} id="e-nome" hidden={!erros.nome}>
            <Icone nome="alerta" style={{ width: 16, height: 16 }} />
            {secaoContato.erroNome}
          </p>
        </div>
        <div className={styles.campo}>
          <label htmlFor="empresa">
            {secaoContato.campoEmpresa} <span>{secaoContato.empresaOpcional}</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            placeholder={secaoContato.empresaExemplo}
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>
        <button className="btn btn-pri" type="submit">
          <Icone nome="zap" />
          {secaoContato.enviar}
        </button>
        <p className={styles.aviso}>
          {secaoContato.avisoPrivacidade}{" "}
          <a href="/privacidade">{secaoContato.avisoPrivacidadeLink}</a>.
        </p>
      </form>
      <div
        ref={resultadoRef}
        className={styles.resultado}
        hidden={mensagem === null}
        aria-live="polite"
      >
        <b>{secaoContato.prontaTitulo}</b>
        <pre>{mensagem}</pre>
        <p className={styles.avisoEnvio}>{secaoContato.avisoEnvio}</p>
        <div className={styles.acoes}>
          <a
            className="btn btn-pri"
            href={mensagem ? linkWhatsApp(mensagem) : "#"}
            target="_blank"
            rel="noopener"
          >
            <Icone nome="zap" />
            {secaoContato.abrirConversa}
          </a>
          <span className="selo-conceito">{site.selos.numero}</span>
        </div>
      </div>
    </>
  );
}
