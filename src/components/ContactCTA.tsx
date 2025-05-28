import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function ContactCTA() {
  return (
    <section className="bg-neutral-100 text-black py-16 px-4 sm:px-6 md:px-10 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium leading-snug mb-6"
        >
          Two Cowboys olarak, projelerinizde size eşlik etmek
          <br className="hidden sm:block" />
          ve markanızı bir adım öne taşımak için buradayız.
        </motion.h2>

        {/* Açıklama */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10"
        >
          Daha fazla bilgi almak ve iş birliği yapmak için bizimle iletişime geçin.
        </motion.p>

        {/* Buton */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" asChild>
            <a
              href="mailto:bilgi@twocowboysoriginals.com?subject=İşbirliği Talebi"
              target="_blank"
              rel="noopener noreferrer"
            >
              İletişime Geçin
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
