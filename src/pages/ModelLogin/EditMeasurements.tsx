import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApprovalNotice from "../../components/ui/ApprovalNotice";

export default function EditMeasurements() {
  const navigate = useNavigate();

  const [bodyMetrics, setBodyMetrics] = useState({
    shoe: "",
    height: "",
    eyes: "",
    weight: "",
    hair: "",
    chest: "",
    waist: "",
    hips: "",
    size: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setBodyMetrics(parsed.bodyMetrics || {});
    }
  }, []);

  const handleChange = (key: string, value: string) => {
    setBodyMetrics((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.bodyMetrics = bodyMetrics;
      localStorage.setItem("profileData", JSON.stringify(parsed));
      alert("Ölçü bilgileri güncellendi!");
      navigate("/profil");
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        {/* Başlık */}
        <h1 className="text-3xl font-semibold text-neutral-900 mb-2">
          Beden Ölçülerini Düzenle
        </h1>
        <p className="text-sm text-neutral-500 mb-8">
          Lütfen vücut ölçülerinizi doğru ve eksiksiz giriniz.
        </p>

        {/* Form Alanı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(bodyMetrics).map(([key, value]) => (
            <div
              key={key}
              className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm"
            >
              <label className="block text-sm font-medium text-neutral-700 capitalize mb-1">
                {key}
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                className="w-full border border-neutral-300 focus:ring-2 focus:ring-black focus:outline-none p-2 rounded-md text-sm"
                placeholder={`${key} girin`}
              />
            </div>
          ))}
        </div>
        {/* Onay Bilgisi */}
        <ApprovalNotice onApprove={handleSave} />
      </div>
    </div>
  );
}
