import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { fakeUsers } from "../../lib/fakeUsers";
import { Link } from "react-router-dom";
import InfoTab from "./ProfileTabs/InfoTab";
import PhotosTab from "./ProfileTabs/PhotosTab";
import EducationTab from "./ProfileTabs/EducationTab";
import ContractsTab from "./ProfileTabs/ContractsTab";
import { getUserMembershipDate } from "../../services/userService";
import Tooltip from "../../components/ui/Tooltip";

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

  const [signedAt, setSignedAt] = useState<string | null>(null);

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

  useEffect(() => {
    if (userEmail) {
      getUserMembershipDate(userEmail).then(setSignedAt);
    }
  }, [userEmail]);

  const getRemainingMembershipDays = (signedAt: string) => {
    const signedDate = new Date(signedAt);
    const expiryDate = new Date(signedDate);
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    expiryDate.setHours(0, 0, 0, 0);
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  if (!user) return <p className="pt-24 text-center">Kullanıcı bulunamadı.</p>;

  return (
    <div className="max-w-5xl mx-auto mt-20 mb-10 px-6 sm:px-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
        {/* Profil Başlığı */}
        <div className="grid sm:grid-cols-[auto_1fr] gap-6 items-center">
          <img
            src={profileData.profileImage}
            alt="Profil"
            className="w-28 h-28 rounded-full object-cover border-4 border-neutral-200 shadow-md"
          />
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold text-neutral-900">
                {profileData.fullName}
              </h2>
              <Tooltip content="Profili Düzenle">
                <Link to="edit" className="text-gray-600 hover:text-zinc-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                  </svg>
                </Link>
              </Tooltip>
            </div>

            <p className="text-sm text-neutral-500">Model</p>

            {signedAt && (
              <div className="border border-neutral-200 bg-neutral-50 rounded-md px-4 py-2 mt-3 text-sm text-neutral-700 shadow-sm">
                Üyeliğinizin bitmesine{" "}
                <strong>{getRemainingMembershipDays(signedAt)}</strong> gün
                kaldı.
              </div>
            )}
          </div>
        </div>

        {/* Sekmeler */}
        <div className="space-y-6">
          <div className="flex gap-4 flex-wrap border-b border-neutral-200 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium px-3 pb-1 border-b-2 ${
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-neutral-500 hover:text-black hover:border-neutral-300"
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
