import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Chào mừng {user?.username}!</h2>
            <button className="btn btn-danger" onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
};

export default Dashboard;
