"use client";

import {
  ArrowLeft,
  ArrowRight,
  CodeSimple,
} from "@phosphor-icons/react";
import { TestTube } from "lucide-react";

import Code from "@/components/Code";
import Infos from "@/components/Infos";
import Warnings from "@/components/Warnings";

export default function Phase9() {
  return (
    <>
      <div className="flex flex-col md:mt-16">
        <div className="flex items-center gap-3">
          <CodeSimple size={30} className="mb-0.5 text-yellow-500" />
          <h1 className="text-xl font-medium uppercase text-gray-50 md:text-3xl">
            Criar o Código para a Aplicação
          </h1>
        </div>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
        <p className="mt-5">
          Na fase anterior, criamos um fluxograma ou outro plano para a
          construção do aplicativo. Agora vamos usar o Python e experienciar com
          a biblioteca de sockets para codificá-lo. Vamos agora discutir cada
          fase do processo, e cada uma das secções deve terminar com uma
          codificação nessa secção. Deve ser investido algum tempo a fazer isto
          depois de ler cada secção e, em seguida, voltar a ler a próxima
          secção.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Importações e Escolhas
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          A primeira etapa em qualquer aplicação Python é importar as
          bibliotecas que são necessárias. No exercício anterior foi apresentado
          a biblioteca de sockets. É a biblioteca que permite abrir e conectar
          em sockets, e será essencial para o resto da aplicação. A biblioteca
          de sockets pode ser usada para criar objetos de sockets
        </p>
        <Infos>
          Objetos são tipos de dados personalizados que contêm dados e funções
          que podem ser usados nos programas.
        </Infos>
        <p>
          A segunda parte da configuração é permitir que o utilizador escolha
          entre iniciar um servidor ou se conectar a um. É possível implementar
          essa escolha de várias maneiras, por exemplo, fazendo com que o
          utilizador digite servidor ou cliente, ou mesmo um simples 1 ou 2.
        </p>
        <p>
          Qualquer que seja a escolha, precisará de obter a entrada do
          utilizador e usar uma estrutura <kbd>`if... else...`</kbd> para reagir
          ao resultado, portanto, deve-se certificar e incluir um prompt claro e
          objetivo.
        </p>
        <p>
          Vamos criar essas partes no ficheiro Python agora, testa-lo e depois
          voltar e continue a ler.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Servidor
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Na última fase, foi discutido sobre o ciclo de vida, agora vamos
          precisar implementar o Python para esse ciclo.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <CodeSimple size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Ciclo de Vida do Servidor:
          </span>
        </div>
        <ul className="flex list-decimal flex-col gap-3 pl-6 text-sm">
          <li>
            Criar:
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
              <li>
                Criar um objeto de socket usando a biblioteca que se importou
                anteriormente;
              </li>
              <li>
                Ao fazer isso, o aluno deve <strong>especificar</strong> qual
                tipo (stream ou datagram).
              </li>
            </ul>
          </li>
          <li>
            Ligar:
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
              <li>
                Chamar a função <kbd>`bind()`</kbd> ao socket;
              </li>
              <li>Atribuir ao socket um endereço e um número de porta.</li>
            </ul>
          </li>
          <li>
            Ouvir:
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
              <li>
                Chamar o método <kbd>`listen()`</kbd> ao socket;
              </li>
              <li>Irá interromper a execução até que um cliente se conecte.</li>
            </ul>
          </li>
          <li>
            Aceitar:
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
              <li>
                Crie duas novas variáveis e atribui-las aos resultados do método{" "}
                <kbd>`accept()`</kbd> no socket.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Criar essas partes no ficheiro Python agora, teste e depois voltar e
          continuar.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Cliente
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Na secção <kbd>`else`</kbd> da estrutura de seleção, é necessário
          executar o ciclo de vida de um socket cliente. Os clientes são
          projetados para se conectar a um servidor e usar o IP para fazer isso,
          portanto, deve-se fazer com que o utilizador insira o IP desejado e o
          use para se conectar.
        </p>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <CodeSimple size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Ciclo de Vida do Cliente:
          </span>
        </div>
        <ul className="flex list-decimal flex-col gap-3 pl-6 text-sm">
          <li>
            Criar:
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
              <li>
                Criar um objeto de socket usando a biblioteca que se importou
                anteriormente;
              </li>
              <li>
                Ao fazer isso, o aluno deve <strong>especificar</strong> qual
                tipo (stream ou datagram).
              </li>
            </ul>
          </li>
          <li>
            Conectar:
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
              <li>
                Use o endereço IP que o utilizador inseriu junto com o número da
                porta predefinida;
              </li>
              <li>
                Alimente-o com o método <kbd>`connect()`</kbd> no seu objeto
                socket.
              </li>
            </ul>
          </li>
          <li>
            Enviar uma Mensagem:
            <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
              <li>
                Usar o método <kbd>`send()`</kbd> para enviar uma mensagem ao
                servidor;
              </li>
              <li>
                As mensagens precisam estar em bytes, então escreva uma mensagem
                padrão como <kbd>&#39;Hello World &#39</kbd> (mais informação
                sobre bytes na próxima seção).
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Criar essas partes no ficheiro Python agora, teste e depois voltar e
          continuar.
        </p>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Mensagens
          <span className="ml-2 text-yellow-500">!</span>
        </h2>
        <p>
          A secção final do código é o ciclo <kbd>`loop`</kbd> de mensagens e a
          estrutura que irá executá-lo. Pode ser usado um ciclo{" "}
          <kbd>`while True`</kbd>, mas é possível usar qualquer condição que
          desejar para executar o ciclo de mensagens.
        </p>
        <p>
          Quando se envia mensagens por meio de um socket, elas devem estar no
          formato binário. Isso significa que terá que se codificar e
          decodificar as mensagens para enviá- las e exibi-las, assim como se
          fez anteriormente.
        </p>
        <p>
          Depois que o utilizador inserir a mensagem, esta deve ser codificada
          antes de enviá-la. Qualquer mensagem recebida de um socket deve ser
          descodificada de volta numa string para exibi-la ao utilizador.
        </p>
        <p>
          Abaixo estão alguns exemplos de instruções para relembrar como isso é
          feito:
        </p>
        <Code>
          my_string = &quot;Hello&quot;
          <br />
          <span className="text-green-800"># Encode string into bytes</span>
          <br />
          my_bytes = my_string.encode()
          <br />
          <span className="text-green-800"># Decode bytes into a string</span>
          <br />
          my_string_again = my_bytes.decode()
          <br />
        </Code>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-medium uppercase text-white">
          Testes
          <span className="ml-2 text-yellow-500">.</span>
        </h2>
        <p>
          Depois é hora de testar a aplicação de chat e, para isso, serão
          necessário duas versões dele em execução. É possível fazer isso de
          duas maneiras:
        </p>
        <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>Copiar o script para outro computador conectado à mesma rede;</li>
          <li>
            Executar o código em dois editores diferentes do seu computador ou a
            partir da linha de comando.
          </li>
        </ul>
        <p>
          Testar a aplicação e, em seguida, pensar em maneiras de melhorá-lo e
          implementá-lo. Adicionar prompts e mensagens personalizadas aos
          utilizadores que façam sentido para esses eventos:
        </p>
        <ul className="mt-3 flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>
            Quando uma conexão é bem sucedida e a primeira mensagem é enviada
            para o servidor;
          </li>
          <li>Quando uma nova mensagem é recebida;</li>
          <li>Quando o programa está em espera por uma mensagem.</li>
        </ul>
        <div className="flex items-center gap-x-3">
          <span className="rounded-lg bg-yellow-400/10 px-1.5 py-1.5 font-mono text-[0.625rem] font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-400 dark:text-yellow-500 dark:ring-yellow-500/30">
            <TestTube size={14} />
          </span>
          <span className="h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
          <span className="font-mono text-sm text-zinc-400">
            Tempo de Testes:
          </span>
        </div>
        <ul className="flex list-disc flex-col gap-3 pl-6 text-sm">
          <li>Segue um exemplo, mas cada aluno deve construir o seu:</li>
          <Code>
            import socket
            <br />
            choice = input(&quot;1) Server, 2) Client &gt;&quot;)
            <br />
            if choice == &#39;1&#39;:
            <br />
            <span className="text-green-800"># Create socket object</span>
            <br />
            server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            <br />
            <span className="text-green-800"># Bind it to an address</span>
            <br />
            server_socket.bind((&#39;0.0.0.0&#39;, 8086))
            <br />
            print(&quot;Waiting for connection...&quot;)
            <br />
            server_socket.listen()
            <br />
            connection, address = server_socket.accept()
            <br />
            print(&quot;Connection detected at... &quot; + str(address))
            <br />
            else:
            <br />
            address = input(&quot;What is the servers IP address? &gt;&quot;)
            <br />
            connection = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            <br />
            connection.connect((address, 8086))
            <br />
            name = input(&quot;What should we call you?&quot;)
            <br />
            connection.send(bytes(name + &quot; connected to the server&quot;,
            &#39;utf-8&#39;))
            <br />
            while True:
            <br />
            message = connection.recv(1024)
            <br />
            print(message.decode())
            <br />
            new_message = input(&quot;Type a message &gt;&quot;)
            <br />
            connection.send(new_message.encode())
          </Code>
          <Warnings>
            Tenha atenção a iteração do código quando o for programar, lembre-se
            de respeitar as regras de sintax e ler uma linha de cada vez.
          </Warnings>
        </ul>
        <hr className="mt-5 h-px border-0 bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="mb-10 mt-1 flex justify-between">
        <a
          href="/phase8"
          className="itens-center inline-flex cursor-pointer justify-center gap-2 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="-mr-1 mt-0.5 h-4 w-4" />
          Aplicação de Chat
        </a>
        <a
          href="/phase10"
          className="itens-center inline-flex cursor-pointer justify-center gap-1 overflow-hidden rounded-lg bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
        >
          FeedBack & Conclusão
          <ArrowRight className="-mr-1 mt-0.5 h-4 w-4" />
        </a>
      </div>
    </>
  );
}
