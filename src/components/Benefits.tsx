import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Brain, Settings, Star, ArrowDown } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Metodologia Estruturada",
    description: "Extraímos e organizamos todo seu conhecimento em uma estrutura pedagógica completa"
  },
  {
    icon: Brain,
    title: "IA Personalizada",
    description: "Assistente inteligente treinado com sua metodologia para suporte aos alunos 24/7"
  },
  {
    icon: Settings,
    title: "Ferramentas Interativas",
    description: "Recursos tecnológicos que potencializam o aprendizado e engajamento"
  },
  {
    icon: Star,
    title: "Experiência Premium",
    description: "Plataforma completa com design moderno e experiência de uso excepcional"
  }
];

const Benefits = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Benefícios do E-Saas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme sua expertise em uma solução tecnológica completa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border/50 md:hover:border-primary/50 md:transition-all md:duration-300 md:hover:shadow-2xl md:hover:shadow-primary/20 md:hover:scale-105 group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
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

export default Benefits;
