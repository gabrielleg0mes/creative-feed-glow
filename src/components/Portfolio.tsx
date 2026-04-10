import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";
import belezaImage from "@/assets/portfolio/beleza.png";
import juridicoImage from "@/assets/portfolio/juridico.png";
import gastronomiaImage from "@/assets/portfolio/gastronomia.png";
import academiaImage from "@/assets/portfolio/academia.png";

interface ModalData {
  image: string;
  title: string;
  description: string;
}

const niches = [
  {
    label: "💄 Beleza",
    name: "Glow Studio",
    image: belezaImage,
    caption: "Posts que deixam seu perfil mais profissional",
    description: "Identidade visual completa para o segmento de beleza — posts e stories com estética sofisticada, cores harmoniosas e tipografia elegante para transmitir confiança e atrair novas clientes.",
  },
  {
    label: "⚖️ Jurídico",
    name: "Corporate",
    image: juridicoImage,
    caption: "Design que organiza e valoriza seu feed",
    description: "Comunicação visual séria e profissional para escritórios de advocacia — layouts limpos, paleta sóbria e tipografia que transmite autoridade e credibilidade no digital.",
  },
  {
    label: "🍔 Gastronomia",
    name: "Burguer",
    image: gastronomiaImage,
    caption: "Visual pensado para atrair clientes",
    description: "Artes vibrantes e apetitosas para o ramo gastronômico — composições que destacam os produtos, despertam o desejo e aumentam o engajamento do perfil.",
  },
  {
    label: "🏋️ Academia",
    name: "Wellness",
    image: academiaImage,
    caption: "Posts que deixam seu perfil mais profissional",
    description: "Design energético e motivacional para academias e personal trainers — visuais impactantes com foco em resultados, movimento e estilo de vida saudável.",
  },
];

const Portfolio = () => {
  const [modal, setModal] = useState<ModalData | null>(null);

  const openModal = (image: string, niche: typeof niches[0]) => {
    setModal({
      image,
      title: `${niche.label} — ${niche.name}`,
      description: niche.description,
    });
  };

  return (
    <section className="section-spacing relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="section-divider mb-6" />
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Portfólio</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Estes são alguns exemplos de design para esses nichos, mas desenvolvo
          projetos para qualquer área, sempre adaptando ao perfil de cada negócio.
        </p>

        <div className="space-y-20">
          {niches.map((niche, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">
                  {niche.label}{" "}
                  <span className="text-muted-foreground font-normal text-base">— {niche.name}</span>
                </h3>
                <p className="text-sm text-muted-foreground">{niche.caption}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div
                  className="rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                  onClick={() => openModal(niche.image, niche)}
                >
                  <img
                    src={niche.image}
                    alt={`${niche.label} — ${niche.name}`}
                    loading="lazy"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!modal} onOpenChange={() => setModal(null)}>
        <DialogContent className="max-w-2xl p-0 bg-card backdrop-blur-xl border-primary/30 overflow-hidden rounded-2xl gap-0 [&>button]:hidden">
          {modal && (
            <>
              <DialogClose className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-md">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </DialogClose>
              <img
                src={modal.image}
                alt={modal.title}
                className="w-full max-h-[60vh] object-contain bg-muted"
              />
              <div className="p-6 space-y-2">
                <DialogTitle className="text-lg font-bold text-foreground">
                  {modal.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {modal.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
