import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Product = {
  id: number;
  title: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
  index: number;
  variant: "compact" | "grid";
};

export default function ProductCard({ product, index, variant }: ProductCardProps) {
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Görsel */}
      <div className={`w-full overflow-hidden ${isCompact ? "aspect-square" : "aspect-[4/5] max-h-[500px]"}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Bilgi Alanı */}
      <div className={`${isCompact ? "p-3" : "p-4"} bg-white`}>
        <h3 className={`text-black font-semibold mb-2 ${isCompact ? "text-sm" : "text-base"}`}>
          {product.title}
        </h3>
        <Link
          to={`/production/${product.id}`}
          className={`${isCompact ? "text-xs" : "text-sm"} text-blue-600 underline hover:text-blue-800 transition`}
          aria-label={`Detayları İncele: ${product.title}`}
        >
          Detayları İncele
        </Link>
      </div>
    </motion.div>
  );
}
