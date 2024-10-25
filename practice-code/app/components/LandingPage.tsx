import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#062427]">
        <div className="section-container flex flex-col text-white md:flex-row items-center">
          {/* Left */}
          <div className="flex flex-col mb-32 space-y-12 text-center md:w-1/2">
            {/* Hader */}
            <h1 className="text-4xl md:text-5xl md:leading-tight">
              Chatea con cualquier documento PDF
            </h1>
            {/* Description */}

            <p className="text-center md:max-w-sm text-with/80 font-light leading-7">
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
      <section className="section-container mt-12">
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

      {/* CTA*/}
      <section className="section-container mt-12">
        <h1 className="font-semibold text-4xl text-center">Empecemos</h1>
        <p className="text-center mt-6">
          Carga un documento y empieza a chatear con él ahora mismo.
          <br />
          No se requiere tarjeta de credito.
        </p>

        <div className="grid justify-items-center w-full mx-auto px-4 mt-4 mb-12">
          <Button variant="destructive">Registrate Gratis</Button>
        </div>
      </section>
    </>
  );
}
