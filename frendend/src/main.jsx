import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './style/global.css'
import { AuthProvider } from "./context/authContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <App />
    </AuthProvider>
);
