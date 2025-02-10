import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authService from "../services/authService";
import { handleApiError } from "../utils/errorHandler";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Auth.css"; 

const LoginPage = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.login(formData);
            toast.success("Đăng nhập thành công!");
            navigate("/dashboard"); 
        } catch (error) {
            toast.error(handleApiError(error));
        }
    };

    return (
        <div className="auth-container">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="text" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary">Đăng Nhập</button>
            </form>
            <p>Chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
            <button className="btn btn-danger">Đăng nhập với Google</button>
        </div>
    );
};

export default LoginPage;
