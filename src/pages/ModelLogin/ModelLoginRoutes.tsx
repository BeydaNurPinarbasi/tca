import { Routes, Route, Outlet } from "react-router-dom";
import Profile from "./profile";
import EditProfile from "./EditProfile"; // yeni sayfa

export default function ModelLoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {/* Ana rota: /profil */}
        <Route index element={<Profile />} />

        {/* Profili düzenle sayfası: /profil/edit */}
        <Route path="edit" element={<EditProfile />} />
      </Route>
    </Routes>
  );
}
