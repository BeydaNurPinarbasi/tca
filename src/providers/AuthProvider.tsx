import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import type { UserData } from "../types/UserData";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("userData");
    if (stored) {
      const parsed: UserData = JSON.parse(stored);
      setIsAuthenticated(true);
      setUserEmail(parsed.email);
      setUserData(parsed);
    }
  }, []);

  const login = (user: UserData) => {
    setIsAuthenticated(true);
    setUserEmail(user.email);
    setUserData(user);
    localStorage.setItem("userData", JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail(null);
    setUserData(null);
    localStorage.removeItem("userData");
    navigate("/cast-login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
