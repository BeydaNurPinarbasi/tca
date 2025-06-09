import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { fakeUsers } from "../../lib/fakeUsers";
import { Link } from "react-router-dom";
import InfoTab from "./ProfileTabs/InfoTab";
import PhotosTab from "./ProfileTabs/PhotosTab";
import EducationTab from "./ProfileTabs/EducationTab";
import ContractsTab from "./ProfileTabs/ContractsTab";
export default function Profile() {
  const { userEmail } = useAuth();
  const user = fakeUsers.find((u) => u.email === userEmail);
  const tabs = ["Bilgiler", "Fotoğraflar", "Eğitim", "Sözleşmeler"];
  const [activeTab, setActiveTab] = useState("Bilgiler");

  const [profileData, setProfileData] = useState({
    fullName: "",
    about: "",
    profileImage: "/press/placeholder.jpg",
    bodyMetrics: {
      shoe: "",
      height: "",
      eyes: "",
      weight: "",
      hair: "",
      chest: "",
      waist: "",
      hips: "",
      size: "",
    },
  });

  useEffect(() => {
    const stored = localStorage.getItem("profileData");
    if (stored) {
      setProfileData(JSON.parse(stored));
    } else if (user) {
      setProfileData({
        fullName: user.fullName,
        about: user.about,
        profileImage: user.profileImage || "/press/placeholder.jpg",
        bodyMetrics: user.bodyMetrics,
      });
    }
  }, [user]);

  if (!user) return <p className="pt-24 text-center">Kullanıcı bulunamadı.</p>;

return (
  <div className="max-w-5xl mx-auto pt-28 px-6 sm:px-12">
    <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
      {/* Profil Başlığı */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={profileData.profileImage}
          alt="Profil"
          className="w-28 h-28 rounded-full object-cover border-4 border-neutral-200 shadow-md"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-neutral-900">
            {profileData.fullName}
          </h2>
          <p className="text-sm text-neutral-500 mb-2">Model</p>
          <Link
            to="edit"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Profili Düzenle
          </Link>
        </div>
      </div>

      {/* Sekmeler + İçerik aynı kapsayıcıda */}
      <div className="space-y-6">
        {/* Sekmeler */}
        <div className="flex gap-4 flex-wrap border-b border-neutral-200 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium px-2 pb-1 transition-all ${
                activeTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sekme İçeriği */}
        <div>
          {activeTab === "Bilgiler" && (
            <InfoTab
              about={profileData.about}
              bodyMetrics={profileData.bodyMetrics}
            />
          )}
          {activeTab === "Fotoğraflar" && <PhotosTab />}
          {activeTab === "Eğitim" && <EducationTab />}
          {activeTab === "Sözleşmeler" && <ContractsTab />}
        </div>
      </div>
    </div>
  </div>
);
}