import { useForm } from "react-hook-form";
import Button from "./ui/Button";

type FormValues = {
  name: string;
  surname: string;
  phone: string;
  instagram: string;
  email: string;
  city: string;
  birthdate: string;
  reason: string;
  campDates: string;
  kvkk: boolean;
};

export default function ModelCampForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form verisi:", data);
    // buraya API entegrasyonu eklenebilir
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-neutral-50 to-white px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 transition-all">
        <h2 className="text-h2 font-serif mb-8 text-center">Model Camp Başvuru Formu</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          {[
            { id: "name", label: "Ad / Name *", type: "text" },
            { id: "surname", label: "Soyad / Surname *", type: "text" },
            { id: "phone", label: "Telefon / Telephone *", type: "tel" },
            { id: "instagram", label: "Instagram kullanıcı adı *", type: "text" },
            { id: "email", label: "E-posta *", type: "email" },
            { id: "city", label: "Şehir / City *", type: "text" },
          ].map(({ id, label, type }) => (
            <div key={id} className="flex flex-col">
              <label htmlFor={id} className="text-gray-800 font-medium mb-1">{label}</label>
              <input
                id={id}
                type={type}
                {...register(id as keyof FormValues, { required: true })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              {errors[id as keyof FormValues] && <span className="text-red-500 text-xs mt-1">Bu alan zorunludur.</span>}
            </div>
          ))}

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="birthdate" className="text-gray-800 font-medium mb-1">Doğum tarihi / Date of birth *</label>
            <input
              id="birthdate"
              type="date"
              {...register("birthdate", { required: true })}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.birthdate && <span className="text-red-500 text-xs mt-1">Bu alan zorunludur.</span>}
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="reason" className="text-gray-800 font-medium mb-1">Model Camp eğitimlerine neden katılmak istiyorsunuz? *</label>
            <textarea
              id="reason"
              rows={4}
              {...register("reason", { required: true })}
              className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.reason && <span className="text-red-500 text-xs mt-1">Bu alan zorunludur.</span>}
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="campDates" className="text-gray-800 font-medium mb-1">Model Camp tarihlerini seçiniz *</label>
            <select
              id="campDates"
              {...register("campDates", { required: true })}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Bir tarih seçin</option>
              <option value="eylul">4-5-6 Eylül 2025 - İstanbul</option>
            </select>
            {errors.campDates && <span className="text-red-500 text-xs mt-1">Lütfen bir tarih seçin.</span>}
          </div>

          <div className="flex items-start gap-3 sm:col-span-2 text-sm text-gray-700">
            <input id="kvkk" type="checkbox" {...register("kvkk", { required: true })} className="mt-1" />
            <label htmlFor="kvkk" className="text-sm">
              Gizlilik ve Kişisel Verilerin Korunması Hakkında Aydınlatma Metnini okudum ve kabul ediyorum *
            </label>
          </div>
          {errors.kvkk && <span className="text-red-500 text-xs mt-1 sm:col-span-2">Bu kutucuğu işaretlemeniz gerekiyor.</span>}

          <div className="sm:col-span-2">
            <Button variant="primary" type="submit" className="w-full sm:w-auto">
              Gönder
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
