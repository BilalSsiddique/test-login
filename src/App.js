import Loginscreen from "./components/login/login";
import "./App.css";
import "./components/login/login.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupScreen from "./components/signup/signup";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPassword from "./components/resetPassword/resetPassword";
import RadicallX from "./components/images/RadicallX.png";
const App =  () => {
  return (
    <div className="main">
      <div className="purple"></div>
      <div className="login-comp">
        <div className="logo">
          <img src={RadicallX} alt="logo" />
        </div>
        <BrowserRouter>
          <ToastContainer position="top-center" />
          <Routes>
            <Route path="/" element={<SignupScreen />}></Route>
            <Route path="/login" element={<Loginscreen />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
