import { ArrowRight } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center section-spacing pt-32 text-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <img
          src={logoFull}
          alt="GG Social Studio"
          className="h-36 md:h-44 mx-auto mb-10 animate-fade-in drop-shadow-md"
        />
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in text-foreground">
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
          href="https://wa.me/5588921745781"
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
