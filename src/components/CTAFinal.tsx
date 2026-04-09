import { ArrowRight } from "lucide-react";

const CTAFinal = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-400/5 to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="bg-card border border-border/60 rounded-3xl p-10 md:p-16 shadow-sm">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Se o seu perfil hoje não representa o seu negócio,{" "}
            <span className="text-gradient">é possível melhorar.</span>
          </h2>
          <a
            href="https://wa.me/5588921745781"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 glow-shadow"
          >
            Entrar em contato
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
