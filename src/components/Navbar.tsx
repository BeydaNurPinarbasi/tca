import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo-light.webp";
import logoDark from "../assets/logo-dark.webp";
import { useAuth } from "../hooks/useAuth";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Dinamik menü elemanları
  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Production", to: "/production" },
    { label: "Models", to: "/models" },
    { label: "Model Academy", to: "/academy" },
    { label: "Model Cast", to: "/cast" },
    { label: "Blog", to: "/blog" },
  ];

  if (isAuthenticated) {
    menuItems.push({ label: "Profilim", to: "/profil" });
  } else {
    menuItems.push({ label: "Model Cast Giriş", to: "/cast-login" });
  }

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

        {/* Desktop Menü */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base items-center">
          {menuItems.map(({ label, to }) => (
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

          {/* Çıkış butonu */}
          {isAuthenticated && (
            <li>
              <button
                onClick={logout}
                className={`text-sm hover:underline ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Çıkış Yap
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile Menü */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          {menuItems.map(({ label, to }) => (
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

          {isAuthenticated && (
            <li>
              <button
                onClick={logout}
                className={`text-sm hover:underline ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Çıkış Yap
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}
