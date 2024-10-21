import { Button } from "@/components/ui/button";

export default function LandingPage() {
    return (
          
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
                 ¿Cansado de buscar entre páginas y páginas de PDF? ¡Ahora puedes chatear directamente con tus documentos! Carga cualquier PDF y obtén respuestas instantáneas a tus preguntas.
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

    );
  }