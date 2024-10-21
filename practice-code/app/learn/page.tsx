import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn 📚",
  description:
    "Una usina de ideas, seguimiento de tutoriales y desarrollo de aplicaciones",
};

export default function Page() {
  return (
    <div className="pl-8">
      <div className="text-black text-4xl">Primeros Pasos...</div>
      <br />
      <div className="text-slate-600">
        Para incluir emojis en el titulo: Copiar y pegar desde{" "}
        <a
          className="text-sky-500 hover:text-sky-600"
          href={"https://emojipedia.org/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          emojipedia.org
        </a>{" "}
        directamente en el title del Metadata.!!!
      </div>
      <br />
      <div className="text-slate-600">
        Para incluir iconos en formato svg: Instalar{" "}
        <a
          className="text-sky-500 hover:text-sky-600"
          href={"https://lucide.dev/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          lucide react
        </a>{" "}
        como indica en el sitio <code> pnpm install lucide-react </code> y se
        importan los iconos como como un componente:
        <pre>
          <code>
            {`
        import { Anvil } from 'lucide-react';

        const App = () => {
          return (
            < Anvil />
          );
        };

        export default App;
`}
          </code>
        </pre>
      </div>
      <br />
      <div className="text-slate-600">
        Usamos este sitio para incorporar componentes UI{" "}
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
    </div>
  );
}
