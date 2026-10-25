import { BarraWhatsApp } from "@/components/BarraWhatsApp";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Contato } from "@/components/Contato";
import { Depoimento } from "@/components/Depoimento";
import { Diferenciais } from "@/components/Diferenciais";
import { Duvidas } from "@/components/Duvidas";
import { Equipe } from "@/components/Equipe";
import { FaixaCta } from "@/components/FaixaCta";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OndeEstamos } from "@/components/OndeEstamos";
import { Planos } from "@/components/Planos";
import { Prazos } from "@/components/Prazos";
import { Rodape } from "@/components/Rodape";
import { Servicos } from "@/components/Servicos";
import { Topbar } from "@/components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <main id="inicio">
        <Hero />
        <Diferenciais />
        <Servicos />
        <FaixaCta />
        <ComoFunciona />
        <Planos />
        <Prazos />
        <Equipe />
        <Depoimento />
        <Duvidas />
        <Contato />
        <OndeEstamos />
      </main>
      <Rodape />
      <BarraWhatsApp />
    </>
  );
}
