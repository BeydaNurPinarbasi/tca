import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

export default function PhotosTab() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // LocalStorage'dan yükle
  useEffect(() => {
    const stored = localStorage.getItem("modelPhotos");
    if (stored) {
      setPhotos(JSON.parse(stored));
    }
  }, []);

  // Fotoğraf yükleme
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      const updated = [...photos, base64];
      setPhotos(updated);
      localStorage.setItem("modelPhotos", JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  };

  // Fotoğraf silme
  const handleDelete = (index: number) => {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated);
    localStorage.setItem("modelPhotos", JSON.stringify(updated));
  };

  // Onaya gönder (şimdilik sadece uyarı)
  const handleSubmitForApproval = () => {
    alert("Fotoğraflar editör onayına gönderildi!");
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Model Fotoğrafları</h3>

      {/* Açıklama */}
      <p className="text-sm text-neutral-500 mb-4">
        Gerçekleştirdiğiniz değişiklikler için{" "}
        <span className="font-semibold text-black">“Onaya Gönder”</span>{" "}
        butonuna basmanız gerekmektedir. Editörlerimiz tarafından incelendikten
        sonra yayına alınacaktır.
      </p>

      {/* Fotoğraf Yükle */}
      <div className="mb-4">
        <label className="inline-block bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-neutral-800 transition">
          Fotoğraf Yükle
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        </label>
      </div>

      {/* Galeri */}
      {photos.length === 0 ? (
        <p className="text-sm text-neutral-500">Henüz fotoğraf yüklenmedi.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((src, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={`model-foto-${index}`}
                className="rounded-lg object-cover aspect-square border border-neutral-200 cursor-pointer"
                onClick={() => {
                  setPreviewPhoto(src);
                  setOpen(true);
                }}
              />
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-1 right-1 bg-white text-black text-xs px-2 py-1 rounded shadow hover:bg-red-500 hover:text-white transition"
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Onaya Gönder Butonu */}
      <div className="text-right mt-6">
        <button
          onClick={handleSubmitForApproval}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Onaya Gönder
        </button>
      </div>

      {/* Modal: Önizleme */}
      <Dialog open={open} onClose={() => setOpen(false)} className="fixed z-50 inset-0">
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-xl w-full bg-white rounded-lg overflow-hidden">
            <img src={previewPhoto || ""} alt="Büyük Önizleme" className="w-full object-contain" />
            <div className="p-4 text-right">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-800 transition"
              >
                Kapat
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
