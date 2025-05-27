import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-white px-6 py-20">
      <h1 className="text-6xl font-bold text-black mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Sayfa Bulunamadı
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        Üzgünüz, aradığınız sayfa mevcut değil ya da taşınmış olabilir. Ana sayfaya dönerek gezinmeye devam edebilirsiniz.
      </p>
      <Link to="/">
        <Button variant="primary">Ana Sayfaya Dön</Button>
      </Link>
    </div>
  );
}
