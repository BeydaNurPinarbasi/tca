// src/components/ApplySection.tsx

import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function ApplySection() {
  return (
    <section className="relative z-10">
      <div className="relative bg-neutral-100/95 backdrop-blur-sm py-20 px-6 sm:px-12 rounded-3xl shadow-xl max-w-4xl mx-auto mt-24">
        <div className="text-center space-y-8">
          {/* Başlık */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Model Camp'a Katılmak İster misin?
          </h2>

          {/* Açıklama */}
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            Aşağıdaki başvuru formunu doldurarak sürece hemen dahil
            olabilirsiniz.
          </p>
        <br />
          {/* CTA Buton */}
          <Button
            asChild
            variant="primary"
            className="px-10 py-2 text-base rounded-full"
          >
            <Link to="/basvuru">Başvuru Yap</Link>
          </Button>
          {/* Alt bilgi */}
          <p className="text-sm text-gray-500 text-center max-w-md mx-auto">
            Başvuru formunuz bize ulaştıktan sonra en kısa sürede tarafınıza
            geri dönüş sağlanıp kayıt detayları ile ilgili bilgi verilecektir.
          </p>
        </div>
      </div>
    </section>
  );
}
