"use client";

import {
  NavigationArrow,
  HardDrives,
  Wrench,
  Desktop,
  ArrowsDownUp,
  CellSignalFull,
  AppWindow,
  CodeSimple,
} from "@phosphor-icons/react";
import { Radio, Sparkles } from "lucide-react";

export function Introduction() {
  return (
    <div>
      <header className="mb-6 space-y-2 md:mt-16">
        <p className="text-sm font-medium text-yellow-500">BOAS VINDAS</p>
        <h1 className="text-2xl font-medium text-slate-900 dark:text-gray-50 md:text-3xl">
          Á NOSSA DOCUMENTAÇÃO
        </h1>
      </header>
      <p className="lead">
        Esta documentação é um guia completo para dominar a programação de
        Sockets em Python. Vai aprender a criar aplicações de rede
        personalizadas, estabelecer conexões e transmitir dados de maneira
        eficaz. Estamos empolgados para ajudá-lo nesta jornada.
      </p>
      <div className="not-prose my-12 grid grid-cols-1 gap-6">
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.blue.900),theme(colors.blue.800),theme(colors.blue.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <NavigationArrow size={30} className="text-blue-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase1">Modelação do Nivel de Trabalho de Rede</a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.yellow.700),theme(colors.yellow.600),theme(colors.yellow.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <Desktop size={30} className="text-yellow-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase2">
                <span className="absolute -inset-px rounded-xl"></span>O Modelo
                Cliente Servidor
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.blue.900),theme(colors.blue.800),theme(colors.blue.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <HardDrives size={30} className="text-blue-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase3">
                <span className="absolute -inset-px rounded-xl"></span>
                Introdução aos Sockets
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.yellow.700),theme(colors.yellow.600),theme(colors.yellow.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <Wrench size={30} className="text-yellow-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase4">
                <span className="absolute -inset-px rounded-xl"></span>
                Usar Sockets em Python
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.blue.900),theme(colors.blue.800),theme(colors.blue.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <Radio size={30} className="text-blue-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase5">
                <span className="absolute -inset-px rounded-xl"></span>
                Conectando um Socket
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.yellow.700),theme(colors.yellow.600),theme(colors.yellow.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <ArrowsDownUp size={30} className="text-yellow-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase6">
                <span className="absolute -inset-px rounded-xl"></span>
                Enviar e Receber Dados
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.blue.900),theme(colors.blue.800),theme(colors.blue.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <CellSignalFull size={30} className="text-blue-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase7">
                <span className="absolute -inset-px rounded-xl"></span>
                Streaming
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.yellow.700),theme(colors.yellow.600),theme(colors.yellow.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <AppWindow size={30} className="text-yellow-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase8">
                <span className="absolute -inset-px rounded-xl"></span>
                Aplicação de Chat
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.blue.900),theme(colors.blue.800),theme(colors.blue.700))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <CodeSimple size={30} className="text-blue-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase9">
                <span className="absolute -inset-px rounded-xl"></span>
                Criar o Código Para a Aplicação
              </a>
            </h2>
          </div>
        </div>
        <div className="group relative rounded-xl border border-slate-200 dark:border-gray-400">
          <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.red.500)),var(--quick-links-hover-bg,theme(colors.red.500)))_padding-box,linear-gradient(to_top,theme(colors.yellow.700),theme(colors.yellow.600),theme(colors.yellow.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.700)]"></div>
          <div className="relative flex items-center gap-4 overflow-hidden rounded-xl p-6">
            <Sparkles size={30} className="text-yellow-500" />
            <h2 className="font-display text-xl uppercase text-slate-900 dark:text-white">
              <a href="/phase10">
                <span className="absolute -inset-px rounded-xl"></span>
                FeedBack & Pontos Chave
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
