// src/pages/Basvuru.tsx
import ModelCampForm from "../components/ModelCampForm";
import CampSlider from "../components/CampSlider";
import FAQ from "../components/FAQ";
export default function Basvuru() {
  return (
    <section className="pt-24 pb-10 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10">
        <h1 className="text-3xl sm:text-4xl font-fancy text-center mb-4">
          Model Camp Başvuru
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-sm sm:text-base">
          Kamp atmosferini keşfet, ardından hemen başvurunu tamamla.
        </p>

        {/* Slider */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <CampSlider />
        </div>

        {/* Form */}
          <ModelCampForm />
  
        <hr className="my-12 border-gray-200" />
        {/* SSS */}
        <div className="mt-20">
          <FAQ />
        </div>
      </div>
    </section>
  );
}
