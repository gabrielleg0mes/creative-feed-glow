import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import beautyPost from "@/assets/portfolio/beauty-post.jpg";
import beautyStory1 from "@/assets/portfolio/beauty-story1.jpg";
import beautyStory2 from "@/assets/portfolio/beauty-story2.jpg";
import legalPost from "@/assets/portfolio/legal-post.jpg";
import legalStory1 from "@/assets/portfolio/legal-story1.jpg";
import legalStory2 from "@/assets/portfolio/legal-story2.jpg";
import foodPost from "@/assets/portfolio/food-post.jpg";
import foodStory1 from "@/assets/portfolio/food-story1.jpg";
import foodStory2 from "@/assets/portfolio/food-story2.jpg";
import fitnessPost from "@/assets/portfolio/fitness-post.jpg";
import fitnessStory1 from "@/assets/portfolio/fitness-story1.jpg";
import fitnessStory2 from "@/assets/portfolio/fitness-story2.jpg";

const niches = [
  {
    label: "💄 Beleza",
    name: "Glow Studio",
    post: beautyPost,
    stories: [beautyStory1, beautyStory2],
    caption: "Posts que deixam seu perfil mais profissional",
  },
  {
    label: "⚖️ Jurídico",
    name: "Corporate",
    post: legalPost,
    stories: [legalStory1, legalStory2],
    caption: "Design que organiza e valoriza seu feed",
  },
  {
    label: "🍔 Gastronomia",
    name: "Burguer",
    post: foodPost,
    stories: [foodStory1, foodStory2],
    caption: "Visual pensado para atrair clientes",
  },
  {
    label: "🏋️ Academia",
    name: "Wellness",
    post: fitnessPost,
    stories: [fitnessStory1, fitnessStory2],
    caption: "Posts que deixam seu perfil mais profissional",
  },
];

const Portfolio = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

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
          projetos para qualquer área, sempre adaptando ao perfil de cada
          negócio.
        </p>

        <div className="space-y-20">
          {niches.map((niche, i) => (
            <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">
                  {niche.label}{" "}
                  <span className="text-muted-foreground font-normal text-base">
                    — {niche.name}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground">{niche.caption}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-end">
                {/* Post */}
                <div
                  className="col-span-2 rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                  onClick={() => setModalImage(niche.post)}
                >
                  <img
                    src={niche.post}
                    alt={`Post ${niche.name}`}
                    loading="lazy"
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Stories */}
                {niche.stories.map((story, j) => (
                  <div
                    key={j}
                    className="rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                    onClick={() => setModalImage(story)}
                  >
                    <img
                      src={story}
                      alt={`Story ${niche.name} ${j + 1}`}
                      loading="lazy"
                      className="w-full aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!modalImage} onOpenChange={() => setModalImage(null)}>
        <DialogContent className="max-w-3xl p-2 bg-background/95 backdrop-blur-md border-border/50">
          <VisuallyHidden>
            <DialogTitle>Imagem do portfólio</DialogTitle>
          </VisuallyHidden>
          {modalImage && (
            <img
              src={modalImage}
              alt="Portfolio"
              className="w-full h-auto rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
