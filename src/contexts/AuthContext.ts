import { createContext } from "react";
import type { UserData } from "../types/UserData"; // Kullanıcının tüm bilgilerini içeren type

export interface AuthContextType {
  isAuthenticated: boolean;        // Kullanıcı giriş yaptı mı
  userEmail: string | null;        // Giriş yapan kullanıcının e-postası
  userData: UserData | null;       // Giriş yapan kullanıcının tüm bilgileri
  login: (user: UserData) => void; // Giriş fonksiyonu (artık sadece email değil, tüm kullanıcı verisi alıyor)
  logout: () => void;              // Çıkış fonksiyonu
}

// Context objesi export edilir
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
