"use client";

import {
  Wrench,
  MagnifyingGlass,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";

import Code from "@/components/Code";
import Infos from "@/components/Infos";
import Warnings from "@/components/Warnings";

import { TestTube } from "lucide-react";

import Image from "next/image";
import snippet1 from "../../assets/snippets/snippet1.png";
import snippet2 from "../../assets/snippets/snippet2.png";
import snippet3 from "../../assets/snippets/snippet3.png";
import Challenges from "@/components/Challenges";

export default function Phase4() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <Wrench size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            Usar Sockets em Phyton
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          O Python tem uma API de socket que permite que se comunique com outros
          programas numa rede. Agora vamos criar um programa de servidor usando
          Python e sockets que permitirá que os clientes se conectem a ele.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Criar um Servidor
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          Para criarmos um pequeno programa em Python que criará um servidor e
          usará um navegador da web no computador para se conectar a ele, vamos
          criar um ficheiro chamado <kbd>`socket_server.py`</kbd> e copiar o
          seguinte programa:
        </p>
        <Code>
          import socket <br />
          <br />
          server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM){" "}
          <br />
          server_socket.bind (("0.0.0.0", 8081)) <br />
          server_socket.listen() <br />
          print ("Esperando pela conexão") <br />
          connection_socket, address = server_socket.accept() <br />
          print ("Cliente conectado") <br />
        </Code>
        <p>
          O código cria um socket de servidor e espera que um cliente se
          conecte. Aprendemos anteriormente que as primeiras quatro tarefas na
          configuração de um socket de servidor são: <strong>Criar</strong>,{" "}
          <strong>Ligar</strong>, <strong>Ouvir</strong> e{" "}
          <strong>Aceitar</strong>.
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
            Importar o módulo de socket e criar um soquete denominado
            <kbd>`server_socket`</kbd>.
          </li>
          <Code>
            import socket <br />
            <br />
            server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM){" "}
          </Code>
          <p>
            Os parâmetros <kbd>`socket.AF_INET`</kbd> e{" "}
            <kbd>`socket.SOCK_STREAM`</kbd> determinam o tipo de socket e
            protocolo a ser usado. No caso, <kbd>`AF_INET`</kbd> especifica o
            protocolo da Internet versão 4 e SOCK_STREAM denota TCP, então um
            socket TCP/IP é criado.
          </p>

          <li>
            Em seguida, liga (ou configura) o socket para usar um endereço e uma
            porta.
          </li>
          <Code>server_socket.bind (("0.0.0.0", 8081))</Code>
          <Infos>
            Observe que há um conjunto extra de parêntesis ao redor do endereço,
            e devemos certificar que todos os parêntesis interno e externo na
            função de vinculação; &quot;0.0.0.0&quot; vinculará o socket a todos
            os endereços IP de rede disponíveis neste computador.
          </Infos>
          <p>
            É muito comum que um computador tenha vários endereços de rede:
            <ul className="mt-4 flex list-decimal flex-col gap-3 pl-6 text-sm">
              <li>
                Normalmente, um endereço interno de 127.0.0.1, que apenas
                programas do computador podem usar;
              </li>
              <li>
                Um ou mais endereços externos, como 192.168.1.2, que podem ser
                usados para se conectar numa rede.
              </li>
            </ul>
          </p>
          <p>
            Embora se tenha optado por usar &quot;0.0.0.0&quot; para vincular o
            socket a todos os endereços IP, já que isso é útil para teste, é
            possível usar um endereço IP específico, por exemplo 127.0.0.1, se
            quisesse que só estivesse disponível para outros programas do
            computador. Também pode usar o IP encontrado anteriormente para
            permitir o acesso de fora da rede. 8081 determina a porta TCP que o
            socket deve usar.
          </p>
          <p>
            As portas são normalmente usadas para identificar a finalidade da
            conexão e podem ter qualquer número entre 0 e 65535. As portas 0 a
            1023 são portas bem conhecidas que geralmente são restritas para
            usos específicos: por exemplo, a porta 80 é HTTP e não deveria ser
            usado.
          </p>
          <Warnings>
            Foi escolhido a porta 8081 porque é normalmente usado para testes,
            mas pode ser escolhido qualquer número.
          </Warnings>

          <li>Colocar o socket à escuta para que a conexão seja feita:</li>
          <Code>server_socket.listen()</Code>
          <li>Esperar pela conexão e aceita-la:</li>
          <Code>connection_socket, address = server_socket.accept()</Code>
          <p>
            Quando <kbd>`server_socket.accept()`</kbd> é chamada o computador
            fica em espera que a conexão seja feita.
          </p>
          <p>
            Quando um novo cliente se conecta, são retornados dois parâmetros:
            <br />
            <br />
            <ul className="flex list-decimal flex-col gap-3 pl-6 text-sm">
              <li>
                Um novo socket, que se chamou de connection_socket e é a conexão
                com o cliente;
              </li>
              <li>
                O endereço de rede do cliente que se conectou, incluindo seu
                endereço IP e porta.
              </li>
            </ul>
          </p>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Testar o Programa
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Qualquer software é capaz de se conectar usando TCP/IP, por exemplo,
          um navegador da web ou terminal, será capaz de fazer uma conexão com o
          seu servidor. Na próxima secção, vamos criar o próprio cliente, mas
          para testar se está a funcionar, podemos usar um navegador da web.
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
            Execute o programa. Deverá ser visível a mensagem “Aguardando
            conexão”.
          </li>
          <div className="flex items-center justify-center">
            <Image
              src={snippet1}
              alt="Snippet 1"
              className="w-full rounded-xl"
            />
          </div>
          <Infos>
            A primeira vez que você executa este programa, o sistema operativo
            pode pedir permissão para que este programa possa se comunicar com a
            rede. É importante que dê permissão, caso contrário, não se poderá
            usar os sockets.
          </Infos>
          <li>
            Abra o navegador da web (por exemplo, Chrome ou Firefox), digitar
            127.0.0.1:8081 na barra de URL e pressionar Enter.
          </li>
          <div className="flex items-center justify-center">
            <Image
              src={snippet2}
              alt="Snippet 2"
              className="w-full rounded-xl"
            />
          </div>
          <li>
            O navegador da web não exibirá nenhuma informação, mas o programa
            Python mostrará que um cliente se conectou.
          </li>
          <div className="flex items-center justify-center">
            <Image
              src={snippet3}
              alt="Snippet 3"
              className="w-full rounded-xl"
            />
          </div>
          <Challenges>
            Porque é que o navegador da web não exibe nada? O que teria que ser
            feito para que o navegador respondesse?
          </Challenges>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase3"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-2 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 md:px-3"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Introdução aos Sockets
        </a>
        <a
          href="/phase5"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Conectando um Socket
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
