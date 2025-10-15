import masterpieceLogo from "@/assets/masterpiece-logo.png";

const Credibility = () => {
  return (
    <section className="py-20 px-4 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <img 
            src={masterpieceLogo} 
            alt="MasterPiece Company" 
            className="h-20 w-auto opacity-80"
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            4 anos extraindo metodologias de grandes mentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tecnologia + Educação: nossa especialidade desde 2021
          </p>
        </div>

        <div className="pt-6 flex flex-wrap justify-center gap-8 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">4+</p>
            <p className="text-sm text-muted-foreground">Anos de Experiência</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">Foco em Educação</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-primary">IA</p>
            <p className="text-sm text-muted-foreground">Integrada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
