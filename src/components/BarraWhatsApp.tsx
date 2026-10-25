import { mensagemPadrao } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Icone } from "./Icones";
import styles from "./BarraWhatsApp.module.css";

export function BarraWhatsApp() {
  return (
    <div className={`${styles.barra} escuro`} id="barra-zap">
      <a
        className="btn btn-pri"
        href={linkWhatsApp(mensagemPadrao)}
        target="_blank"
        rel="noopener"
      >
        <Icone nome="zap" />
        Falar no WhatsApp
      </a>
    </div>
  );
}
