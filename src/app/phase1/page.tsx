"use client";

import {
  ArrowRight,
  ArrowLeft,
  NavigationArrow,
  Notepad,
} from "@phosphor-icons/react";

import Questions from "@/components/Questions";
import Infos from "@/components/Infos";
import Warnings from "@/components/Warnings";

import Image from "next/image";
import flow from "../../assets/flows/flow1.png";

export default function Phase1() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <NavigationArrow size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-2xl">
            Modelação do Nivel de Trabalho de Rede
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          Ao longo deste trabalho, iremos verificar que o trabalho de rede está
          cheio de abstrações. Em muitos casos, os detalhes complexos dos
          protocolos e sistemas de comunicação envolvidos podem ser
          negligenciados em favor de uma visão de nível superior. Isso é mais
          comummente visto nos modelos de rede, em camadas que descrevem a
          operação de redes, incluindo a Internet. Nesta etapa, vamos explorar
          um desses modelos para consolidar a base para o resto dos trabalhos.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          OSI OU TCP / IP
          <span className="ml-2 text-yellow-500">?</span>
        </h2>
        <p>
          Existem dois modelos de camadas que são frequentemente aplicados aos
          trabalhos de rede: o modelo OSI de sete camadas e o modelo TCP/IP de
          quatro camadas. As camadas TCP/IP envolvem as OSI, portanto, vamos
          concentrar no modelo TCP/IP.
        </p>
        <div className="flex items-center justify-center">
          <Image
            src={flow}
            alt="Flow 1"
            className="w-full rounded-xl"
          />
        </div>
        <p>
          Ao olhar para este modelo, é convencional trabalhar de cima para
          baixo. Isso ocorre porque, na verdade, existe uma quinta camada
          secreta - o utilizador - que em cada uma das camadas foi projetado
          para servir.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          A camada de aplicação
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          O nível mais alto do modelo, a camada de aplicação, é o mais próximo
          do utilizador. Aplicações de rede, como navegadores da web, clientes
          de e-mail e jogos de vídeo online, todos operam nesse nível.
        </p>
        <p>
          A camada de aplicação abrange os sistemas que preparam informação para
          os aplicativos, como sistemas de criptografia / descriptografia e os
          decodificadores que pegam nessa informação binária em bruto e
          traduzem-no para o formato apropriado do aplicativo (HTML para seu
          navegador ou texto e imagens para seu o email).
        </p>
        <p>
          Os dados nessa camada são transmitidos por meio de um protocolo de
          aplicativo, como HTTP (Hypertext Transfer Protocol) ou FTP (File
          Transfer Protocol), que pode ser compreendido pelo aplicativo que
          recebe os dados.
        </p>
        <Questions>
          Hypertext Transfer Protocol ou HTTP é um protocolo de comunicação
          utilizado para sistemas de informação de hipermídia, distribuídos e
          colaborativos.
        </Questions>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          A camada de transporte
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          A segunda camada trata do transporte dos dados e do protocolo de
          aplicação que o acompanha. Essa camada envolverá os dados de uma forma
          especificada por um protocolo de transporte.
        </p>
        <p>
          O protocolo de transporte garante que os pontos inicial e final da
          comunicação saibam o que esperar e como desempacotar qualquer mensagem
          enviada. A vantagem de separar essa camada da camada de aplicação é
          que muitos tipos diferentes de aplicações e sistemas operativos podem
          comunicar uns com os outros e usar a Internet para fazer isso.
        </p>
        <p>
          Os protocolos de transporte que vamos trabalhar são o Protocolo de
          Controle de Transmissão (TCP) e o Protocolo de Datagrama do Usuário
          (UDP).
        </p>
        <Questions>
          O User Datagram Protocol ou UDP é um protocolo simples da camada de
          transporte. Ele é descrito na RFC 768 e permite que a aplicação envie
          um datagrama encapsulado num pacote IPv4 ou IPv6 a um destino, porém
          sem qualquer tipo de garantia que o pacote chegue corretamente.
        </Questions>
        <p>
          Um computador pode ter várias aplicações de rede em execução
          simultaneamente para direcionar os dados para a aplicação correta, o
          computador atribuirá uma porta para cada conexão de rede.
        </p>
        <Infos>
          As portas assumem a forma de um número de 1 a 65535 e todas as
          aplicações que possuem uma conexão de rede aberta terão uma.
        </Infos>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          A camada de rede
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Esta camada é dominada pelo sistema de endereçamento de protocolo da
          Internet (IP). Quase todas as aplicações conectadas à Internet o usam
          para rotear a informação até ao seu destino nas várias redes que
          compõem a Internet.
        </p>
        <p>
          Existem dois tipos de endereço IP. Os endereços do protocolo da
          Internet versão 4 (IPv4) são números de 32 bits geralmente escritos
          como quatro números no intervalo de 0 a 255 (ou seja, números de 8
          bits) separados por pontos, por exemplo 127.5.64.87.
        </p>
        <Infos>
          Em 1998, esses endereços IP estavama começar esgotar, então foi criado
          o Internet Protocol versão 6, que usa endereços numéricos de 128 bits
          geralmente escritos como 8 números hexadecimais, por exemplo 2001:
          db8:0:0:0:ff00:42:8329.
        </Infos>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          A camada de ligação (link) de dados
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          A camada final do modelo lida com conexões individuais entre máquinas.
          Os protocolos usados aqui podem variar, tanto no tipo de conexão (com
          fio ou não) quanto no tipo de rede (redes locais ou de longa
          distância).
        </p>
        <p>
          Isso também inclui a conexão inicial entre a máquina de um utilizador
          e a internet, seja por cabo UTP (comummente referido como um cabo
          Ethernet) ou uma conexão sem fio, como WiFi.
        </p>
        <Questions>
          Um cabo UTP ou um cabo por Par Rrançado é um tipo de cabo que possui
          pares de fios entrelaçados um ao redor do outro para cancelar as
          interferências eletromagnéticas.
        </Questions>
        <p>
          À medida que avançarmos, iremos ver como navegar nas camadas de
          aplicação e como transportar os programas. Os dois níveis inferiores
          (as camadas de rede e ligação de dados) serão diferentes para todos,
          mas podemos abstrair esses detalhes.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <Notepad size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Tente responder a estas perguntas:
          </span>
        </div>

        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>Qual é o endereço IP do seu dispositivo?</li>
          <li>Experimente digitar “What is my IP address?” no google.</li>
          <li>
            Se descobrir que tem um endereço IP público e um endereço IP local,
            tentar entender porque isso pode acontecer?
          </li>
          <li>A que tipo de rede está conectado?</li>
        </ul>
        <Warnings>
          Todas as redes terão restrições, especialmente aquelas no trabalho ou
          na escola. Verifique a sua rede para se certificar de que pode
          comunicar internamente e externamente.
        </Warnings>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 flex justify-between">
        <a
          href="/"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Início
        </a>
        <a
          href="/phase2"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          O Modelo Cliente Servidor
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
