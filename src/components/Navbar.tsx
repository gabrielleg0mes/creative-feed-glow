import logoIcon from "@/assets/logo-icon.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <img src={logoIcon} alt="GG Social Studio" className="h-10 w-auto" />
        <a
          href="https://wa.me/seunumero"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-[1.03] glow-shadow"
        >
          Falar no WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
