import { Card } from "@/components/ui/card";
import { FileText, Brain, Settings, Star } from "lucide-react";

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
              className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 group"
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
      </div>
    </section>
  );
};

export default Benefits;
