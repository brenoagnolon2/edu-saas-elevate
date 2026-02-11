import { useEffect } from "react";

// Extend Window interface para incluir Tally e Meta Pixel
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
    fbq?: (action: string, event: string, params?: object) => void;
  }
}

const LeadForm = () => {
  useEffect(() => {
    // Carregar o script do Meta Pixel
    const metaPixelScript = document.createElement('script');
    metaPixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '235888179496707');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(metaPixelScript);

    // Carregar o script do Tally
    const tallyScript = document.createElement('script');
    tallyScript.src = 'https://tally.so/widgets/embed.js';
    tallyScript.async = true;
    
    tallyScript.onload = () => {
      // Inicializar os embeds do Tally
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    
    document.body.appendChild(tallyScript);

    // Listener para evento de submissão do Tally
    const handleTallySubmit = (event: Event) => {
      const customEvent = event as CustomEvent;
      
      console.log('Formulário enviado!', customEvent.detail);
      
      // Disparar evento de conversão do Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Agendamento E-Saas',
          content_category: 'Lead Form'
        });
      }
    };

    // Adicionar listener para o evento do Tally
    window.addEventListener('Tally.FormSubmitted', handleTallySubmit);
    
    return () => {
      // Limpar os scripts quando o componente for desmontado
      if (document.head.contains(metaPixelScript)) {
        document.head.removeChild(metaPixelScript);
      }
      if (document.body.contains(tallyScript)) {
        document.body.removeChild(tallyScript);
      }
      // Remover listener
      window.removeEventListener('Tally.FormSubmitted', handleTallySubmit);
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
