import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home";
import Basvuru from "./pages/Basvuru";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout ile sarmalanmış sayfalar */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/basvuru" element={<Layout><Basvuru /></Layout>} />
      </Routes>
    </Router>
  );
}
