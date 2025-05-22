// src/pages/Home.tsx

import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import modelVideo from "../assets/model-academy-hero.mp4";
import poster from "../assets/bg-fashion.webp"; // bu `public/` klasöründeyse böyle yazılır

const AboutSection = lazy(() => import("../components/AboutSection"));
const GallerySection = lazy(() => import("../components/GallerySection"));
const LazyFAQ = lazy(() => import("../components/FAQ"));
const ProductList = lazy(() => import("../components/ProductList"));
const ModelList = lazy(() => import("../components/ModelList"));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-black text-white font-sans">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster={poster}
        >
          <source src={modelVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-fancy leading-tight drop-shadow-xl">
            Model Olma Yolculuğun <br className="hidden sm:block" /> Burada
            Başlıyor
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl text-neutral-200 leading-relaxed font-sans">
            Profesyonel eğitmenler, podyum deneyimi, kamera önü pratikleri ve
            çok daha fazlası seni bekliyor.
          </p>
          <Link
            to="/basvuru"
            className="mt-8 px-6 py-3 text-base bg-white text-black rounded-full hover:bg-gray-200 transition font-medium"
          >
            Başvuru Yap
          </Link>
        </div>
      </section>

      {/* Lazy Sections */}
      <Suspense
        fallback={
          <div className="text-center py-10 text-neutral-500">
            Yükleniyor...
          </div>
        }
      >
        <AboutSection />
        <ProductList />
        <section className="py-20 px-4 sm:px-6 md:px-10 bg-neutral-100 text-center">
          <h2 className="text-3xl sm:text-4xl font-fancy mb-4">Model Camp</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Hayalindeki modellik kariyerine ilk adımı atmak için hemen başvuru
            yap. Eğitimler, deneyim ve profesyonellik seni bekliyor.
          </p>
          <Link
            to="/basvuru"
            className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition text-sm sm:text-base"
          >
            Başvuru Yap
          </Link>
        </section>
        <ModelList />
        <GallerySection />
        <LazyFAQ />
      </Suspense>
    </>
  );
}
