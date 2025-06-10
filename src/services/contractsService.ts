// src/services/contractsService.ts

export interface Contract {
  title: string;
  signedAt: string;
}

// 🧪 Şimdilik mock veri — sonra API'den alınacak
const mockContracts: Contract[] = [
  {
    title: "Gizlilik ve Kişisel Verilerin Korunması Hakkında Aydınlatma Metni",
    signedAt: "2025-06-09T14:30:00.000Z",
  },
  {
    title: "Ticari Elektronik İleti Onay Formu",
    signedAt: "2025-06-09T14:35:00.000Z",
  },
  {
    title: "Kullanıcı Onayı ve Üyelik Sözleşmesi",
    signedAt: "2025-06-09T14:40:00.000Z",
  },
];

// 🛠 Geçici çözüm: mock veriyi döndür
export async function getContracts(): Promise<Contract[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockContracts), 500); // Simülasyon
  });
}
