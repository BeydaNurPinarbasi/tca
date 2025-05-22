// src/components/ProductList.tsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import westernFashion from "../assets/Western_Fashion _Festival.webp";
import vintageFashion from "../assets/Vintage_Fashion_Show.webp";
import summerFashion from "../assets/Summer_Fashion_Show.webp";
import runwayShow from "../assets/Runway_Show.webp";
import winterShow from "/academy-training.jpg";

const products = [
  {
    id: 1,
    title: "Western Fashion Festival",
    image: westernFashion,
  },
  {
    id: 2,
    title: "Vintage Fashion Show",
    image: vintageFashion,
  },
  {
    id: 3,
    title: "Summer Fashion Show",
    image: summerFashion,
  },
  { id: 4, title: "Runway Show", image: runwayShow },
  { id: 5, title: "Winter Show", image: winterShow },
];

export default function ProductList() {
  const visibleProducts = products.slice(0, 4);

  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 bg-white">
      <p className="text-sm uppercase text-gray-500 tracking-widest text-center mb-2">
        Moda Etkinlikleri
      </p>
      <h2 className="text-4xl sm:text-5xl font-fancy text-center tracking-tight">
        Two Cowboys Production
      </h2>
      <div className="flex justify-center mt-2 mb-14">
        <div className="h-1 w-24 bg-gradient-to-r from-black via-gray-700 to-black rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-lg p-4">
              <h3 className="text-base font-semibold">{product.title}</h3>
              <Link
                to={`/production/${product.id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Detayları İncele
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/production"
          className="inline-block bg-gradient-to-r from-black to-neutral-800 text-white px-8 py-3 rounded-xl shadow hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Tüm Prodüksiyonları Gör
        </Link>
      </div>
    </section>
  );
}