import { CheckCircle } from "lucide-react";

const items = [
  "Um perfil mais organizado",
  "Um visual alinhado com seu negócio",
  "Mais confiança para quem chega no seu Instagram",
  "Posts que chamam atenção e fazem sentido",
];

const Benefits = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Mais do que um design <span className="text-gradient">bonito</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card hover-card-effect rounded-xl p-6 flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
