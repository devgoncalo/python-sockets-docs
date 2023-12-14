"use client";

import Image from "next/image";
import pythonLogo from "../assets/python-logo.png";
import Link from "next/link";

export function Hero() {
  return (
    <div className="mt-[10rem] space-y-6 md:mt-[8rem] lg:mt-[15rem] min-[1920px]:mt-[14rem]">
      <a href="/" className="flex items-center gap-3">
        <Image src={pythonLogo} alt="Python Logo" className="h-14 w-14" />
        <h1 className="text-3xl font-semibold uppercase text-gray-50">
          Python
        </h1>
      </a>

      <div className="max-w-[420px]">
        <h1 className="text-2xl font-extralight uppercase leading-tight text-gray-50 md:text-3xl">
          Programação de Sockets
        </h1>
        <h2 className="text-2xl font-extralight uppercase leading-tight text-yellow-500 md:text-3xl">
          em Linguagem Python
        </h2>
        <p className="text-md mt-3 leading-relaxed">
          Descubra como a programação de Sockets em Python pode dar vida a
          aplicações de rede poderosas, permitindo comunicações, envio e
          rececebimento de ficheiros, entre muitos outros.
        </p>
      </div>

      <Link
        className="group relative flex w-[10.8rem] cursor-pointer items-center space-x-2 rounded-md bg-gray-200 px-2 py-1.5 text-center text-sm text-gray-50 shadow-none outline-none outline-0 transition duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:bg-gray-700 lg:flex"
        href="https://github.com/devgoncalo/pxe-boot-docs"
      >
        <div className="flex h-4 w-4 items-center justify-center">
          <div className="flex h-4 w-4 items-center justify-center transition-all group-hover:h-10 group-hover:w-10 group-hover:text-yellow-400 group-focus:h-10 group-focus:w-10 group-focus:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sbui-icon"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
        </div>
        <h1 className="mt-0.5">STAR US ON GITHUB</h1>
      </Link>
    </div>
  );
}
