import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import Lottie from "lottie-react";
import runwayAnimation from "../assets/animations/runway.json";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl w-full"
      >
        {/* Animasyon */}
        <div className="w-56 sm:w-72 md:w-80 h-auto mx-auto mb-8">
          <Lottie animationData={runwayAnimation} loop />
        </div>

        {/* Başlık */}
        <h1 className="text-h1 font-serif font-bold text-black mb-2">
          404
        </h1>

        {/* Alt başlık */}
        <h2 className="text-h2 font-sans font-medium text-gray-800 mb-4">
          Üzgünüz, bu sayfa bulunamadı.
        </h2>

        {/* Açıklama */}
        <p className="text-base text-gray-600 leading-relaxed mb-10 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil, taşınmış ya da kaldırılmış olabilir.
          Lütfen aşağıdaki butonu kullanarak ana sayfaya dönün.
        </p>

        {/* Buton */}
        <Link to="/">
          <Button variant="primary" className="px-8 py-3 text-sm">
            Ana Sayfaya Dön
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
