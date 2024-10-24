import { Button } from "@/components/ui/button";
import { Fan } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#062427]">
        <div className="section-container flex flex-col text-white md:flex-row items-center">
          {/* Left */}
          <div className="flex flex-col mb-32 space-y-12 text-center md:w-1/2">
            {/* Hader */}
            <h1 className="max-w-md text-4xl md:text-5xl md:leading-tight">
              Chatea con cualquier documento PDF
            </h1>
            {/* Description */}

            <p className="max-w-md text-center md:max-w-sm text-with/80 font-light leading-7">
              ¿Cansado de buscar entre páginas y páginas de PDF? ¡Ahora puedes
              chatear directamente con tus documentos! Carga cualquier PDF y
              obtén respuestas instantáneas a tus preguntas.
            </p>
            {/* CTA - Call to action */}
            <div className="p-16">
              <Button variant="destructive">Ingresar</Button>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2">
            <img src="lupa.jpeg" alt="" />
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="section-container">
        <h1 className="text-center text-4xl font-semibold mb-5 sm:mb-10 mt-5">
          Cómo funciona
        </h1>
        <div className="text-black grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {/* F1 */}
          <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-lg">
            <div className="flex-col">
              <div className="flex items-center justify-center">
                <img src="F1.svg" alt="" />
              </div>
              <p className="text-xl font-medium text-center">
                {" "}
                Carga documentos PDF
              </p>
            </div>
          </div>
          {/* F2 */}
          <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-lg">
            <div className="flex-col">
              <div className="flex items-center justify-center">
                <img src="F2.svg" alt="" />
              </div>
              <p className="text-xl font-medium text-center">
                {" "}
                Preguntale al PDF
              </p>
            </div>
          </div>
          {/* F3 */}
          <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-lg">
            <div className="flex-col">
              <div className="flex items-center justify-center">
                <img src="F3.svg" alt="" />
              </div>
              <p className="text-xl font-medium text-center">
                Chatea con el PDF
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
