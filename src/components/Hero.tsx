import { ArrowRight } from "lucide-react";
import logoFull from "@/assets/logo_completa.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-spacing pt-32 text-center relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <img
          src={logoFull}
          alt="GG Social Studio"
          className="h-36 md:h-44 mx-auto mb-10 animate-fade-in bg-background"
        />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in text-foreground">
          Alcance resultados reais para sua marca no{" "}
          <span className="text-gradient">Instagram.</span>
        </h1>
        <p className="text-foreground/70 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in font-medium" style={{ animationDelay: "0.15s" }}>
          Na GG Social Studio, os designs são pensados para conectar sua marca
          com o público, aumentar o engajamento e fortalecer sua presença no
          Instagram. Cada post tem um objetivo claro e contribui para o
          crescimento do seu negócio.
        </p>
        <a
          href="https://wa.me/5588921745781"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 glow-shadow animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          Quero gerar resultados
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
