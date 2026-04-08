import { ArrowRight } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-spacing pt-32 text-center relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <img
          src={logoFull}
          alt="GG Social Studio"
          className="h-28 md:h-36 mx-auto mb-10 animate-fade-in"
        />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
          Alcance resultados reais para sua marca no{" "}
          <span className="text-gradient">Instagram.</span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Na GG Social Studio, os designs são pensados para conectar sua marca
          com o público, aumentar o engajamento e fortalecer sua presença no
          Instagram. Cada post tem um objetivo claro e contribui para o
          crescimento do seu negócio.
        </p>
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-[1.03] pulse-glow animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Quero gerar resultados
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
