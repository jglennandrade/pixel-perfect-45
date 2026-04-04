const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-dark border-b border-card-border flex items-center justify-between px-6">
      <span className="font-bebas text-warm-white text-2xl tracking-wider">
        DARWIN F. JOHNSON
      </span>
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
