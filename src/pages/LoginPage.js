import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import authService from "../services/authService";
import Swal from "sweetalert2";
import "../styles/Auth.css"; 

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.login(credentials);
      login(res.data); 
      Swal.fire("Đăng nhập thành công!", "Chào mừng bạn!", "success");
      navigate("/home");
    } catch (error) {
      Swal.fire("Lỗi!", "Sai tài khoản hoặc mật khẩu!", "error");
    }
  };

  return (
    <div className="auth-container">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          onChange={handleChange}
          required
        />
        <button type="submit">Đăng Nhập</button>
      </form>
      <p>
        Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
      </p>
    </div>
  );
};

export default LoginPage;
