export const handleApiError = (error) => {
    if (error.response) {
        switch (error.response.status) {
            case 400:
                return error.response.data.message || "Yêu cầu không hợp lệ!";
            case 401:
                return "Sai tài khoản hoặc mật khẩu!";
            case 403:
                return "Bạn không có quyền truy cập!";
            case 404:
                return "Không tìm thấy dữ liệu!";
            case 500:
                return "Lỗi máy chủ, vui lòng thử lại sau!";
            default:
                return "Đã xảy ra lỗi!";
        }
    } else {
        return "Không thể kết nối đến máy chủ!";
    }
};
