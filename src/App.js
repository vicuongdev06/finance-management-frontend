import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <ToastContainer />
            <AppRoutes />
        </>
    );
}

export default App;
