import React, { useEffect, useState } from "react";
import logoimg from "../photos/logo-img.png";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cogoToast from "cogo-toast";
import { styled } from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const adminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/adminLoginUser",
        {
          email,
          password,
        }
      );

      console.log(response.data);
      cogoToast.success("OTP sent Successfully");
      setPopupVisible(true);
    } catch (error) {
      console.log(error);
      cogoToast.error(error);
    }
  };

  const closeUpdatePopup = () => {
    setPopupVisible(false);
  };

  const Popup = ({ email, onClose }) => {
    const [otp, setOtp] = useState("");
    console.log(email);

    return (
      <>
        <div>
          <div className={`popup-container${popupVisible ? " active" : ""}`}>
            <div className="popup">
              <form className="d-flex flex-column">
                <div className="d-flex justify-content-evenly flex-column">
                  <label htmlFor="otp" className="fw-bold">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="mb-3 rounded p-1"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <button type="submit" className="btn btn-success mt-2 mb-2">
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger mt-2"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Container>
        <form onSubmit={adminLogin}>
          <div className="outer-login-container ">
            <div className="login-container">
              <div className="login-left">
                <img src={logoimg} />
              </div>
              <div className="login-right">
                <h1>Admin Login</h1>
                <br />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <Link to="/forgotpassword" className="fp">
                  Forgot password?
                </Link>
                <button type="submit">Send OTP</button>
                <hr className="light-grey-hr" />
                <p>
                  Don't have an account?{" "}
                  <Link to="/admin-register">Register as Admin</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
        {popupVisible && <Popup email={email} onClose={closeUpdatePopup} />}
        <ToastContainer />
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  .popup-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
  }

  .popup-container.active {
    display: flex;
    background-color: #00000075;
    z-index: 1;
  }

  .popup {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
