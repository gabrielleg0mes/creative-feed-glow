import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o processo de criação?",
    a: "Após o contato, entendo seu negócio e seu público, organizo o estilo visual e desenvolvo os designs alinhados com a sua marca. Tudo é feito com base no que você precisa comunicar.",
  },
  {
    q: "Os designs são personalizados?",
    a: "Sim. Cada projeto é desenvolvido de forma personalizada, respeitando o estilo do seu negócio e o público que você deseja alcançar.",
  },
  {
    q: "Você trabalha apenas com esses nichos do portfólio?",
    a: "Não. Os exemplos apresentados são de alguns nichos, mas os projetos podem ser desenvolvidos para qualquer área.",
  },
  {
    q: "Quais tipos de artes você cria?",
    a: "Desenvolvo posts para feed, stories, capas e conteúdos visuais pensados para manter o perfil organizado e profissional.",
  },
  {
    q: "Posso solicitar alterações nos designs?",
    a: "Sim. Durante o processo, você pode solicitar ajustes para garantir que o resultado final fique alinhado com o que você espera.",
  },
  {
    q: "Como recebo os arquivos?",
    a: "Os arquivos são entregues prontos para uso, organizados e no formato ideal para postagem no Instagram.",
  },
  {
    q: "Como faço para contratar?",
    a: "Basta clicar no botão de contato e falar diretamente comigo pelo WhatsApp para alinharmos seu projeto.",
  },
];

const FAQ = () => {
  return (
    <section className="section-spacing">
      <div className="container mx-auto max-w-3xl">
        <div className="section-divider mb-6" />
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Dúvidas <span className="text-gradient">frequentes</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl border border-border/60 shadow-sm px-8 overflow-hidden hover:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
