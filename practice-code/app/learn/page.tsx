import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn 📚",
  description:
    "Una usina de ideas, seguimiento de tutoriales y desarrollo de aplicaciones",
};

export default function Page() {
  return (
    <div className="pl-8">
      <div className="text-black text-4xl">👀 Primeros Pasos...</div>
      <br />

      <div>
        Siguiendo el tutorial de{" "}
        <a
          className="text-sky-500 hover:text-sky-600"
          href={"https://code4startup.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code 4 Startup
        </a>{" "}
        para implementar AI en mi sitio web{" "}
        <Link href="/PDF" className="text-sky-500 hover:text-sky-600">
          Chatear con PDFs
        </Link>
      </div>
      <br />
      <div className="text-slate-600">
        A- Para incluir emojis 😀 en el titulo: Copiar y pegar desde{" "}
        <a
          className="text-sky-500 hover:text-sky-600"
          href={"https://emojipedia.org/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          emojipedia.org
        </a>{" "}
        directamente en el title del Metadata ❗❗❗
      </div>
      <br />
      <div className="text-slate-600">
        B- Para incluir iconos en formato svg: Instalar{" "}
        <a
          className="text-sky-500 hover:text-sky-600"
          href={"https://lucide.dev/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          lucide react
        </a>{" "}
        como indica en el sitio{" "}
        <code className="language-js"> pnpm install lucide-react </code> y se
        importan los iconos como como un componente:
        <br />
        <pre>
          <code>{`
import { Aperture } from 'lucide-react';

  const App = () => {
    return (
      <Aperture />
    );
  };

export default App;

          `}</code>
        </pre>
        <p className="flex">
          O podes copiar el codigo svg y pegarlo directamente:
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-binoculars"
          >
            <path d="M10 10h4" />
            <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
            <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" />
            <path d="M 22 16 L 2 16" />
            <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
            <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
          </svg>
        </p>
      </div>
      <br />
      <div className="text-slate-600">
        C- Usamos este sitio para incorporar componentes UI{" "}
        <a
          className="text-sky-500 hover:text-sky-600"
          href={"https://ui.shadcn.com/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shadcn/UI
        </a>
        . Vamos a la parte de Docs y seguimos los pasos que nos indican alli!!!
      </div>
      <br />
      <div className="text-slate-600">
        D- Usamos este sitio para incluir un "drop zone" para la carga de
        documentos{" "}
        <a
          className="text-sky-500 hover:text-sky-600"
          href={"https://react-dropzone.js.org/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          react-dropzone
        </a>
        .
      </div>
      <p>🍎</p>
    </div>
  );
}
