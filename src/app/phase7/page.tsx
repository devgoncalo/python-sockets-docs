"use client";

import {
  ArrowLeft,
  ArrowRight,
  CellSignalFull,
  CodeSimple,
  Notepad,
} from "@phosphor-icons/react";

import Code from "@/components/Code";
import Challenges from "@/components/Challenges";

export default function Phase7() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <CellSignalFull size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            Streaming
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          O protocolo TCP transmite dados por meio de uma conexão. As funções de
          socket <strong>send</strong> e <strong>recv</strong> sugerem que
          mensagens individuais são enviadas e recebidas. Isto, no entanto, não
          é verdade.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Enviar e Receber Fluxos de Bytes
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Cada vez que um socket envia uma mensagem, uma série de bytes é
          enviada como um fluxo.
        </p>
        <p>
          O TCP garante que todos os bytes chegarão ao socket de recebimento na
          ordem correta. No entanto, não há garantia de que o número de bytes
          retornados por uma chamada para <kbd>`recv`</kbd> será o mesmo número
          de bytes enviados usando <kbd>`send`</kbd> . Pode ser que várias
          mensagens tenham sido enviadas usando <kbd>`send`</kbd> , que são
          recuperadas por uma única chamada para
          <kbd>`recv`</kbd> .
        </p>
        <p>
          Também pode acontecer que várias chamadas para <kbd>`recv`</kbd> sejam
          necessárias para recuperar todos os bytes que foram enviados numa
          única mensagem. Isso cria dois problemas práticos para os
          programadores:
          <ul className="mt-4 flex list-decimal flex-col gap-3 pl-6 text-sm">
            <li>Como determinar o fim de uma mensagem e o início de outra;</li>
            <li>
              Como reconstruir uma única mensagem a partir de vários conjuntos
              de bytes.
            </li>
          </ul>
        </p>
        <p>
          Ao lidar com mensagens de rede que contêm apenas texto, uma abordagem
          comum é incluir um caractere não imprimível no final de cada mensagem,
          como um retorno tipo <kbd>`\n`</kbd> ou um{" "}
          <a
            className="text-yellow-400"
            href="(https://en.wikipedia.org/wiki/End-of-
Transmission_character)"
          >
            caractere especial
          </a>
          .
        </p>
        <p>
          Nas próximas seções, iremos criar duas funções que fazem uso de um
          caractere de terminação. Numa outra fase, irá ser explorada outras
          opções para lidar com esses problemas ao enviar dados binários (não
          textuais).
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Terminar uma Mensagem
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Cada mensagem enviada deve terminar com o caractere de terminação{" "}
          <kbd>`\n`</kbd>. Veja-se a função <kbd>`send_text`</kbd> abaixo e
          observe-se que:
          <ul className="mt-4 flex list-decimal flex-col gap-3 pl-6 text-sm">
            <li>
              Se espera que um socket e o texto sejam enviados como parâmetros;
            </li>
            <li>
              Se anexa o caractere <kbd>`\n`</kbd> à mensagem antes de enviá-la.
            </li>
          </ul>
        </p>
        <Code>
          def send_text(sending_socket, text):
          <br />
          text = text + &quot;\n&quot;
          <br />
          data = text.encode()
          <br />
          sending_socket.send(data)
        </Code>
        <p>
          Adicione a função <kbd>`send_text`</kbd> que acabmos de criar ao
          programa <kbd>`socket_server.py`</kbd>. Substitua a chamada{" "}
          <kbd>.send`</kbd> pelo código para chamar a função{" "}
          <kbd>`send_text`</kbd>.
        </p>
        <Code>
          <span className="text-green-800"># Código Antigo: </span>
          <br />
          message = &quot;Olá, Obrigado por se conectar&quot;
          <br />
          data = message.encode() connection_socket.send(data)
          <br />
          <br />
          <span className="text-green-800"># Código Novo: </span>
          <br />
          message = &quot;Hello, thanks for connecting&quot;
          <br />
          send_text(connection_socket, message)
        </Code>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Receber Mensagens Completas
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          É então possível criar uma função complementar <kbd>`get_text`</kbd>{" "}
          que usará o caractere <kbd>`\n`</kbd> para determinar se uma mensagem
          completa foi recebida. O processo de garantir que as mensagens
          completas sejam recebidas é mais complicado, pois deve verificar se:
          <ul className="mt-4 flex list-decimal flex-col gap-3 pl-6 text-sm">
            <li>
              Várias mensagens foram retornadas de uma única chamada para{" "}
              <kbd>`recv`</kbd>;
            </li>
            <li>
              Várias chamadas para <kbd>`recv`</kbd> são necessárias para obter
              uma única mensagem;
            </li>
          </ul>
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <CodeSimple size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            A função <kbd>`get_text`</kbd> apresentada abaixo faz isso por:
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Fazendo chamadas continuamente para receber dados <kbd>`recv`</kbd>{" "}
            de um socket passado como um parâmetro;
          </li>
          <li>
            Anexar quaisquer dados recebidos a um <kbd>`buffer`</kbd>;
          </li>
          <li>
            Verificar se o buffer contém um caractere <kbd>`\n`</kbd> e,
            portanto, uma mensagem completa;
          </li>
          <li>Retornando a mensagem completa;</li>
          <li>
            Removendo a mensagem retornada do <kbd>`buffer`</kbd>;
          </li>
          <li>
            Verificar se o <kbd>`buffer`</kbd> contém mais mensagens completas.
          </li>
        </ul>
        <Code>
          def get_text(receiving_socket):
          <br />
          buffer = &quot;&quot;
          <br />
          socket_open = True
          <br />
          while socket_open:
          <br />
          <span className="text-green-800">
            # read any data from the socket
          </span>
          <br />
          data = receiving_socket.recv(1024)
          <br />
          <span className="text-green-800">
            # if no data is returned the socket must be closed
          </span>
          <br />
          if not data:
          <br />
          socket_open = False
          <br />
          <span className="text-green-800"># add the data to the buffer</span>
          <br />
          buffer = buffer + data.decode()
          <br />
          <span className="text-green-800">
            # is there a terminator in the buffer
          </span>
          <br />
          terminator_pos = buffer.find(&quot;\n&quot;)
          <br />
          <span className="text-green-800">
            # if the value is greater than -1, a \n must exist
          </span>
          <br />
          while terminator_pos &gt; -1:
          <br />
          <span className="text-green-800">
            # get the message from the buffer
          </span>
          <br />
          message = buffer[:terminator_pos]
          <br />
          <span className="text-green-800">
            # remove the message from the buffer
          </span>
          <br />
          buffer = buffer[terminator_pos + 1:]
          <br />
          <span className="text-green-800">
            # yield the message (see below)
          </span>
          <br />
          yield message
          <br />
          <span className="text-green-800">
            # is there another terminator in the buffer
          </span>
          <br />
          terminator_pos = buffer.find(&quot;\n&quot;)
        </Code>
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
          <li>Onde estão os dados recebidos do socket?</li>
          <li>Como as mensagens completas são identificadas?</li>
          <li>
            Quando é que o buffer foi criado, o buffer anexado a, uma mensagem
            completa removida do buffer?
          </li>
          <li>
            Qual declaração está retornando cada mensagem completa para o
            programa de chamada?
          </li>
        </ul>
        <p>
          Adicione a função <kbd>`get_text`</kbd> ao seu programa{" "}
          <kbd>`socket_client.py`</kbd>.
        </p>
        <p>
          A função <kbd>`get_text`</kbd> usa uma função geradora que produz para
          retornar mensagens completas, uma de cada vez. Há mais informações
          sobre como as funções de rendimento e gerador funcionam em .. Para
          usar a função
          <kbd>`get_text generator`</kbd> no programa{" "}
          <kbd>`client_socket.py`</kbd>, é necessário substituir o código
          seguinte:
        </p>
        <Code>
          data = client_socket.recv(1024)
          <br />
          mensagem = data.decode()
          <br />
          print(mensagem)
        </Code>
        <p>
          Poderá usar <kbd>`get_text`</kbd> com um ciclo for, que fará um ciclo
          até que a função do gerador <kbd>`get_text`</kbd> seja concluída
          quando o socket for fechado:
        </p>
        <Code>
          for mensagem in get_text(client_socket):
          <br />
          print(mensagem)
        </Code>
        <p>
          Ou usar next para chamar <kbd>`get_text`</kbd> uma vez e obter uma
          única mensagem.
        </p>
        <Code>mensagem = next(get_text(client_socket)) print(mensagem)</Code>
        <Challenges>
          Experimentar as duas abordagens e certificar de entender a diferença.
          Qual pode ser a desvantagem de usar `\n` como caractere de
          terminação?
        </Challenges>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase6"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Enviar e Receber Dados
        </a>
        <a
          href="/phase8"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          Aplicação de Chat
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
