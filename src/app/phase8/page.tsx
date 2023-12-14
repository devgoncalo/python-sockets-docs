"use client";

import {
  MagnifyingGlass,
  ArrowLeft,
  ArrowRight,
  Footprints,
  AppWindow,
  Brain,
} from "@phosphor-icons/react";

import Image from "next/image";
import flow3 from "../../assets/flows/flow3.png";
import Infos from "@/components/Infos";

export default function Phase8() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <AppWindow size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            Aplicação de Chat
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          Muito das aprendizagens que se empreenderam foram um pouco abstrato,
          pois envolveu a aprendizagem da teoria que suporta os sockets e o uso
          de Python para implementá-los. Para tentar visualizar algo que use
          sockets para uma finalidade do mundo real, vamos criar um aplicativo
          de chat que permitirá que dois utilizadores enviem mensagens um ao
          outro pela rede.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Esboço do Projeto
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Para ajuda-lo a guiar-se neste projeto, fornecemos um esboço dos
          requisitos.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <Brain size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            O esboço da aplicação, deve ser criado:
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>Uma aplicação num único ficheiro Python;</li>
          <li>
            Isso permite que o utilizador escolha configurar um socket e ser um
            servidor e executar as etapas para configurar um socket de servidor;
          </li>
          <li>
            Ou para se conectar a um servidor e ser um cliente permitindo que o
            utilizador insira o endereço IP do servidor e execute as etapas para
            se conectar ao servidor;
          </li>
          <li>
            A aplicação deve então repetir o seguinte:
            <ul className="mt-2 flex list-decimal flex-col gap-3 pl-6 text-sm">
              <li>Esperar até que uma mensagem seja recebida;</li>
              <li>Exibir a mensagem para o utlizador;</li>
              <li>Permitir que o utilizador digite uma resposta;</li>
              <li>Enviar a resposta para o socket.</li>
            </ul>
          </li>
        </ul>
        <Infos>
          A aplicação deve ter prompts e mensagens claras e objetivas. Os
          utilizadores devem ser notificados sobre o status atual, por exemplo
          “Aguardando uma nova mensagem” ou “Um cliente se conectou”.
        </Infos>
        <p>
          A tarefa é, pegar neste esboço e decompor em pequenas etapas
          programáveis. Recomendamos usar um fluxograma para projetar a
          aplciação, fazer um pseudocódigo ou apenas uma lista de instruções
          também deverá ser igualmente eficaz.
        </p>
        <p>
          Inicie o projeto com as etapas para a escolha do utilizador no início
          do programa. Certificar e ilustrar as condições e os diferentes
          caminhos que a aplicação pode seguir. As secções a seguir ajudarão a
          detalhar cada uma das etapas do programa.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Requisitos para um Cliente
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Devemos ter em conta algunas requisitos para configuar o cliente e
          seguir o seu respetivo ciclo de vida, veja como podemos alcançar isso.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <MagnifyingGlass size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Ciclo de vida para configurar um socket de cliente:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Criar um socket de um tipo específico, neste caso, um socket de
            fluxo;
          </li>
          <li>Inserir um endereço de servidor;</li>
          <li>Conectar o socket usando o endereço;</li>
          <li>Enviar uma mensagem para o servidor.</li>
        </ul>
        <p>
          Adicionar as instruções programáveis necessárias para cada uma dessas
          etapas ao projeto, junto com o outro caminho. Certificar de mostrar
          como o utilizador pode escolher o caminho do cliente ou do servidor.
          Não esquecer de adicionar prompts e mensagens ao plano.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Implementando Mensagens Bidirecionais
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          A descrição da aplicação acima mostra que existem quatro tarefas
          principais que são necessárias para implementar e alcançar o sistema
          de mensagens:
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Essas 4 tarefas principais são:
          </span>
        </div>

        <ul className="flex list-decimal flex-col gap-3 pl-6 text-sm">
          <li>Esperar que a mensagem chegue;</li>
          <li>Exibir para o utilizador;</li>
          <li>Inserir uma nova mensagem;</li>
          <li>Enviar para o socket.</li>
        </ul>
        <p>
          Estas partes devem ser as mesmas, independentemente da aplicação estar
          a agir como cliente ou servidor. Adicionar as instruções programáveis
          necessárias para alcançar este sistema ao seu plano. Se precisar de
          inspiração, volte às etapas anteriores para ver as instruções do
          Python que foram usadas. Não esquecer de adicionar prompts e mensagens
          ao seu plano.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Compartilhar o Plano
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Mostre e compartilhe o seu plano (fluxograma) com os colegas. Se foi
          usado pseudocódigo ou instruções Python para planear, o aluno deve
          decidir estar à vontade para compartilhá-los também.
        </p>
        <p>
          De seguida apresenta-se uma proposta de fluxograma, é um esboço e deve
          ser usado apenas como inspiração.
        </p>
        <Image src={flow3} alt="Flow 3" className="w-full rounded-xl" />
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase7"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Streaming
        </a>
        <a
          href="/phase9"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Criar o Código Para a Aplicação
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
