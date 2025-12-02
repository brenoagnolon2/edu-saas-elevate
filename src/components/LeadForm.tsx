import { useEffect } from "react";

// Extend Window interface para incluir Tally
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const LeadForm = () => {
  useEffect(() => {
    // Carregar o script do Tally
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    
    script.onload = () => {
      // Inicializar os embeds do Tally
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Limpar o script quando o componente for desmontado
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="lead-form" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Agende sua Apresentação</h2>
          <p className="text-muted-foreground text-lg">
            Preencha os dados para conhecer o E-Saas personalizado
          </p>
        </div>

        <div className="w-full rounded-lg p-4">
          <iframe
            data-tally-src="https://tally.so/embed/D440vE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulário de Agendamento"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
