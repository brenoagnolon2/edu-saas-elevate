import { TrendingUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValuationHighlight = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-[900px] mx-auto">
        <div className="relative p-8 md:p-12 rounded-[20px] bg-gradient-to-br from-[#6F4A95]/10 to-transparent border-2 border-[#6F4A95] shadow-[0_8px_32px_rgba(111,74,149,0.3)] hover:shadow-[0_8px_40px_rgba(111,74,149,0.5)] transition-all duration-500 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <TrendingUp className="w-12 h-12 text-[#FFD700]" />
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 leading-relaxed">
            Apenas um de todos os tópicos que você leu acima já lhe trará a clareza necessária para marcar uma conversa conosco:
          </h2>

          {/* Highlighted Quote */}
          <div className="my-8">
            <p className="text-3xl md:text-4xl font-bold text-[#FFD700] text-center leading-tight">
              "Valuation 3-10x maior"
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-white leading-relaxed">
              Qual o seu valuation com sua mentoria ou seus cursos hoje? Conseguiria antecipar 3 a 10 anos dos seus lucros para o hoje?
            </p>

            <p className="text-lg md:text-xl font-bold text-[#FFD700] leading-relaxed">
              Com o E-Saas você constrói valuation a partir do mesmo conhecimento que você vende hoje.
            </p>

            <p className="text-base md:text-lg text-[#DAD5D0] leading-relaxed max-w-[800px] mx-auto">
              Detalhe: sem depender tanto da sua energia na entrega, ficando independente de você assim como a construção do seu Software, que será feita por nós. 
              Mas para tudo isso ser possível, precisamos de você e do seu conhecimento e extrair esse conhecimento para estruturá-lo é a nossa especialidade há 4 anos.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex justify-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-[#6F4A95] hover:bg-[#6F4A95]/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Falar com Especialista
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuationHighlight;
