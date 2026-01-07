import { TrendingUp, DollarSign, BarChart3, ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const MarketData = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const duration = 2000;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end]);

    return <span>{prefix}{count}{suffix}</span>;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Não precisa acreditar no que estamos falando para você, confira esses dados:
          </h2>
          <p className="text-lg text-[#DAD5D0]">
            O mercado global de E-Saas educacional está explodindo
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Card 1 - Crescimento Global */}
          <div 
            className="bg-[#1C1C1A] border border-[#DAD5D0]/20 rounded-2xl p-8 transition-all duration-300 hover:border-[#FFD700] hover:-translate-y-1 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <TrendingUp className="w-12 h-12 text-[#FFD700] mb-6" />
            <div className="text-5xl font-bold text-[#FFD700] mb-4">
              {isVisible && <Counter end={94} prefix="US$ " suffix=",8 bi" />}
            </div>
            <p className="text-white text-lg mb-3">
              Projeção do mercado global de SaaS educacional até 2030
            </p>
            <p className="text-[#DAD5D0] text-sm">
              Crescimento de 14% ao ano desde 2023
            </p>
          </div>

          {/* Card 2 - Investimentos LATAM */}
          <div 
            className="bg-[#1C1C1A] border border-[#DAD5D0]/20 rounded-2xl p-8 transition-all duration-300 hover:border-[#FFD700] hover:-translate-y-1 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <DollarSign className="w-12 h-12 text-[#FFD700] mb-6" />
            <div className="text-5xl font-bold text-[#FFD700] mb-4">
              {isVisible && <Counter end={600} prefix="US$ " suffix=" milhões" />}
            </div>
            <p className="text-white text-lg mb-3">
              Investidos em EdTechs na América Latina desde 2015
            </p>
            <p className="text-[#DAD5D0] text-sm">
              Brasil concentra 80% desse total
            </p>
          </div>

          {/* Card 3 - Valuation Superior */}
          <div 
            className="bg-[#1C1C1A] border border-[#DAD5D0]/20 rounded-2xl p-8 transition-all duration-300 hover:border-[#FFD700] hover:-translate-y-1 hover:shadow-lg animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <BarChart3 className="w-12 h-12 text-[#FFD700] mb-6" />
            <div className="text-5xl font-bold text-[#FFD700] mb-4">
              {isVisible && <Counter end={11} suffix=",5x" />}
            </div>
            <p className="text-white text-lg mb-3">
              Múltiplo médio de receita para EdTech SaaS
            </p>
            <p className="text-[#DAD5D0] text-sm">
              vs. 7,0x de modelos tradicionais
            </p>
          </div>
        </div>

        {/* Context Card */}
        <div 
          className="bg-[#FFD700]/5 border-2 border-[#FFD700] rounded-2xl p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
            O que isso significa para você?
          </h3>
          <p className="text-white text-lg leading-relaxed mb-6">
            Empresas que incorporam SaaS educacional atraem valuations 2 a 3 vezes sua receita recorrente anual (ARR) — significativamente acima de negócios educacionais tradicionais. O modelo SaaS reforça métricas valorizadas pelo mercado: recorrência, crescimento e margem elevada.
          </p>
          <p className="text-[#DAD5D0] text-sm">
            Fonte: Grand View Research, Distrito EdTech Report 2024, Finro Financial Consulting
          </p>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105"
          >
            Falar com Especialista
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketData;
