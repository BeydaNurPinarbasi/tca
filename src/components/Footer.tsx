import logo from "../assets/logo-light.webp";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-black via-neutral-900 to-neutral-800 text-white mt-20 font-sans overflow-hidden animate-fade-in">
      {/* Üst Satır: Logo & Sosyal Medya */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-12 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Two Cowboys Logo"
          className="h-16 w-auto transition-transform duration-200 hover:scale-105"
        />

        {/* Sosyal Medya İkonları */}
        <div className="flex items-center gap-5">
          <a href="#" aria-label="Instagram">
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="h-8 w-8 opacity-80 hover:opacity-100 hover:scale-110 transition"
            />
          </a>
          <a href="#" aria-label="TikTok">
            <img
              src="/icons/tiktok.svg"
              alt="TikTok"
              className="h-8 w-8 opacity-80 hover:opacity-100 hover:scale-110 transition"
            />
          </a>
          <a href="#" aria-label="Youtube">
            <img
              src="/icons/youtube.svg"
              alt="Youtube"
              className="h-8 w-8 opacity-80 hover:opacity-100 hover:scale-110 transition"
            />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-sm">
        {/* Kurumsal */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif text-lg font-semibold mb-6 tracking-wide relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-white/40 after:mt-1 mx-auto md:mx-0">
            Kurumsal
          </h4>
          <ul className="space-y-2 text-neutral-300 font-sans">
            {["Hakkımızda", "Vizyon", "Misyon"].map((text, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bilgilendirme */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif text-lg font-semibold mb-6 tracking-wide relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-white/40 after:mt-1 px-4 sm:px-0 text-center sm:text-left">
            Bilgilendirme
          </h4>

          <ul className="space-y-2 text-neutral-300 font-sans">
            {[
              "Site Kullanım Koşulları",
              "Üyelik Sözleşmesi",
              "Hizmet Şartları",
              "Ön Bilgilendirme Formu",
              "Çerez (Cookie) Politikası",
              "Gizlilik ve KVKK Aydınlatma Metni",
              "Elektronik Ticari İletişim İzni",
              "İade Koşulları",
            ].map((text, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Formlar */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="font-serif text-lg font-semibold mb-6 tracking-wide relative after:content-[''] after:block after:w-8 after:h-[2px] after:bg-white/40 after:mt-1 mx-auto md:mx-0">
            Formlar
          </h4>
          <ul className="space-y-2 text-neutral-300 font-sans">
            {["Başvuru Formu"].map((text, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-white hover:underline transition-colors duration-300"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h4 className="font-serif text-lg font-semibold tracking-wide relative after:block after:w-8 after:h-[2px] after:bg-white/40 after:mt-1 mx-auto md:mx-0">
            İletişim
          </h4>

          <p className="flex items-start gap-2 text-sm text-neutral-300 break-words max-w-xs sm:max-w-none w-full">
            <Mail className="w-4 h-4 mt-[2px]" />
            <a
              href="mailto:bilgi@twocowboysoriginals.com"
              className="hover:underline hover:text-white break-all"
            >
              bilgi@twocowboysoriginals.com
            </a>
          </p>

          <p className="flex items-start gap-2 text-sm text-neutral-300 break-words max-w-xs sm:max-w-none w-full">
            <MapPin className="w-4 h-4 mt-[2px]" />
            Aksoy Mh. Yalı Bulvarı No:386/2 Karşıyaka / İzmir
          </p>

          <p className="flex items-start gap-2 text-sm text-neutral-300 break-words max-w-xs sm:max-w-none w-full">
            <Phone className="w-4 h-4 mt-[2px]" />
            +90 542 269 26 97
          </p>
        </div>
      </div>

      {/* Alt Satır */}
      <div className="py-8 px-8 text-m text-neutral-400 border-t border-neutral-700 font-light flex flex-col sm:flex-row items-center justify-between">
        <span>© 2024 Two Cowboys. All rights reserved.</span>

        <a
          href="https://larvey.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <img
            src="/larvey-logo-white.svg"
            alt="Larvey Logo"
            className="h-9 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
