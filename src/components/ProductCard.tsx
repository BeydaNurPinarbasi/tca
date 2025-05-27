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
  // Kart boyutunu variant'a göre ayarlıyoruz
  const imageWrapperClass =
    variant === "compact"
      ? "aspect-square"
      : "aspect-[4/5] max-h-[500px]";

  const titleSize = variant === "compact" ? "text-sm" : "text-base";
  const linkSize = variant === "compact" ? "text-xs" : "text-sm";
  const paddingSize = variant === "compact" ? "p-3" : "p-4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Görsel */}
      <div className={`w-full overflow-hidden ${imageWrapperClass}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Bilgi Alanı */}
      <div className={`${paddingSize} bg-white`}>
        <h3 className={`font-semibold ${titleSize} text-black mb-2`}>
          {product.title}
        </h3>
        <Link
          to={`/production/${product.id}`}
          className={`${linkSize} text-blue-600 underline hover:text-blue-800 transition`}
        >
          Detayları İncele
        </Link>
      </div>
    </motion.div>
  );
}
