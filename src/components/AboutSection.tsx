import logo from "../assets/logo.webp";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 md:px-10 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Görsel */}
        <img
          src={logo}
          alt="Two Cowboys Eğitim"
          className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover"
          loading="lazy"
        />

        {/* Metin */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-h2 font-serif mb-6 leading-snug">
            Two Cowboys
          </h2>

          <p className="text-base leading-relaxed text-gray-700">
            <strong>Two Cowboys</strong>; yeni nesil moda hareketinin adıdır ve
            sektörde yer almak isteyenlerin buluşma noktasıdır. Bünyesinde
            barındırdığı modellere eğitimler verir ve markalar ile buluşturur.
            <br />
            <br />
            Aynı zamanda gerçekleştirdiği tematik moda eventleri ile markaların
            moda dünyasındaki görünürlüğünü artırarak etkinlik ve proje
            tasarımını sağlar.
          </p>
        </div>
      </div>
    </section>
  );
}
