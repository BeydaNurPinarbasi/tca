import { useNavigate } from "react-router-dom";
import Tooltip from "../../../components/ui/Tooltip";

type Props = {
  about: string;
  bodyMetrics: { [key: string]: string };
};

export default function InfoTab({ about, bodyMetrics }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-800 tracking-tight mb-2">
          Hakkımda
        </h3>

        <p className="text-base text-neutral-700 leading-relaxed whitespace-pre-wrap">
          {about || "Henüz bir açıklama eklenmemiş."}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-neutral-800 tracking-tight">
            Beden Ölçüleri
          </h3>

          <Tooltip content="Ölçüleri Düzenle">
            <button
              onClick={() => navigate("/profil/edit-measurements")}
              className="text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
                />
              </svg>
            </button>
          </Tooltip>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(bodyMetrics).map(([key, value]) => (
            <div
              key={key}
              className="bg-white border border-neutral-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs text-neutral-500 capitalize tracking-wide">
                {key}
              </div>
              <div className="text-base font-medium text-neutral-800 mt-1">
                {value || "-"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
