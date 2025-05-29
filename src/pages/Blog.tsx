import { Link } from "react-router-dom";

const pressLinks = [
  {
    id: "haberturk",
    title: "Two Cowboys Gündem / Habertürk",
    summary:
      "Two Cowboys girişimi modellik sektöründe yeni bir dönem başlatıyor.",
    image: "/press/placeholder.jpg",
  },
  {
    id: "yeni-asir",
    title: "Two Cowboys Gündem / Yeni Asır",
    summary: "Genç modeller için eğitimden profesyonel sahnelere bir yolculuk.",
    image: "/press/placeholder.jpg",
  },
  {
    id: "ntv",
    title: "Two Cowboys Gündem / NTV",
    summary: "Two Cowboys, modellik alanında dijitalleşmeyi hızlandırıyor.",
    image: "/press/placeholder.jpg",
  },
];

export default function Blog() {
  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-24 py-20">
      {/* Başlık */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif font-bold text-black tracking-tight">
          Basında Two Cowboys
        </h1>
        <p className="mt-4 text-neutral-500 text-base max-w-xl mx-auto">
          Moda dünyasında ses getiren projelerimiz basında da yer buluyor. Two
          Cowboys'un öne çıkan haberleri burada.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {pressLinks.map((item) => (
          <Link
            key={item.id}
            to={`/blog/${item.id}`}
            className="group block overflow-hidden rounded-3xl border border-neutral-200 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 text-black px-4 py-1 rounded-full text-xs font-medium uppercase tracking-wide shadow-sm">
                {item.title.split(" / ")[1]}
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-serif font-semibold text-neutral-900 group-hover:text-black transition">
                {item.title}
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {item.summary}
              </p>
              <span className="inline-block text-sm font-medium text-black underline underline-offset-2 hover:text-neutral-700 transition">
                Haberi incele →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
