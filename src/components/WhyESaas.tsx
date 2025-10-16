import { Card } from "@/components/ui/card";
import { DollarSign, Settings, Star, Award, Target, Check } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    title: "Financeiro",
    benefits: [
      "Receita recorrente previsível (MRR)",
      "Maior Lifetime Value (LTV)",
      "Cashflow constante e escalável",
      "Margens superiores",
      "Precificação flexível"
    ]
  },
  {
    icon: Settings,
    title: "Operacional",
    benefits: [
      "Escalabilidade infinita",
      "Automação completa",
      "Dados em tempo real",
      "Atualizações centralizadas",
      "Suporte escalável com IA"
    ]
  },
  {
    icon: Star,
    title: "Experiência do Aluno",
    benefits: [
      "Acesso contínuo ao conteúdo",
      "Sempre atualizado",
      "IA personalizada",
      "Gamificação integrada",
      "Comunidade ativa"
    ]
  },
  {
    icon: Award,
    title: "Posicionamento",
    benefits: [
      "Autoridade premium no mercado",
      "Diferenciação competitiva",
      "Independência de plataformas",
      "Brand fortalecido",
      "Barreira de entrada alta"
    ]
  },
  {
    icon: Target,
    title: "Estratégico",
    benefits: [
      "Redução de refund/churn",
      "Retenção maior de alunos",
      "Upsell facilitado",
      "Dados 100% proprietários",
      "Valuation 3-10x maior"
    ]
  }
];

const WhyESaas = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por que transformar seu conhecimento em um E-Saas?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vantagens estratégicas que vão além de um curso tradicional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className="p-8 bg-primary/5 border-border/50 hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
              style={{ gridColumn: index >= 3 ? 'span 1' : 'span 1' }}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  {card.title}
                </h3>
                
                <ul className="space-y-3">
                  {card.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyESaas;
