import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaVideo, FaWhatsapp } from "react-icons/fa";
import AnimatedButton from "../ui/AnimatedButton";

export default function FabGroup() {
  const navigate = useNavigate();
  const [educationOpen, setEducationOpen] = useState(false);
   const panelRef = useRef<HTMLDivElement>(null); 

  const openWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=%2B905422692697&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };
   useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // panel dışında tıklama kontrolü
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        setEducationOpen(false);
      }
    };

    if (educationOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [educationOpen]);


   return (
    <div className="fixed bottom-16 right-3 z-50 flex flex-col items-end gap-3">
      {/* Açılır Eğitim Paneli */}
      {educationOpen && (
        <div
          ref={panelRef} // referansı tanımladık
          className="bg-white rounded-xl shadow-2xl p-4 w-80 border border-zinc-200 animate-fade-in-up"
        >
          <h3 className="text-xl font-bold text-zinc-700 flex items-center gap-2">
            <FaVideo />
            Eğitim Alanı Açıldı
          </h3>
          <p className="text-sm text-zinc-700 mt-1 leading-relaxed">
            Model Training Studio ile profesyonel eğitim videolarına ulaş.
          </p>
          <button
            onClick={() => navigate("/education")}
            className="mt-4 w-full bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition-all duration-300"
          >
            Eğitime Git
          </button>
        </div>
      )}

      {/* Animated Eğitim Butonu */}
      <AnimatedButton
        icon={<FaVideo />}
        label="Eğitim"
        onClick={(e) => {
          e.stopPropagation(); // panel açıkken kendisine tıklanırsa kapanmasın
          setEducationOpen((prev) => !prev);
        }}
        color="bg-red-700"
      />

      {/* Animated WhatsApp Butonu */}
      <AnimatedButton
        icon={<FaWhatsapp />}
        label="WhatsApp"
        onClick={openWhatsApp}
        color="bg-green-600"
      />
    </div>
  );
}