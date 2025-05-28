import modelVideo from "../assets/model-academy-hero.mp4";
import FAQ from "../components/FAQ";

export default function ModelCast() {
  return (
    <>
      <section className="bg-white text-neutral-900">
        {/* Başlık ve Açıklama */}
        <div className="text-center px-6 py-24 sm:py-32 max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight text-neutral-900">
            TWO COWBOYS <br className="hidden sm:block" /> MODEL CAST
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed tracking-wide">
            <span className="inline-block max-w-3xl">
              Dijital Model Cast sistemi, moda dünyasına adım atmak isteyenler için
              kapsamlı bir eğitim ve bağlantı platformu sunuyor. Katılımcılar,
              modellik mesleğine dair tüm teknik ve teorik bilgileri öğrenmenin yanı
              sıra, güçlü bir portfolyo oluşturma ve marka iş birlikleriyle çalışma imkanı bulacaklar.
            </span>
          </p>
        </div>

        {/* Tanıtım Videosu */}
        <div className="max-w-6xl mx-auto px-6 pb-32 group">
          <div className="relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 group-hover:shadow-2xl">
            <video
              controls
              poster="/images/model-cast-poster.jpg"
              className="w-full h-auto object-cover rounded-3xl"
            >
              <source src={modelVideo} type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        </div>
      </section>

      {/* SSS Bölümü */}
      <FAQ />
    </>
  );
}
