import { Lightbulb } from "lucide-react";

const WhatIsESaas = () => {
  return (
    <section className="py-20 md:py-24 px-6 bg-[#1C1C1A]">
      <div className="max-w-[900px] mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-4 animate-fade-in">
          <Lightbulb className="w-10 h-10 text-[#FFD700]" />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 animate-fade-in">
          Antes de qualquer coisa: o que é um Software Educacional (E-Saas)?
        </h2>

        {/* Main Copy */}
        <div className="space-y-6 text-center text-lg text-white/90 animate-fade-in">
          <p className="leading-relaxed">
            Imagine que, além de ensinar seu aluno, você pudesse fazer algo por ele — literalmente prestar um serviço que resolve problemas reais.
          </p>

          <p className="leading-relaxed">
            Você poderia cobrar muito mais caro. O problema? Seria impossível escalar, pois dependeria 100% do seu tempo e energia.
          </p>

          <p className="leading-relaxed">
            É aqui que entra o{" "}
            <span className="font-bold text-[#6F4A95]">
              SaaS — Software as a Service
            </span>{" "}
            (Software como Serviço):
          </p>

          <p className="leading-relaxed">
            Você continua fazendo algo pelo seu aluno, mas agora através de ferramentas automatizadas, IA personalizada e recursos interativos que funcionam 24/7 — sem depender de você.
          </p>
        </div>

        {/* Result Card */}
        <div className="mt-8 p-8 rounded-2xl bg-[#6F4A95]/15 border border-[#6F4A95]/30 max-w-[700px] mx-auto animate-fade-in">
          <p className="text-xl font-bold text-[#FFD700] mb-4 text-center">
            O resultado?
          </p>
          <p className="text-lg text-white/90 text-center leading-relaxed">
            Um produto{" "}
            <span className="font-semibold text-[#6F4A95]">
              infinitamente escalável
            </span>
            , com{" "}
            <span className="font-semibold text-[#6F4A95]">
              custo marginal próximo a zero
            </span>{" "}
            e que{" "}
            <span className="font-semibold text-[#FFD700]">
              vale 3-10x mais
            </span>{" "}
            no mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsESaas;
