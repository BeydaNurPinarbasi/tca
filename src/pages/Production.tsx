import ProductList from "../components/ProductList";
import ContactCTA from "../components/ContactCTA";
import { motion } from "framer-motion";

export default function Production() {
  return (
    <main className="min-h-screen bg-white text-black pt-24">
      {/* Başlık ve Açıklama Alanı */}
      <section className="px-4 sm:px-8 md:px-20 lg:px-40 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            Two Cowboys Production
          </h1>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Two Cowboys olarak, tematik defileler ve güçlü podyum sahneleriyle
            moda dünyasında yerimizi alıyoruz. Markalara, defile sürecinin her
            aşamasında destek veriyor ve baştan sona tüm organizasyonu
            üstleniyoruz. Tasarımdan uygulamaya kadar geniş bir yelpazede hizmet
            sunarak, işbirliği yaptığımız markaların süreçlerini kolaylaştırmayı
            hedefliyoruz.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-black/10 via-black to-black/10 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Moda Etkinlikleri Listesi */}
      <section aria-labelledby="product-list">
        <h2 id="product-list" className="sr-only">
          Moda Etkinlikleri Listesi
        </h2>
        <ProductList variant="grid" showAllButton={false} />
      </section>

      {/* Sayfa Sonu - İletişime Geç */}
      <ContactCTA />
    </main>
  );
}
