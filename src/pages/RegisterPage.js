import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Swal from "sweetalert2";
import "../styles/Auth.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData);
      Swal.fire("Đăng ký thành công!", "Vui lòng đăng nhập.", "success");
      navigate("/");
    } catch (error) {
      Swal.fire("Lỗi!", error.response?.data?.message || "Đăng ký thất bại!", "error");
    }
  };

  return (
    <div className="auth-container">
      <h2>Đăng Ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
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
        <button type="submit">Đăng Ký</button>
      </form>
      <p>
        Đã có tài khoản? <a href="/">Đăng nhập ngay</a>
      </p>
    </div>
  );
};

export default RegisterPage;
