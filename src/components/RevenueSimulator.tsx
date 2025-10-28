import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const RevenueSimulator = () => {
  const [students, setStudents] = useState(500);
  const [monthlyFee, setMonthlyFee] = useState(197);

  const totalRevenue = students * monthlyFee * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-card border-border/50 shadow-2xl backdrop-blur-sm">
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">
                Calcule o potencial do seu E-Saas
              </h2>
              <p className="text-muted-foreground text-lg">
                Veja quanto você pode gerar com sua plataforma educacional
              </p>
            </div>

            <div className="space-y-8">
              {/* Students Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-medium">Número de Alunos</label>
                  <span className="text-2xl font-bold text-primary">{students.toLocaleString('pt-BR')}</span>
                </div>
                <Slider
                  value={[students]}
                  onValueChange={(value) => setStudents(value[0])}
                  min={50}
                  max={10000}
                  step={50}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>50</span>
                  <span>10.000</span>
                </div>
              </div>

              {/* Monthly Fee Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-lg font-medium">Mensalidade do E-Saas</label>
                  <span className="text-2xl font-bold text-primary">{formatCurrency(monthlyFee)}</span>
                </div>
                <Slider
                  value={[monthlyFee]}
                  onValueChange={(value) => setMonthlyFee(value[0])}
                  min={47}
                  max={997}
                  step={10}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>R$ 47</span>
                  <span>R$ 997</span>
                </div>
              </div>

              {/* Result */}
              <div className="pt-6 space-y-4">
                <div className="text-center p-8 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Potencial de Receita Anual</p>
                  <p className="text-5xl md:text-6xl font-bold text-gradient">
                    {formatCurrency(totalRevenue)}
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Baseado em {students.toLocaleString('pt-BR')} alunos pagando {formatCurrency(monthlyFee)}/mês
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RevenueSimulator;
