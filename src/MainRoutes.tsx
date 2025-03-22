import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/login/page";
import DashboardPage from "./pages/dashboard/page";
import CoursePage from "./pages/course/page";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/course" element={<CoursePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
