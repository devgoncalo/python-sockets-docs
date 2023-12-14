"use client";

import {
  MagnifyingGlass,
  ArrowLeft,
  ArrowRight,
  ArrowsDownUp,
  X,
} from "@phosphor-icons/react";

import Code from "@/components/Code";
import Questions from "@/components/Questions";
import Challenges from "@/components/Challenges";

import Image from "next/image";
import snippet6 from "../../assets/snippets/snippet6.png";

export default function Phase6() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <ArrowsDownUp size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            Enviar e Receber Dados
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          Depois de conectar uos sockets, a próxima fase é usá-los para se
          comunicarem e enviarem dados para frente e para trás. Podemos alcançar
          isso usando as funções de envio e recebimento <strong>(recv)</strong>{" "}
          dos sockets.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Enviar Dados
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          A primeira tarefa é fazer com que o servidor responda com uma mensagem
          quando um cliente se conectar.
        </p>
        <p>
          No final do programa <kbd>`socket_server.py`</kbd>, adicione o
          seguinte código para enviar uma mensagem depois que o cliente se
          conectar:
        </p>
        <Code>
          mensagem = &quot;Olá, obrigado pela conexão!&quot;
          <br />
          data = mensagem.encode() <br />
          connection_socket.send(data)
          <br />
        </Code>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <MagnifyingGlass size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Alguns destaques importantes a serem feitos sobre este código:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            O programa precisa codificar a mensagem para que ela possa ser
            enviada.
          </li>
          <Code>data = mensagem.encode()</Code>
          <p>
            A função <kbd>`encode()`</kbd> usa o padrão de codificação de
            caracteres utf-8 para codificar cada caractere na variável de string
            de mensagem numa série de bytes. É possível codificar os dados
            usando diferentes padrões de codificação, por exemplo,{" "}
            <kbd>`mensagem.encode(&quot;base64&quot;)`</kbd>, que é útil p lidar
            com dados não textuais.a.
          </p>
          <Questions>
            UTF-8 é a página de código universal para internacionalização de
            caracteres e é capaz de codificar todo o conjunto de caracteres
            Unicode.
          </Questions>
          <li>
            Uma vez que a mensagem foi codificada pelo programa, ela pode ser
            enviada usando o <kbd>`connection_socket`</kbd>.
          </li>
          <Code>connection_socket.send(data)</Code>
        </ul>
        <p>
          É possível testar as alterações executando os programas de servidor e
          cliente novamente, para certificar de que ambos ainda sejam executados
          com êxito. Quando o cliente se conecta, o servidor deve enviar a
          mensagem. Não se verá nenhuma resposta no programa cliente em
          execução, pois não foi alterado para receber os dados.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Receber Dados
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Agora vamos alterar o <kbd>`socket_client.py`</kbd> no final do
          programa , adicione o seguinte código:
        </p>
        <Code>
          data = client_socket.recv(1024)
          <br />
          mensagem = data.decode()
          <br />
          print(mensagem)
          <br />
        </Code>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <MagnifyingGlass size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            O código para receber os dados é o espelho do código para enviar:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Os dados são recebidos do <kbd>`client_socket`</kbd>.
          </li>
          <Code>data = client_socket.recv(1024)</Code>
          <p>
            Os dados são recebidos ou lidos do client_socket usando
            <kbd>`client_socket.recv(1024)`</kbd>. O valor 1024 é o número
            máximo de bytes que devem ser lidos de uma vez. Se mais de 1.024
            bytes tiverem sido enviados, as chamadas subsequentes para{" "}
            <kbd>`recv`</kbd>
            receberão o restante dos dados.
          </p>
          <li>A informação recebida é descodificada e impressa.</li>
          <Code>mensagem = data.decode() print(mensagem)</Code>
          <li>
            Os dados recebidos pelo socket são um fluxo de bits e precisam ser
            descodificados para uma string usando o <kbd>`decode()`</kbd> para
            que possam ser colocados no ecrã.
          </li>
          <li>
            Execute os programas novamente. Quando o cliente se conecta ao
            servidor, a mensagem deve ser enviada e impressa pelo cliente.
          </li>
          <div className="flex items-center justify-center">
            <Image
              src={snippet6}
              alt="Snippet 6"
              className="w-full rounded-xl"
            />
          </div>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Fechar os Sockets
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Depois de terminar de usar os sockets, é recomendável fechá-los usando
          a função <kbd>`close()`</kbd> do socket. Fechar o socket irá
          desconectá-lo e liberar recursos do sistema.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <X size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Como podemos fechar os sockets:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Modificar o <kbd>`server_socket.py`</kbd> para fechar a conexão e os
            sockets do servidor após o envio da mensagem:
          </li>
          <Code>
            connection_socket.close()
            <br />
            server_socket.close()
          </Code>
          <li>
            Alterar o client_socket.py para fechar também o socket do cliente:
          </li>
          <Code>client_socket.close()</Code>
          <Challenges>
            Os programas de servidor e cliente atualmente enviam dados apenas
            numa direção, do servidor para o cliente. É possível modificar os
            programas para que o cliente responda com uma mensagem após receber
            a mensagem “Olá, obrigado por conectar” e o servidor a receber e
            exibir essa mensagem de resposta?
          </Challenges>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase5"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Conectando um Socket
        </a>
        <a
          href="/phase7"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Streaming
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
