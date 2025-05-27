
export default function GallerySection() {
  return (
    <section className="py-20 bg-neutral-100 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-fancy mb-10"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Galeri görseli ${i + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
