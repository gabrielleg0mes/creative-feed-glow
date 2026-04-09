const steps = [
  "Entendimento do seu negócio e público",
  "Organização do estilo visual",
  "Criação dos designs alinhados à sua marca",
  "Entrega pronta para postagem",
];

const Process = () => {
  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="section-divider mb-6" />
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Como <span className="text-gradient">funciona</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 flex items-center gap-4 animate-fade-in border border-border/60 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <span className="text-lg font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-foreground font-medium">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
