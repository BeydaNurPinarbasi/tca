import { Routes, Route, Outlet } from "react-router-dom";
import Profile from "./profile";
import EditProfile from "./EditProfile";
import EditMeasurements from "./EditMeasurements"; 

export default function ModelLoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        {/* Ana profil sayfası */}
        <Route index element={<Profile />} />

        {/* Profili düzenleme */}
        <Route path="edit" element={<EditProfile />} />

        {/* Ölçüleri düzenleme */}
        <Route path="edit-measurements" element={<EditMeasurements />} />
      </Route>
    </Routes>
  );
}
