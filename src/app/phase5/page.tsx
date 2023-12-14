"use client";

import { MagnifyingGlass, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { TestTube, Radio } from "lucide-react";

import Code from "@/components/Code";
import Infos from "@/components/Infos";
import Warnings from "@/components/Warnings";
import Checks from "@/components/Checks";

import Image from "next/image";
import snippet4 from "../../assets/snippets/snippet4.png";
import snippet5 from "../../assets/snippets/snippet5.png";


export default function Phase5() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <Radio size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            Conectando um Socket
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          A próxima tarefa é criar um programa cliente e enviar/receber dados de
          e para o seu servidor.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Criar um Cliente
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Agora vamos criar o próprio cliente e, na próxima etapa, modificará o
          servidor para enviar dados entre os sockets.
        </p>
        <p>
          Crie um novo programa Python, guardar como{" "}
          <kbd>`socket_client.py`</kbd> e copiar este programa:
        </p>
        <Code>
          import socket <br />
          <br />
          client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM){" "}
          <br />
          client_socket.connect (("127.0.0.1", 8081)) <br />
          print ("Conectado") <br />
        </Code>
        <p>
          Percorrendo o código, é possível ver as semelhanças com o programa do
          servidor que se criou e identificar as duas primeiras tarefas para
          criar um socket de cliente: <strong>Criar</strong> e{" "}
          <strong>Conectar</strong>.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <MagnifyingGlass size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Percorrendo o código, é fácil visualizar as tarefas:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Importar o módulo de socket e criar um socket com o nome{" "}
            <kbd>`client_socket`</kbd>.
          </li>
          <Code>
            import socket <br />
            <br />
            client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM){" "}
          </Code>
          <p>
            Quando foi criado o socket servidor, foi especificado que o tipo de
            protocolo a ser usado seria TCP/IP por utilização de
            <kbd>`socket.AF_INET`</kbd> e <kbd>`socket.SOCK_STREAM`</kbd>. Para
            que os sockets se conectem é necessário que eles sejam do mesmo
            tipo, assim o cliente deve ser definido da mesma forma.
          </p>

          <li>Conexão com o socket servidor.</li>
          <Code>client_socket.connect (("127.0.0.1", 8081))</Code>
          <p>
            O endereço ao qual se conectar é especificado como
            (&quot;127.0.0.1&quot;, 8081). A primeira parte,
            &quot;127.0.0.1&quot;, é o endereço IP do servidor ao qual desejamos
            conectar. 127.0.0.1 é um endereço IP especial e está reservado para
            o endereço interno do computador, conhecido como localhost.
          </p>
          <Infos>
            Foi usado este endereço porque se pretende executar os programas
            cliente e servidor no mesmo computador para testá-los. Para se
            conectar a um servidor numa rede, deve ser alterado esse endereço
            para o endereço IP externo do servidor.
          </Infos>
          <p>
            Conforme se configura o servidor para ouvir todos os endereços IP
            usando 0.0.0.0, ele aceitará conexões para endereços internos e
            externos. A segunda parte, 8081, é a porta que o socket do servidor
            está a usar.
          </p>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Testar o Cliente
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          É possível pode testar os programas cliente e servidor no mesmo
          computador, executando os programas servidor e cliente ao mesmo tempo.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <TestTube size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Vamos então testar o programa:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Abrir duas instâncias do IDE (como Mu, Thonny ou IDLE) e numa delas
            carregar o programa <kbd>`socket_server.py`</kbd>, e na outra
            carregar o programa
            <kbd>`socket_client.py</kbd>.
          </li>
          <div className="flex items-center justify-center">
            <Image
              src={snippet4}
              alt="Snippet 4"
              className="w-full rounded-xl"
            />
          </div>
          <Infos>
            Vai ser necessário ter suas duas instâncias do IDE em execução. Isso
            significa abrir o IDE duas vezes. por exemplo.
          </Infos>
          <li>
            Executar o programa <kbd>`socket_server.py`</kbd> num dos IDE's,
            deverá ver a mensagem “Aguardando conexão”.
          </li>
          <li>
            Execute o programa <kbd>`socket_client.py`</kbd> que se acabou de
            criar no outro IDE, ele deve (quase instantaneamente) exibir a
            mensagem “Conectado”. A mensagem “Cliente conectado” também deve ser
            exibida pelo programa <kbd>`socket_server.py`</kbd>.
          </li>
          <Warnings>
            É importante que o programa do servidor seja executado antes do
            programa cliente, ou o cliente não terá nada para se conectar.
          </Warnings>
          <div className="flex items-center justify-center">
            <Image
              src={snippet5}
              alt="Snippet 5"
              className="w-full rounded-xl"
            />
          </div>
          <Checks>
            Parabéns! Foi criado com êxito um programa que se conecta a uma
            rede. Não importa onde estes dois programas estão a ser executados,
            estejam no mesmo computador ou a milhares de quilômetros de
            distância e a comunicar pela Internet, o processo é quase igual.
          </Checks>
          <li>
            Na próxima fase, vamos enviar e receber dados por meio de sockets!
          </li>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase4"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Usar Sockets em Python
        </a>
        <a
          href="/phase6"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Enviar e Receber Dados
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
