import type { Metadata } from "next";
import { Destaque, PaginaLegal, SecaoLegal, TabelaLegal } from "@/components/PaginaLegal";
import { Pendente } from "@/components/Pendente";
import { legal } from "@/content/legal";
import { site } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a Lastro Contabilidade trata os seus dados pessoais, em português simples.",
};

const indice = [
  { id: "quem-somos", titulo: "Quem somos" },
  { id: "que-dados", titulo: "Que dados tratamos" },
  { id: "o-que-nao-fazemos", titulo: "O que NÃO fazemos" },
  { id: "compartilhamento", titulo: "Com quem os dados podem ser compartilhados" },
  { id: "tempo-de-guarda", titulo: "Por quanto tempo guardamos" },
  { id: "seus-direitos", titulo: "Seus direitos" },
  { id: "seguranca", titulo: "Segurança" },
  { id: "criancas", titulo: "Crianças" },
  { id: "mudancas", titulo: "Mudanças nesta política" },
  { id: "fale-com-a-gente", titulo: "Fale com a gente" },
];

const pendenteJuridico = "Conferir com o jurídico";

export default function Privacidade() {
  return (
    <PaginaLegal
      titulo="Política de privacidade"
      indice={indice}
      resumo={
        <>
          <p>
            <strong>Em resumo:</strong> este site não guarda o que você digita no formulário.
          </p>
          <p>
            Os dados só montam uma mensagem. Ela só chega até nós se você abrir a conversa no
            WhatsApp e enviar.
          </p>
          <p>Não usamos ferramentas de análise, anúncios nem cookies de terceiros.</p>
        </>
      }
    >
      <SecaoLegal id="quem-somos" titulo="1. Quem somos">
        <p>
          O site é da{" "}
          <Pendente nota="Dado fictício">
            <strong>{legal.razaoSocial}</strong>
          </Pendente>
          , CNPJ <Pendente nota="Dado fictício">{legal.cnpj}</Pendente>, com sede em{" "}
          {legal.endereco}.
        </p>
        <p>
          Somos a responsável pelos seus dados neste site. A lei chama isso de{" "}
          <strong>controlador</strong>.
        </p>
        <p>
          Para falar sobre privacidade, escreva para{" "}
          <Pendente nota="Dado fictício">
            <a href={`mailto:${legal.canalPrivacidade}`}>{legal.canalPrivacidade}</a>
          </Pendente>
          .
        </p>
        <p>
          <Pendente nota="Encarregado pendente">
            {legal.encarregado
              ? `Encarregado pelo tratamento de dados: ${legal.encarregado}.`
              : "Encarregado pelo tratamento de dados: ainda não indicado."}
          </Pendente>
        </p>
      </SecaoLegal>

      <SecaoLegal id="que-dados" titulo="2. Que dados tratamos">
        <p>Esta tabela mostra tudo o que acontece com os seus dados neste site.</p>
        <TabelaLegal
          legenda="Dados tratados neste site"
          colunas={["Dado", "De onde vem", "Para quê", "Base legal", "Por quanto tempo"]}
        >
          <tr>
            <td>
              Nome, caso e empresa ou CNPJ (formulário de contato)
              <br />
              Só o nome e o caso são obrigatórios.
            </td>
            <td>De você, quando preenche o formulário.</td>
            <td>Responder o seu contato e preparar uma proposta.</td>
            <td>
              Procedimentos preliminares a pedido do titular (art. 7º, V, da LGPD).
            </td>
            <td>
              O site não envia nem guarda esses dados. Se você enviar pelo WhatsApp, vale o
              prazo da conversa (veja a seção 5).
            </td>
          </tr>
          <tr>
            <td>Mensagem e conversa no WhatsApp</td>
            <td>De você, quando abre a conversa e envia a mensagem.</td>
            <td>Atender você e preparar uma proposta.</td>
            <td>
              Procedimentos preliminares a pedido do titular (art. 7º, V, da LGPD).
            </td>
            <td>Enquanto durar o atendimento e o contrato, e depois pelo prazo exigido por lei.</td>
          </tr>
          <tr>
            <td>Sua escolha no aviso de cookies (armazenamento local do navegador)</td>
            <td>Do seu navegador, quando você toca em “Entendi”.</td>
            <td>Lembrar que você já viu o aviso.</td>
            <td>É essencial para o site funcionar. Não identifica você.</td>
            <td>Até você limpar os dados do navegador.</td>
          </tr>
          <tr>
            <td>Registros de acesso: IP, data, hora e navegador</td>
            <td>Da hospedagem ({legal.hospedagem}), de forma automática.</td>
            <td>Segurança e funcionamento do site.</td>
            <td>
              <Pendente nota={pendenteJuridico}>A confirmar com o jurídico.</Pendente>
            </td>
            <td>
              <Pendente nota="Prazo pendente">Conforme a política da hospedagem.</Pendente>
            </td>
          </tr>
        </TabelaLegal>
        <p>
          Os botões “Falar no WhatsApp” e “Falar sobre isso” só abrem o WhatsApp com uma mensagem
          pronta. Nada é enviado até você tocar em enviar.
        </p>
      </SecaoLegal>

      <SecaoLegal id="o-que-nao-fazemos" titulo="3. O que NÃO fazemos">
        <ul>
          <li>Não vendemos os seus dados.</li>
          <li>Não usamos os seus dados para anúncios.</li>
          <li>Não guardamos o que você escreve no formulário. Ele não fica salvo no site.</li>
          <li>
            Não usamos ferramentas de análise, pixel de anúncios nem cookies de terceiros.
          </li>
          <li>
            Não chamamos o Google nem outros terceiros para carregar fontes ou vídeo. Tudo vem do
            próprio site.
          </li>
        </ul>
      </SecaoLegal>

      <SecaoLegal id="compartilhamento" titulo="4. Com quem os dados podem ser compartilhados">
        <ul>
          <li>
            <strong>WhatsApp (Meta):</strong> se você abrir a conversa, a mensagem passa pelo
            WhatsApp. Ele segue a política dele.
          </li>
          <li>
            <strong>{legal.hospedagem} (hospedagem):</strong> guarda os registros de acesso do
            site.
          </li>
          <li>
            <strong>Autoridades:</strong> só quando a lei exigir.
          </li>
        </ul>
        <p>
          O site tem links para outros serviços, como o Instagram e o Google Maps. Eles só abrem
          quando você clica. A partir dali, valem as políticas deles.
        </p>
      </SecaoLegal>

      <SecaoLegal id="tempo-de-guarda" titulo="5. Por quanto tempo guardamos">
        <ul>
          <li>
            <strong>Conversas:</strong> enquanto durar o atendimento e o contrato. Depois,
            pelo prazo que a lei exigir.
          </li>
          <li>
            <strong>Registros de acesso:</strong> conforme a política da hospedagem.
          </li>
          <li>
            <strong>Formulário:</strong> não guardamos, porque o site não recebe esses dados.
          </li>
        </ul>
      </SecaoLegal>

      <SecaoLegal id="seus-direitos" titulo="6. Seus direitos">
        <p>Pela LGPD (art. 18), você pode pedir para:</p>
        <ul>
          <li>confirmar se tratamos dados seus;</li>
          <li>acessar os seus dados;</li>
          <li>corrigir dados incompletos ou errados;</li>
          <li>anonimizar, bloquear ou apagar dados desnecessários ou tratados fora da lei;</li>
          <li>levar os seus dados para outro fornecedor (portabilidade);</li>
          <li>saber com quem compartilhamos os seus dados;</li>
          <li>revogar um consentimento, quando ele existir;</li>
          <li>reclamar à ANPD (Autoridade Nacional de Proteção de Dados).</li>
        </ul>
        <p>
          Para pedir, escreva para{" "}
          <Pendente nota="Dado fictício">
            <a href={`mailto:${legal.canalPrivacidade}`}>{legal.canalPrivacidade}</a>
          </Pendente>
          . Respondemos em até {legal.prazoResposta} dias.
        </p>
      </SecaoLegal>

      <SecaoLegal id="seguranca" titulo="7. Segurança">
        <p>
          O site usa HTTPS. Isso protege o que passa entre o seu navegador e o site.
        </p>
        <p>O site não tem banco de dados. Por isso, não há nada seu guardado nele.</p>
      </SecaoLegal>

      <SecaoLegal id="criancas" titulo="8. Crianças">
        <p>O site é voltado a empresas e a adultos. Não pedimos dados de crianças.</p>
      </SecaoLegal>

      <SecaoLegal id="mudancas" titulo="9. Mudanças nesta política">
        <p>
          Podemos mudar esta política. Quando mudar, a data abaixo muda também.
        </p>
        <Destaque>Última atualização: {legal.ultimaAtualizacao}.</Destaque>
      </SecaoLegal>

      <SecaoLegal id="fale-com-a-gente" titulo="10. Fale com a gente">
        <ul>
          <li>
            Privacidade:{" "}
            <Pendente nota="Dado fictício">
              <a href={`mailto:${legal.canalPrivacidade}`}>{legal.canalPrivacidade}</a>
            </Pendente>
          </li>
          <li>
            WhatsApp:{" "}
            <a
              href={linkWhatsApp("Olá! Tenho uma dúvida sobre privacidade.")}
              target="_blank"
              rel="noopener"
            >
              {legal.whatsapp}
            </a>
          </li>
          <li>E-mail geral: {site.email}</li>
        </ul>
      </SecaoLegal>
    </PaginaLegal>
  );
}
