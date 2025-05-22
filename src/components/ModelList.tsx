// src/components/ModelList.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const models = [
  { id: 1, name: "Buse Aslan", image: "src/assets/models/Buse_Aslan.webp" },
  {
    id: 2,
    name: "Cağatay Kirit",
    image: "src/assets/models/Çağatay_Kirit.webp",
  },
  {
    id: 3,
    name: "Dildora Yusupova",
    image: "src/assets/models/Dildora_Yusupova.webp",
  },
  { id: 4, name: "Kerem Bükey", image: "src/assets/models/Kerem_Bükey.webp" },
  { id: 5, name: "Mediha Mutlu", image: "src/assets/models/Mediha_Mutlu.webp" },
  { id: 6, name: "Leyla Balta", image: "src/assets/models/Leyla_Balta.webp" },
];

export default function ModelList() {
  const visibleModels = models.slice(0, 5);

  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 bg-white">
      <p className="text-sm uppercase text-gray-500 tracking-widest text-center mb-2">
        Yeni Nesil Yüzler
      </p>
      <h2 className="text-4xl sm:text-5xl font-fancy text-center tracking-tight">
        Modellerimiz
      </h2>
      <div className="flex justify-center mt-2 mb-14">
        <div className="h-1 w-24 bg-gradient-to-r from-black via-gray-700 to-black rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {visibleModels.map((model, i) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.10, delay: i * 0.08 }}

            viewport={{ once: true }}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300"
          >
            <div className="relative w-full h-64">
              <img
                src={model.image}
                alt={model.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-[center_20%] grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-1">{model.name}</h3>
              <Link
                to={`/models/${model.id}`}
                className="text-sm text-blue-600 hover:underline"
              >
                Detayları Gör
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/models"
          className="inline-block bg-gradient-to-r from-black to-neutral-800 text-white px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300"
        >
          Tüm Modelleri Gör
        </Link>
      </div>
    </section>
  );
}
