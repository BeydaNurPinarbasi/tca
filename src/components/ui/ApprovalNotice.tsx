// src/components/ui/ApprovalNotice.tsx

export default function ApprovalNotice({ onApprove }: { onApprove: () => void }) {
  return (
    <div className="mt-10 space-y-4">
      {/* Bilgilendirme Yazısı */}
      <div className="text-sm text-neutral-600">
        Gerçekleştirdiğiniz değişiklikler için{" "}
        <strong>“Onay Gönder”</strong> butonuna basmanız
        gerekmektedir. Yaptığınız değişiklikler tarafımıza Onay’a düşecektir. Editörlerimiz
        tarafından incelendikten sonra <strong>“Onay”</strong> verilip yayına alınacaktır.
      </div>

      {/* Onay Butonu */}
      <div className="text-right">
        <button
          onClick={onApprove}
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
