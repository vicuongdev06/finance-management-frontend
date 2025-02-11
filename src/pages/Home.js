import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Chào mừng bạn!",
      text: "Bây giờ bạn có thể quản lý thu chi của mình.",
      icon: "success",
      confirmButtonText: "OK"
    });
  }, []);

  return (
    <div className="text-center">
      <h2>Quản lý tài chính cá nhân</h2>
      <p>Bắt đầu tạo kế hoạch và theo dõi chi tiêu, thu nhập của bạn.</p>
      <Button variant="primary" onClick={() => navigate("/create-plan")}>
        + Tạo kế hoạch mới
      </Button>
    </div>
  );
};

export default Home;
