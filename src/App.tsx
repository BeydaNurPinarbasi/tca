import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home";
import Basvuru from "./pages/Basvuru";
import Production from "./pages/Production";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

// Özel Router wrapper componenti
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/basvuru" element={<Layout><Basvuru /></Layout>} />
        <Route path="/production" element={<Layout><Production /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
