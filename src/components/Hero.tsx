import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import masterpieceLogo from "@/assets/masterpiece-logo.png";

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
      
      {/* Geometric elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src={masterpieceLogo} 
            alt="MasterPiece Company" 
            className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Transforme seu conhecimento em um{" "}
          <span className="text-gradient">Software Educacional</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          E-Saas personalizado: da extração da sua metodologia até uma plataforma tecnológica completa com IA integrada
        </p>

        <div className="pt-8">
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

export default Hero;
