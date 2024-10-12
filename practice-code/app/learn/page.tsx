import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Learn 📚",
    description: "Una usina de ideas, seguimiento de tutoriales y desarrollo de aplicaciones",
  };

  export default function Page() {
  return (<div>

    <div>Primeros Pasos...</div>
    <div className='text-cyan-300'>
    Copiar y pegar desde <a className="text-sky-500 hover:text-sky-600" href={"https://emojipedia.org/"} target="_blank" rel="noopener noreferrer">emojipedia.org</a> en el title del Metadata.!!!
    </div>
    <div className='text-red-300'>
    Copiar y pegar desde <a className="text-sky-500 hover:text-sky-600" href={"https://lucide.dev/"} target="_blank" rel="noopener noreferrer">lucide react</a> en el title del Metadata.!!!
    </div>
  </div>
  );
}

