import { ArrowRight } from "lucide-react";

const CTAFinal = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Se o seu perfil hoje não representa o seu negócio,{" "}
          <span className="text-gradient">é possível melhorar.</span>
        </h2>
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.03] glow-shadow"
        >
          Falar com a especialista
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTAFinal;
