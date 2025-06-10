import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditMeasurements() {
  const navigate = useNavigate();

  // Vücut ölçülerini tutacak state
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

  // İlk açılışta localStorage'dan veriyi al
  useEffect(() => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      const parsed = JSON.parse(stored);
      setBodyMetrics(parsed.bodyMetrics || {});
    }
  }, []);

  // Input değişimlerini handle et
  const handleChange = (key: string, value: string) => {
    setBodyMetrics((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Kaydet butonuna basıldığında localStorage'a yaz
  const handleSave = () => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      const parsed = JSON.parse(stored);
      parsed.bodyMetrics = bodyMetrics;
      localStorage.setItem("profileData", JSON.stringify(parsed));
      alert("Ölçü bilgileri güncellendi!");
      navigate("/profil"); // profiline geri dön
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 pt-24">
      <h1 className="text-2xl font-bold">Ölçüleri Düzenle</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Object.entries(bodyMetrics).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm capitalize">{key}</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full border border-neutral-300 p-2 rounded"
            />
          </div>
        ))}
      </div>

      <div className="text-right">
        <button
          onClick={handleSave}
          className="bg-black text-white px-6 py-2 rounded hover:bg-neutral-800"
        >
          Kaydet
        </button>
      </div>
    </div>
  );
}
