const Footer = () => {
  return (
    <footer className="bg-dark-alt py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-dm text-sm text-muted-text">
          The Law Offices of Darwin F. Johnson · 3355 Lenox Road NE, Suite 750, Atlanta, GA 30326 · <a href="tel:4045212667" className="text-cta hover:underline">404-521-2667</a> · <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </p>
        <p className="font-dm text-xs text-fine-text mt-4 max-w-3xl mx-auto leading-relaxed">
          The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
