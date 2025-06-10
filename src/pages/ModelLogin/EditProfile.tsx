import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    city: "",
    instagram: "",
    about: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setFormData({
        firstName: parsed.firstName || "",
        lastName: parsed.lastName || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        birthDate: parsed.birthDate || "",
        city: parsed.city || "",
        instagram: parsed.instagram || "",
        about: parsed.about || "",
      });
    }
  }, []);

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const stored = localStorage.getItem("profileData");
    const parsed = stored ? JSON.parse(stored) : {};
    const updated = { ...parsed, ...formData };
    localStorage.setItem("profileData", JSON.stringify(updated));
    alert("Profil bilgileri onaya gönderildi!");
    navigate("/profil");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 pt-24 bg-white rounded-xl shadow">
      <h1 className="text-2xl font-bold">Kişisel Bilgiler</h1>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Adın *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Soyadın *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">E-posta adresin *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Telefon numaran *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Doğum tarihi *</label>
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => handleChange("birthDate", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bulunduğunuz şehir *</label>
          <select
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm bg-white
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          >
            <option value="">Seçiniz</option>
            <option value="Adana">Adana</option>
            <option value="Ankara">Ankara</option>
            <option value="İstanbul">İstanbul</option>
            <option value="İzmir">İzmir</option>
            {/* Şehir listesi istenirse genişletilir */}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1">Instagram kullanıcı adı *</label>
          <input
            type="text"
            value={formData.instagram}
            onChange={(e) => handleChange("instagram", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1">Hakkında *</label>
          <textarea
            value={formData.about}
            onChange={(e) => handleChange("about", e.target.value)}
            className="block w-full px-4 py-2 rounded-lg border border-neutral-300 shadow-sm h-28
                       focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition resize-none"
          />
        </div>
      </div>

      <div className="text-sm text-neutral-600">
        Gerçekleştirdiğiniz değişiklikler için <strong>“Onay Gönder”</strong> butonuna basmanız
        gerekmektedir. Yaptığınız değişiklikler tarafımıza Onay’a düşecektir. Editörlerimiz
        tarafından incelendikten sonra “Onay” verilip yayına alınacaktır.
      </div>

      <div className="text-right pt-4">
        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Onaya Gönder
        </button>
      </div>
    </div>
  );
}
