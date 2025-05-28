import heroImage from "../assets/bg-fashion.webp";

export default function ModelAcademy() {
  return (
    <section className="bg-white text-black font-sans">
      {/* Hero Görsel */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Model Academy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl font-fancy z-10 text-center px-4">
          TWO COWBOYS MODEL CAMP
        </h1>
      </div>

      {/* Açıklama */}
      <div className="px-4 sm:px-6 md:px-10 py-16 space-y-8 text-base leading-relaxed max-w-4xl mx-auto">
        <p>
          Yeni nesil moda anlayışı ve değişen modellik kriterleri ile boy, kilo,
          yaş ve diğer unsurları ayırt etmeksizin sektörde yer almak isteyen
          herkese modellik mesleğini öğretip ‘Profesyonel’ kimlik
          kazandırıyoruz.
        </p>
        <p>
          Sektörde yer alabilmeniz için gerçekleştirdiğimiz ‘Model Camp’
          eğitimleri ile modellik mesleğinin tüm yönlerini konu alan teknik /
          teorik çalışmalar, fotoğraf çekimleri ve podyum çalışmalarıyla sizi
          donanımlı hale getiriyoruz.
        </p>
        <p>
          Model Camp sonrası ‘Two Cowboys Model Cast’ platformu ile profesyonel
          portfolyo oluşturmanıza ve iş birlikleri yapmanıza olanak sağlıyoruz.
        </p>

        {/* Tarihler */}
        <div className="bg-neutral-100 p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">MODEL CAMP TARİHLERİ</h2>
          <p>
            <strong>Eğitim Tarihleri:</strong> 4-5-6 EYLÜL 2025 - İSTANBUL
          </p>
          <p>
            <strong>Eğitim Akışı:</strong> 3 gün, her gün 12:00 / 19:00, toplam
            21 saat
          </p>
          <p>
            <strong>Çalışma Alanları:</strong> Kayıt sonrası adres bilgisi
            paylaşılacaktır.
          </p>
        </div>

        {/* İçerikler */}
        <div>
          <h2 className="text-xl font-bold mt-8 mb-4">
            MODEL CAMPTA SİZİ NELER BEKLİYOR
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Tam Donanımlı Modellik Eğitimi</li>
            <li>Profesyonel Fotoğraf Çekimi</li>
            <li>Model Cast Platformu ile İşbirlikleri</li>
            <li>Katılım Sertifikası</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-8 mb-4">
            MODEL CAMPTA NELER ÖĞRENECEKSİNİZ
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base text-gray-800">
            <li>
              Moda genel kültürü, modellik mesleğinin tanımı, mesleki ve teknik
              terimler
            </li>
            <li>
              Fotoğraf çalışmaları (poz verme, ifade şekilleri, duruş
              pozisyonları, dinamik pozlama, etkili ifade şekilleri, giysi ve
              aksesuar kullanımı, tüm vücut kontrolü, kamera önü yönetimi ve
              fotoğrafçı ile senkron olma)
            </li>
            <li>
              Podyum çalışmaları (ritmik ve sayılı adımlar, çıkışlar, dönüşler,
              duruşlar, koreografiler, kulis düzenleri, backstage, müzik ve ışık
              koordinasyonu vd)
            </li>
            <li>
              Model çeşitleri ve çalışma alanları (editorial model, runway
              model, fitness model, advert model, teen age model, hand model,
              foot model, old model, plus size model, swim wear model, petite
              model, part model, glamour model)
            </li>
            <li>
              Ajans ve model managementler, sözleşme prensipleri, bütçe ve
              komisyonlar
            </li>
            <li>Casting ve fitting süreçleri</li>
            <li>
              Model setcard ve model portfolyo nasıl oluşturulur, nerelerde
              kullanılır
            </li>
            <li>
              Sektör işleyişi, ipuçları, doğru bilinen yanlışlar, stres yönetimi
              ve konsantrasyon
            </li>
            <li>
              Modelin moda endüstrisindeki değişen trendlere uyumluluğu ve
              sektörün beklentileri
            </li>
            <li>
              Modelin sosyal medya kullanımı, içerikleri ve kendini markalama
              yöntemleri
            </li>
          </ul>
        </div>
        {/* Fotoğraf Çekimi */}
        <div className="space-y-3 mb-12">
          <h3 className="text-2xl font-semibold">
            PROFESYONEL FOTOĞRAF ÇEKİMİ
          </h3>
          <p>
            Model Campta profesyonel set ortamında moda fotoğrafçısı tarafından
            imaj çekimleriniz olacaktır.
          </p>
          <p>
            Fotoğraf çekimi öncesi make up, hair style ve stylist tarafından
            hazırlanacaksınız.
          </p>
          <p>Kıyafet kombininizi oluşturmada tercih size aittir.</p>
          <p>Çekilen tüm imaj fotoğrafları katılımcılara teslim edilecektir.</p>
        </div>
        {/* İşbirliği ve Platform */}
        <div className="space-y-3 mb-16">
          <h3 className="text-2xl font-semibold">
            MODEL CAMP SONRASI İŞ BİRLİKLERİ İÇİN ‘TWO COWBOYS MODEL CAST’
            PLATFORMU
          </h3>
          <p>
            Model Camp eğitimleri sonrası markalar, tasarımcılar,
            fotoğrafçılarla iş birlikleri yapmak için ‘Two Cowboys Model Cast’
            bünyesinde ve sektörde yer alma imkanı yakalayacaksınız.
          </p>
          <p>
            ‘Model Cast’ platformunda Profesyonel Model Portfolyonuzu
            oluşturabilecek, düzenleyebilecek ve her daim güncel
            tutabileceksiniz. Portfolyonuz iş birlikleri yapmanız için ‘Two
            Cowboys Model Cast’ kategorisinde yer alacaktır.
          </p>
          <p>
            Model Campta aldığınız tüm eğitim ve derslere ‘Model Cast’ platformu
            üzerinden 7/24 erişebileceksiniz.
          </p>
          <p>
            ‘Two Cowboys Club’ üyeliğiniz gerçekleştirilecek. Tarafımızdan
            düzenlenen workshoplar, network buluşmaları, casting ve etkinliklere
            öncelikli olarak katılım sağlayabileceksiniz.
          </p>
        </div>
      </div>
    </section>
  );
}
