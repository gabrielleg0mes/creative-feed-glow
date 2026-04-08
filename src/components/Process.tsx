const steps = [
  "Entendimento do seu negócio e público",
  "Organização do estilo visual",
  "Criação dos designs alinhados à sua marca",
  "Entrega pronta para postagem",
];

const Process = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Como <span className="text-gradient">funciona</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass-card hover-card-effect rounded-xl p-6 flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="text-2xl font-extrabold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
