import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-6">
        <p className="text-muted-foreground">
          Se você quer um perfil mais organizado e profissional, podemos
          começar.
        </p>
        <a
          href="https://wa.me/5588921745781"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95 glow-shadow"
        >
          <MessageCircle className="w-4 h-4" />
          Falar no WhatsApp
        </a>
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm pt-4">
          <Instagram className="w-4 h-4" />
          <a
            href="https://instagram.com/ggsocialstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            @ggsocialstudio
          </a>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} GG Social Studio. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
