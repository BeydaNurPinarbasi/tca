export default function ModelCampForm() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-neutral-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12 transition-all">
      
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans">
          {[
            { id: 'name', label: 'Ad / Name *', type: 'text' },
            { id: 'surname', label: 'Soyad / Surname *', type: 'text' },
            { id: 'phone', label: 'Telefon / Telephone *', type: 'tel' },
            { id: 'instagram', label: 'Instagram kullanıcı adı *', type: 'text' },
            { id: 'email', label: 'E-posta *', type: 'email' },
            { id: 'city', label: 'Bulunduğunuz şehir / City *', type: 'text' },
          ].map(({ id, label, type }) => (
            <div key={id} className="flex flex-col">
              <label htmlFor={id} className="text-gray-700 font-medium">{label}</label>
              <input
                id={id}
                type={type}
                required
                className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          ))}

          {/* Doğum Tarihi */}
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="birthdate" className="text-gray-700 font-medium">Doğum tarihi / Date of birth *</label>
            <input
              id="birthdate"
              type="date"
              required
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Neden Katılım */}
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="reason" className="text-gray-700 font-medium">Model Camp eğitimlerine neden katılmak istiyorsunuz? *</label>
            <textarea
              id="reason"
              required
              rows={4}
              className="mt-1 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Tarih Seçimi */}
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="campDates" className="text-gray-700 font-medium">Model Camp tarihlerini seçiniz *</label>
            <select
              id="campDates"
              required
              className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Bir tarih seçin</option>
              <option value="Eylül">4-5-6 Eylül 2025 - İstanbul</option>
            </select>
          </div>

          {/* KVKK */}
          <div className="flex items-start gap-2 sm:col-span-2 text-sm text-gray-700">
            <input id="kvkk" type="checkbox" required className="mt-1" />
            <label htmlFor="kvkk">
              Gizlilik ve Kişisel Verilerin Korunması Hakkında Aydınlatma Metnini okudum ve kabul ediyorum *
            </label>
          </div>

          {/* Buton */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full sm:w-auto bg-black text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
