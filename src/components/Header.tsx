import darwinLogo from "@/assets/darwin-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-dark border-b border-card-border flex items-center justify-between px-6">
      <a href="/">
        <img src={darwinLogo} alt="Darwin F. Johnson" className="h-6 md:h-7 w-auto" />
      </a>
      <a
        href="tel:4045212667"
        className="font-dm font-bold text-cta text-sm md:text-base"
      >
        404-521-2667
      </a>
    </header>
  );
};

export default Header;
