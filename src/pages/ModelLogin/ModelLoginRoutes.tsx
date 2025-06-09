import { Routes, Route, Outlet } from "react-router-dom";
import Profile from "./profile";
// import Settings from "./Settings"; // İleride eklenecek sayfalar için örnek

export default function ModelLoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {/* Ana rota: /profil */}
        <Route index element={<Profile />} />

        {/* Diğer alt sayfalar */}
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
}
