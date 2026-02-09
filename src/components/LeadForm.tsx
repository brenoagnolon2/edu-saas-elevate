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

        <div className="w-full rounded-lg p-4">
          <iframe
            src="https://app.lightforms.io/fu1WTYc?iframe=true&transparent=true"
            width="100%"
            height="600"
            frameBorder="0"
            allowTransparency={true}
            style={{
              border: "none",
              background: "transparent",
            }}
            title="Formulário de Agendamento"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
