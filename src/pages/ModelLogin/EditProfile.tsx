import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [about, setAbout] = useState("");
  const [profileImage, setProfileImage] = useState("/press/placeholder.jpg");
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
      setFullName(parsed.fullName || "");
      setAbout(parsed.about || "");
      setProfileImage(parsed.profileImage || "/press/placeholder.jpg");
      setBodyMetrics(parsed.bodyMetrics || {});
    }
  }, []);

  const handleSave = () => {
    const updatedProfile = {
      fullName,
      about,
      profileImage,
      bodyMetrics,
    };
    localStorage.setItem("profileData", JSON.stringify(updatedProfile));
    alert("Profil bilgileri güncellendi!");
    navigate("/profil");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 pt-24">
      <h1 className="text-2xl font-bold">Profili Düzenle</h1>

      <div className="space-y-2">
        <label className="block text-sm">İsim Soyisim</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-neutral-300 p-2 rounded"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Hakkında</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full border border-neutral-300 p-2 rounded h-24"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Object.entries(bodyMetrics).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm capitalize">{key}</label>
            <input
              type="text"
              value={value}
              onChange={(e) =>
                setBodyMetrics((prev) => ({ ...prev, [key]: e.target.value }))
              }
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
