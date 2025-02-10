import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../services/authService";
import { handleApiError } from "../utils/errorHandler";
import "../styles/Auth.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.register(formData);
            toast.success("Đăng ký thành công!");
            navigate("/");
        } catch (error) {
            toast.error(handleApiError(error));
        }
    };

    return (
        <div className="auth-container">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
                <button type="submit" className="btn btn-success">Đăng Ký</button>
            </form>
            <p>Đã có tài khoản? <a href="/">Đăng nhập ngay</a></p>
        </div>
    );
};

export default RegisterPage;
