import { CheckCircle } from "lucide-react";

const items = [
  "Um perfil mais organizado",
  "Um visual alinhado com seu negócio",
  "Mais confiança para quem chega no seu Instagram",
  "Posts que chamam atenção e fazem sentido",
];

const Benefits = () => {
  return (
    <section className="section-spacing relative">
      <div className="container mx-auto max-w-4xl">
        <div className="section-divider mb-6" />
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Mais do que um design <span className="text-gradient">bonito</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 flex items-start gap-4 animate-fade-in border border-border/60 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-medium pt-2">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
