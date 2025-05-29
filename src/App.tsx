import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/home";
import Basvuru from "./pages/Basvuru";
import Production from "./pages/Production";
import NotFound from "./pages/NotFound";
import ModelsPage from "./pages/Models";
import ModelAcademy from "./pages/ModelAcademy";
import ModelCast from "./pages/ModelCast";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";


import { AnimatePresence } from "framer-motion";
import ModelCastLogin from "./pages/ModelCastLogin";


// Özel Router wrapper componenti
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/basvuru"
          element={
            <Layout>
              <Basvuru />
            </Layout>
          }
        />
        <Route
          path="/production"
          element={
            <Layout>
              <Production />
            </Layout>
          }
        />
        <Route
          path="/models"
          element={
            <Layout>
              <ModelsPage />
            </Layout>
          }
        />
            <Route
          path="/cast"
          element={
            <Layout>
              <ModelCast />
            </Layout>
          }
        />
         <Route
          path="/academy"
          element={
            <Layout>
              <ModelAcademy />
            </Layout>
          }
        />
           <Route
          path="/cast-login"
          element={
            <Layout>
              <ModelCastLogin />
            </Layout>
          }
        />

        {/* BLOG */}
        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <BlogDetail />
            </Layout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
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
