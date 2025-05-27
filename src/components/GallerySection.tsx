export default function GallerySection() {
  return (
    <section className="py-20 bg-neutral-100 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-h2 font-fancy mb-10">
          Galeri
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-md group relative"
            >
              <img
                src={src}
                alt={`Galeri görseli ${i + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
