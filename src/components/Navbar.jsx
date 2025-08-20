import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // déclenche l'effet après 50px de scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-stone-100 border-b border-gray-300 transition-all duration-300 ${
        scrolled ? "p-2 shadow-md" : "p-4 shadow-sm"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-emerald-700 font-semibold transition-all duration-300 ${scrolled ? "text-lg" : "text-xl"}`}>
          Association Valisoa
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#acceuil" className="relative inline-block text-gray-900 text-base group">
              <span className="relative z-10">Accueil</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#apropos" className="relative inline-block text-gray-900 text-base group">
              <span className="relative z-10">À propos</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#actions" className="relative inline-block text-gray-900 text-base group">
              <span className="relative z-10">Nos actions</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#membre" className="relative inline-block text-gray-900 text-base group">
              <span className="relative z-10">Membres</span>
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-emerald-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" className="bg-emerald-800 text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-emerald-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
