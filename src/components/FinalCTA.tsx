import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FinalCTA = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="py-20 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pronto para revolucionar sua oferta educacional?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende uma apresentação personalizada do E-Saas
          </p>
        </div>

        <Button 
          size="lg"
          onClick={scrollToForm}
          className="bg-primary hover:bg-primary/90 text-xl px-12 py-8 rounded-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105"
        >
          <Sparkles className="mr-2 h-6 w-6" />
          Fale com Especialista
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
