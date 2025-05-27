import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo-light.webp";
import logoDark from "../assets/logo-dark.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 shadow-md transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md"
          : "bg-black/50 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Logo"
            className="h-8 md:h-10 w-auto transition-all duration-300"
          />
        </div>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X size={24} className={scrolled ? "text-black" : "text-white"} />
            ) : (
              <Menu
                size={24}
                className={scrolled ? "text-black" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">
          {[
            { label: "Home", to: "/" },
            { label: "Production", to: "/production" },
            { label: "Models", to: "/models" },
            { label: "Model Academy", to: "/academy" },
            { label: "Model Cast", to: "/cast" },
            { label: "Model Cast Giriş", to: "/cast-login" },
            { label: "Blog", to: "/blog" },
          ].map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`hover:underline transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          {[
            { label: "Home", to: "/" },
            { label: "Production", to: "/production" },
            { label: "Models", to: "/models" },
            { label: "Model Academy", to: "/academy" },
            { label: "Model Cast", to: "/cast" },
            { label: "Model Cast Giriş", to: "/cast-login" },
            { label: "Blog", to: "/blog" },
          ].map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`hover:underline transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
