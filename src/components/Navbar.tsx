import { useState } from "react";
import { Menu, X } from "lucide-react"; // ikonlar için lucide-react kullanıyoruz
import logo from "../assets/logo-light.webp";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 bg-black/60 backdrop-blur-md text-white shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Hamburger icon (only on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Production</li>
          <li className="hover:underline cursor-pointer">Models</li>
          <li className="hover:underline cursor-pointer">Model Academy</li>
          <li className="hover:underline cursor-pointer">Model Cast</li>
          <li className="hover:underline cursor-pointer">Model Cast Giriş</li>
          <li className="hover:underline cursor-pointer">Blog</li>
        </ul>
      </div>

      {/* Menu (mobile) */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 md:hidden">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Production</li>
          <li className="hover:underline cursor-pointer">Models</li>
          <li className="hover:underline cursor-pointer">Model Academy</li>
          <li className="hover:underline cursor-pointer">Model Cast</li>
          <li className="hover:underline cursor-pointer">Model Cast Giriş</li>
          <li className="hover:underline cursor-pointer">Blog</li>
        </ul>
      )}
    </nav>
  );
}
