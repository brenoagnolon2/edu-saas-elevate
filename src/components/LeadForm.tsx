import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    email: "",
    whatsapp: "",
    instagram: "",
    fullName: "",
    position: "",
    company: "",
    revenue: "",
    students: "",
    investment: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const formatInstagram = (value: string) => {
    if (!value.startsWith("@") && value.length > 0) {
      return "@" + value;
    }
    return value;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.email) {
        newErrors.email = "E-mail é obrigatório";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "E-mail inválido";
      }
    }

    if (step === 2) {
      if (!formData.fullName) newErrors.fullName = "Nome é obrigatório";
      if (!formData.position) newErrors.position = "Cargo é obrigatório";
      if (!formData.company) newErrors.company = "Nome da empresa/especialista é obrigatório";
    }

    if (step === 3) {
      if (!formData.revenue) newErrors.revenue = "Faturamento é obrigatório";
      if (!formData.students) newErrors.students = "Número de alunos é obrigatório";
      if (!formData.investment) newErrors.investment = "Investimento disponível é obrigatório";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSubmitted(true);
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve para agendar sua apresentação.",
    });
  };

  const progress = (step / 3) * 100;

  if (submitted) {
    return (
      <section id="lead-form" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center bg-card border-border/50 shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Obrigado pelo interesse!</h2>
            <p className="text-muted-foreground text-lg">
              Recebemos suas informações e entraremos em contato em breve para agendar uma apresentação personalizada do E-Saas.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Agende sua Apresentação</h2>
          <p className="text-muted-foreground text-lg">
            Preencha os dados para conhecer o E-Saas personalizado
          </p>
        </div>

        <Card className="p-8 md:p-10 bg-card border-border/50 shadow-2xl">
          {/* Progress Bar */}
          <div className="mb-8 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Etapa {step} de 3</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Seus Contatos</h3>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) })}
                  maxLength={15}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  placeholder="@seuinstagram"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: formatInstagram(e.target.value) })}
                />
              </div>

              <Button 
                onClick={handleNext}
                className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                size="lg"
              >
                Próximo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Sobre Você</h3>
              
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo *</Label>
                <Input
                  id="fullName"
                  placeholder="Seu nome completo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Cargo *</Label>
                <Select 
                  value={formData.position}
                  onValueChange={(value) => setFormData({ ...formData, position: value })}
                >
                  <SelectTrigger className={errors.position ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione seu cargo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="socio">Sócio</SelectItem>
                    <SelectItem value="ceo">CEO/Presidente</SelectItem>
                    <SelectItem value="diretor-vendas">Diretor de Vendas</SelectItem>
                    <SelectItem value="diretor-marketing">Diretor de Marketing</SelectItem>
                    <SelectItem value="gerente-vendas">Gerente de Vendas</SelectItem>
                    <SelectItem value="gerente-marketing">Gerente de Marketing</SelectItem>
                    <SelectItem value="vendedor">Vendedor/SDR</SelectItem>
                  </SelectContent>
                </Select>
                {errors.position && <p className="text-sm text-destructive">{errors.position}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Nome da Empresa/Especialista *</Label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa ou seu nome"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={errors.company ? "border-destructive" : ""}
                />
                {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 py-6"
                  size="lg"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleNext}
                  className="flex-1 bg-primary hover:bg-primary/90 py-6"
                  size="lg"
                >
                  Próximo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Contexto do Negócio</h3>
              
              <div className="space-y-2">
                <Label htmlFor="revenue">Faturamento Anual *</Label>
                <Select 
                  value={formData.revenue}
                  onValueChange={(value) => setFormData({ ...formData, revenue: value })}
                >
                  <SelectTrigger className={errors.revenue ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione o faturamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ate-100k">Até R$ 100k</SelectItem>
                    <SelectItem value="100k-500k">R$ 100k - R$ 500k</SelectItem>
                    <SelectItem value="500k-1m">R$ 500k - R$ 1M</SelectItem>
                    <SelectItem value="1m-5m">R$ 1M - R$ 5M</SelectItem>
                    <SelectItem value="acima-5m">Acima de R$ 5M</SelectItem>
                  </SelectContent>
                </Select>
                {errors.revenue && <p className="text-sm text-destructive">{errors.revenue}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="students">Número de Alunos Atuais *</Label>
                <Input
                  id="students"
                  type="number"
                  placeholder="Ex: 500"
                  value={formData.students}
                  onChange={(e) => setFormData({ ...formData, students: e.target.value })}
                  className={errors.students ? "border-destructive" : ""}
                />
                {errors.students && <p className="text-sm text-destructive">{errors.students}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment">Investimento Mensal Disponível *</Label>
                <Select 
                  value={formData.investment}
                  onValueChange={(value) => setFormData({ ...formData, investment: value })}
                >
                  <SelectTrigger className={errors.investment ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione o investimento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ate-5k">Até R$ 5k</SelectItem>
                    <SelectItem value="5k-15k">R$ 5k - R$ 15k</SelectItem>
                    <SelectItem value="15k-30k">R$ 15k - R$ 30k</SelectItem>
                    <SelectItem value="30k-50k">R$ 30k - R$ 50k</SelectItem>
                    <SelectItem value="acima-50k">Acima de R$ 50k</SelectItem>
                  </SelectContent>
                </Select>
                {errors.investment && <p className="text-sm text-destructive">{errors.investment}</p>}
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleBack}
                  variant="outline"
                  className="flex-1 py-6"
                  size="lg"
                >
                  <ChevronLeft className="mr-2 h-5 w-5" />
                  Voltar
                </Button>
                <Button 
                  onClick={handleSubmit}
                  className="flex-1 bg-primary hover:bg-primary/90 py-6 text-lg"
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Agendar Apresentação"}
                  {!loading && <ChevronRight className="ml-2 h-5 w-5" />}
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;
