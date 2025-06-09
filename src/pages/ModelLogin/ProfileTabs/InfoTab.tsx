// src/pages/ModelLogin/ProfileTabs/InfoTab.tsx
type Props = {
  about: string;
  bodyMetrics: { [key: string]: string };
};

export default function InfoTab({ about, bodyMetrics }: Props) {
  return (
    <>
      <div>
        <h3 className="text-md font-semibold text-neutral-700 mb-1">Hakkımda</h3>
        <p className="text-sm text-neutral-800 leading-relaxed whitespace-pre-wrap">
          {about || "Henüz bir açıklama eklenmemiş."}
        </p>
      </div>

      <div>
        <h3 className="text-md font-semibold text-neutral-700 mb-3">Beden Ölçüleri</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {Object.entries(bodyMetrics).map(([key, value]) => (
            <div
              key={key}
              className="bg-neutral-100 rounded-lg p-3 shadow-inner"
            >
              <div className="text-xs text-neutral-500 capitalize">{key}</div>
              <div className="text-sm font-medium text-neutral-900 mt-1">
                {value || "-"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
