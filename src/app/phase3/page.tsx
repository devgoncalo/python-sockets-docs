"use client";

import {
  ArrowRight,
  ArrowLeft,
  Notepad,
  HardDrives,
  Footprints,
} from "@phosphor-icons/react";

import Warnings from "@/components/Warnings";
import Questions from "@/components/Questions";
import Infos from "@/components/Infos";

import { File } from "lucide-react";

import Image from "next/image";
import flow from "../../assets/flows/flow2.png";

export default function Phase3() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <HardDrives size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            Introdução aos Sockets
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          Os programas de computador usam sockets para se comunicar em redes.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Contexto
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Os sockets não são uma coisa física, mas sim um conceito abstrato, uma
          ferramenta que os programadores usam para tornar a comunicação mais
          simples.
        </p>
        <p>
          Os sockets vêm em pares, e uma analogia simples é imaginar um tubo com
          uma porta em cada extremidade. O que quer que seja colocado em uma
          extremidade do tubo pode ser retirado da outra extremidade do tubo e
          vice-versa.
        </p>
        <Infos>
          O socket (ou trabalho de rede de socket) foi utilizado e definido pela
          primeira vez em 1971 como um mecanismo para as comunicações
          máquina-máquina, confira{" "}
          <a
            className="text-blue-500"
            href="https://datatracker.ietf.org/doc/html/rfc147"
            target="_blank"
          >
            aqui
          </a>
          .
        </Infos>
        <p>
          Os sockets abstraem a complexidade da comunicação numa rede em algumas
          etapas simples. Um programador não precisa saber como funciona uma
          rede ou como os dados são transmitidos eles apenas colocam ou retiram
          dados do socket.
        </p>
        <p>
          Imagine colocar uma carta, inclui-se um endereço de destino, mas
          nenhum detalhe sobre como ele chegará lá, ou como verificar se ele
          chegou lá. Todos os processos, procedimentos e movimentos físicos
          necessários para enviar sua carta para o endereço especificado são
          abstraídos ou seja não é necessário saber.
        </p>
        <p>
          Nos últimos tempos, os sockets têm sido usados quase exclusivamente
          para se referir a um socket que usa o protocolo da Internet (IP) e, em
          particular, o protocolo de controle de transmissão (TCP).
        </p>
        <p>
          Voltando ao modelo em camadas TCP / IP, os sockets são fundamentais
          para permitir que os aplicativos se comuniquem com outros aplicativos
          por meio da camada de transporte.
        </p>
        <div className="flex items-center justify-center">
          <Image src={flow} alt="Flow 2" className="w-full rounded-xl" />
        </div>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <Notepad size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Existem muitos tipos de sockets tais como:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>Stream, para fornecer uma conexão confiável sobre TCP;</li>
          <li>
            Datagrama, para enviar dados não ordenados e explorar a perda de
            dados usando UDP.
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          API de sockets de Berkeley
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Para usar sockets nos programas, é necessária um interface de
          programação de aplicativo (API). Uma API é um mecanismo para falar com
          diferentes programas ou com um software. Isso pode ser funções,
          processos ou um conjunto de regras; a API define, como programador,
          deve usar o software.
        </p>
        <Questions>
          Uma API ou Interface de Programação de Aplicações é um conjunto de
          regras e protocolos que permite que diferentes aplicações de software
          comuniquem e interajam entre si.
        </Questions>
        <p>
          Embora existam muitas APIs de socket, a API de soquetes de Berkeley é
          a mais amplamente usada e existe uma versão na maioria das linguagens
          de programação de propósito geral.
        </p>
        <p>
          Definido pela Universidade da Califórnia, Berkeley em 1983, a API
          define um padrão para o uso de sockets e descreve um ciclo de vida (ou
          processo) para o uso de um socket.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <File size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Este ciclo é muito semelhante com o uso de ficheiros, pois pode:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>Abrir e Fechar;</li>
          <li>Ler e Escrever.</li>
        </ul>
        <Infos>
          Embora um socket possa ser usado para enviar e receber dados, a
          maneira como se usa difere, dependendo se estamos a criar um servidor
          (que espera por conexões) ou um cliente (que cria uma conexão).
        </Infos>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Socket Servidor
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Um socket que espera por uma conexão q seja feita é normalmente usado
          por programas de servidor. Os servidores estão sempre à espera; quando
          um cliente se conecta, o servidor lida com a solicitação e envia uma
          resposta.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Siga as seguintes etapas para criar um Socket Servidor:
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Primeiro crie um Socket de um tipo específico (protocolo (TCP ou
            UDP));
          </li>
          <li>
            Em seguida, ligue o Socket ao endereço de rede onde as conexões
            serão feitas;
          </li>
          Defina o Socket para ouvir um cliente e para fazer uma conexão;
          <li>
            Aguarde uma conexão, aceite-a e crie um novo Socket para gerir a
            conexão entre o servidor e o cliente;
          </li>
          <Infos>
            Cada cliente que se conecta ao servidor obterá o seu próprio socket
            de conexão.
          </Infos>
          <li>
            Em seguida, envie e receba <kbd>`recv`</kbd> dados através do socket
            de conexão;
          </li>
          <li>
            Por fim, feche o soquete quando novas conexões não forem mais
            necessárias.
          </li>
          <Warnings>
            O número máximo de conexões simultâneas que um Socket Servidor pode
            lidar depende de vários fatores, como o sistema operacional e a
            configuração do servidor.
          </Warnings>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Socket Cliente
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Quando um socket de servidor está à espera por conexões, um socket de
          cliente pode se conectar a ele.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <Footprints size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Siga as seguintes etapas para criar um Socket Cliente:
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Primeiro crie um socket que seja do mesmo tipo que o socket ao qual
            você deseja se conectar;
          </li>
          <li>
            Em seguida, conecte o socket ao endereço de rede do socket do
            servidor;
          </li>
          <li>
            Em seguida, você envia e recebe <kbd>`recv`</kbd> dados pelo socket;
          </li>
          <li>Finalmente, feche a conexão quando terminar.</li>
        </ul>
        <hr className="mt-1 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase2"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />O Modelo Cliente
          Servidor
        </a>
        <a
          href="/phase4"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Usar Sockets em Python
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
