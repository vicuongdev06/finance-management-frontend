import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Routes/PrivateRoute";
import MainLayout from "./layouts/MainLayout";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Private routes: chỉ cho user đã đăng nhập */}
          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* Thêm các route cần bảo vệ khác ở đây */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRoutes;
