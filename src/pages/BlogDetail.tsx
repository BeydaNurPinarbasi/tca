import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const detayVeri = {
  haberturk: {
    title: "Two Cowboys Gündem / Habertürk",
    content:
      "Two Cowboys’un modellik sektöründe başlattığı yeni dönem, genç yeteneklere fırsat sunuyor. Eğitim, çekim ve dijital platform entegrasyonu ile fark yaratıyor.",
    image: "/press/placeholder.jpg",
    date: "28 Mayıs 2025",
  },
  "yeni-asir": {
    title: "Two Cowboys Gündem / Yeni Asır",
    content:
      "Modellik yolculuğunda kariyer hedefi olan gençlere yönelik eğitim kampları ve profesyonel çekim destekleriyle öne çıkıyor.",
    image: "/press/placeholder.jpg",
    date: "24 Mayıs 2025",
  },
  ntv: {
    title: "Two Cowboys Gündem / NTV",
    content:
      "Two Cowboys, sektöre yenilikçi teknolojilerle yön vererek genç yetenekleri podyumlarla buluşturuyor.",
    image: "/press/placeholder.jpg",
    date: "18 Mayıs 2025",
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const data = detayVeri[id as keyof typeof detayVeri];

  const otherPosts = Object.entries(detayVeri)
    .filter(([key]) => key !== id)
    .slice(0, 2);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-2xl font-semibold">Haber Bulunamadı</h1>
          <p className="text-neutral-500 mt-2">
            Geçerli bir haber linki bulunamadı.
          </p>
          <Link
            to="/blog"
            className="mt-4 inline-block text-blue-600 underline hover:text-blue-800 transition"
          >
            Geri dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 py-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* SOL SÜTUN */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-sm"
            />
            <span className="absolute bottom-4 left-4 bg-white/90 text-neutral-800 px-4 py-1 rounded-full text-xs font-medium shadow-md tracking-wide uppercase">
              {data.title.split("/")[1]?.trim()}
            </span>
          </div>

          <div>
            <h1 className="text-4xl font-serif font-semibold text-black tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-sm text-neutral-500 mt-2">Yayın tarihi: {data.date}</p>
          </div>

          <p className="text-base leading-relaxed text-neutral-700">{data.content}</p>

          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black transition group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="underline underline-offset-4">Tüm haberlere geri dön</span>
          </Link>
        </div>

        {/* SAĞ SÜTUN */}
        <aside className="space-y-10">
          {/* Son Yazılar */}
          <div>
            <h2 className="text-lg font-semibold font-serif mb-4">Son Yazılar</h2>
            <div className="space-y-4">
              {otherPosts.map(([key, post]) => (
                <Link
                  key={key}
                  to={`/blog/${key}`}
                  className="flex items-center gap-4 hover:bg-neutral-50 p-3 rounded-lg transition"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-md shadow-sm"
                  />
                  <div>
                    <h3 className="text-sm font-medium text-black">{post.title}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Kategoriler */}
          <div>
            <h2 className="text-lg font-semibold font-serif mb-3">Kategoriler</h2>
            <ul className="space-y-2">
              {["Moda", "Eğitim", "Dijitalleşme", "Gençlik"].map((cat) => (
                <li key={cat}>
                  <span className="block px-4 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-100 cursor-pointer transition">
                    {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Etiket Bulutu */}
          <div>
            <h2 className="text-lg font-semibold font-serif mb-3">Etiketler</h2>
            <div className="flex flex-wrap gap-2">
              {["modellik", "two cowboys", "basında",  "platform", "fotoğraf"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 rounded-full hover:bg-neutral-200 cursor-pointer transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sosyal Medyada Paylaş */}
          <div>
            <h2 className="text-lg font-semibold font-serif mb-3">Paylaş</h2>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full hover:opacity-80 transition"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-pink-600 text-white rounded-full hover:opacity-80 transition"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full hover:opacity-80 transition"
                aria-label="WhatsApp"
              >
                WA
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
