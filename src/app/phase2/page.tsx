"use client";

import {
  ArrowRight,
  ArrowLeft,
  Desktop,
  LinuxLogo,
} from "@phosphor-icons/react";

import Warnings from "@/components/Warnings";
import Infos from "@/components/Infos";

export default function Phase2() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <Desktop size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            O Modelo Cliente Servidor
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          Este é um modelo em camadas que mostramos na secção anterior e orienta
          a comunicação pela Internet, o modelo cliente / servidor descreve como
          fazemos aplicações que utilizam o modelo.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Aplicações em rede
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          A Internet é uma vasta rede que contém muitos servidores que fornecem
          serviços como navegação na web e transferência de ficheiros. Quando se
          conecta a esses serviços, o dispositivo está a desempenhar o papel de
          cliente. Os clientes fazem solicitações e os servidores tratam e
          respondem a essas solicitações.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Servidores
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Um servidor é um computador numa rede que fornece um recurso que pode
          ser usado por qualquer estação cliente autorizada.
        </p>
        <Infos>
          Os servidores geralmente estão sempre ativos e conectados à Internet
          para que os utilizadores possam aceder aos seus recursos e serviços a
          qualquer momento.
        </Infos>
        <p>
          No modelo cliente / servidor, os servidores são as maquinas
          configuradas com as "regras". Elas detêm o poder e a autoridade para
          conceder ou negar qualquer pedido que recebam. Obviamente, não
          queremos que eles rejeitem todas as solicitações recebidas, mas a
          inclusão de autorizado na definição é importante.
        </p>
        <p>
          O nível de acesso que um servidor concede a qualquer cliente é uma
          consideração importante de segurança. Às vezes, as informações de um
          servidor são projetados para serem abertos e, portanto, o servidor
          responderá a qualquer solicitação que receber (neste caso, todos os
          clientes estão autorizados).
        </p>
        <p>
          Noutros casos, os dados podem ser confidenciais ou comercialmente
          valiosos, caso em que o servidor precisará garantir que a solicitação
          seja de uma fonte legítima. Do contrário, haveria o risco de expor os
          dados e, potencialmente, a rede a agentes mal-intencionados.
        </p>
        <Warnings>
          Lembre-se de proteger seus servidores com medidas de segurança
          adequadas para evitar acessos não autorizados.
        </Warnings>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <LinuxLogo size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Existem muitos tipos de servidores:
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            O tipo mais comum de servidor com o qual vamos interagir é um
            servidor da web; os servidores da web armazenam e fornecem as
            páginas da web que navegamos.
          </li>
          <li>
            Os servidores de e-mail direcionam o e-mail ao destinatário
            pretendido e, às vezes, filtram o spam.
          </li>
          <li>
            Os servidores de transferência de ficheiros fornecem arquivos aos
            utilizadores, como aqueles que fornecem as músicas que ouvimos no
            Spotify.
          </li>
        </ul>
        <p>
          Ao pensar em servidores, a maioria das pessoas pensa em pilhas enormes
          de dispositivos em depósitos, embora esses sejam, de fato, os quais
          rodam a maioria dos grandes serviços de Internet mencionados, e esses
          não são os únicos servidores que existem.
        </p>
        <p>
          As pessoas têm servidores pessoais em casa, onde podem armazenar
          ficheiros e compartilhá-los com outras pessoas, ou armazenar
          bibliotecas de mídia e reproduzi-las. As empresas também podem
          executar servidores para os seus funcionários, para aceder a trabalhos
          compartilhados ou para video-chamadas.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Clientes
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Um cliente é um computador ou dispositivo controlado por computador
          que fornece a um utilizador o acesso a uma rede.
        </p>
        <Infos>
          Os clientes podem ser computadores, smartphones, tablets ou qualquer
          dispositivo que se conecte a uma rede.
        </Infos>
        <p>
          Os clientes são dispositivos voltados para o utilizador que executam
          software para fazer solicitações aos servidores e interpretar ou
          exibir as respostas.
        </p>
        <p>
          Eles não detêm o poder e não podem forçar um servidor a responder a
          uma solicitação. Se o servidor exigir autenticação que o cliente não
          pode fornecer, os dados solicitados não serão enviados ao cliente.
        </p>
        <p>
          Os clientes nem sempre precisam estar ligados e devem ser capazes de
          inicializar e se conectar a um servidor a qualquer momento e é por
          isso que é útil ter servidores ligados o tempo todo.
        </p>
        <p>
          Alguns clientes são dispositivos de hardware dedicados, como por
          exemplo os radares de velocidade. Eles capturam fotos e números de
          placas de veículos e enviam uma solicitação a um servidor central para
          armazená-los e processá-los.
        </p>
        <Warnings>
          Certifique-se de que o software dos clientes esteja sempre atualizado
          para garantir a segurança e o bom funcionamento.
        </Warnings>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase1"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Modelação do Nivel de Trabalho de Rede
        </a>
        <a
          href="/phase3"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Introdução aos Sockets
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
