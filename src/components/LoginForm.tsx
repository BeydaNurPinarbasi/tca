import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";
import { fakeUsers } from "../lib/fakeUsers";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginData>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data: LoginData) => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      const userExists = fakeUsers.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (userExists) {
        console.log("Giriş başarılı!");
        login(data.email);
        navigate("/profil");
      } else {
        setError("E-posta veya şifre hatalı.");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <form
      className="space-y-6 bg-white p-8 sm:p-10 rounded-2xl shadow-md animate-fade-in"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Başlık */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-neutral-900">
          Model Cast Girişi
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          Hesabınıza giriş yapın ve devam edin.
        </p>
      </div>

      {/* Hata */}
      <ErrorAlert message={error} />

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-neutral-700">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          placeholder="ornek@mail.com"
          {...register("email", { required: true })}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:outline-none transition"
        />
      </div>

      {/* Şifre */}
      <div className="space-y-1">
        <label
          htmlFor="password"
          className="text-sm font-medium text-neutral-700"
        >
          Şifre
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password", { required: true })}
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:outline-none transition"
        />
      </div>

      {/* Oturum & Link */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("remember")}
            className="accent-black"
          />
          <span className="text-neutral-700">Oturumu açık tut</span>
        </label>
        <Link
          to="/sifremi-unuttum"
          className="text-black hover:underline transition"
        >
          Şifremi unuttum
        </Link>
      </div>

      {/* Buton */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-neutral-800 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading && (
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
        )}
        {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
      </button>
    </form>
  );
}
