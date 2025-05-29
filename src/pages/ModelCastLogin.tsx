import fashionBg from "../assets/bg-fashion.webp";
import LoginForm from "../components/LoginForm";

export default function ModelCastLogin() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-neutral-100 px-4 sm:px-6 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white shadow-xl rounded-3xl overflow-hidden border border-neutral-200 animate-fade-in">
        
        {/* Görsel Alanı */}
        <div className="relative hidden md:block">
          <img
            src={fashionBg}
            alt="Model Cast Visual"
            className="w-full h-full object-cover"
          />
        
        </div>

        {/* Form Alanı */}
        <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
