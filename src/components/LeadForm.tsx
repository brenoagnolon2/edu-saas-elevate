const LeadForm = () => {
  return (
    <section id="lead-form" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Agende sua Apresentação</h2>
          <p className="text-muted-foreground text-lg">
            Preencha os dados para conhecer o E-Saas personalizado
          </p>
        </div>

        <div className="w-full">
          <iframe
            data-tally-src="https://tally.so/embed/D440vE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulário de Agendamento"
            className="rounded-lg"
          ></iframe>
          
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
              `
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
