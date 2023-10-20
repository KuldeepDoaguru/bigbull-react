import React, { useEffect, useState } from "react";
import logoimg from "../photos/register-img.png";
import "../Login-Enroll/Enrollnow.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import enroll from "../../image/EnrollNow.webp";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Enrollnow = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    cpassword: "",
    country: "",
    state: "",
    address: "",
    dob: "",
    refferelCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Use spread syntax to update only the changed field
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDateChange = (date) => {
    setData((prevData) => ({
      ...prevData,
      dob: date,
    }));
  };

  console.log(data);

  const register = async (e) => {
    e.preventDefault();

    const toastOptions = {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored",
    };

    if (!data.email) {
      toast.error("Email is required!", toastOptions);
    } else if (!data.phone) {
      toast.warn("Mobile number is required!", toastOptions);
    } else if (!data.password) {
      toast.warn("Password is required!", toastOptions);
    } else if (!data.state) {
      toast.warn("state is required", toastOptions);
    } else if (data.password !== data.cpassword) {
      toast.error("Password and confirm password do not match", toastOptions);
    } else if (!data.name) {
      toast.error("name is required", toastOptions);
    } else if (!data.dob) {
      toast.error("date of birth is required", toastOptions);
    } else if (!data.gender) {
      toast.error("Gender is required", toastOptions);
    } else if (!data.country) {
      toast.error("country is required", toastOptions);
    } else if (!data.address) {
      toast.error("address is required", toastOptions);
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Registration successful!", toastOptions);
        navigate("/login");
      } else {
        toast.error(
          response.data.message || "Registration failed",
          toastOptions
        );
      }
    } catch (error) {
      toast.error(error.response?.data || "An Error occured", toastOptions);
    }
  };

  return (
    <>
      <Container>
        <div>{/* <img src={enroll} alt="about" /> */}</div>
        <div className="mt-5 mb-5">
          <form onSubmit={register}>
            <div className="outer-enrollnow-container">
              <div className="enrollnow-container">
                <div className="enrollnow-left">
                  <img src={logoimg} alt="user" />
                </div>

                <div className="enrollnow-right">
                  <h1>Register to Bigbulls</h1>
                  <br />

                  <div className="sub">
                    <div className="row g-3">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label for="name">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={data.name}
                          onChange={handleInputChange}
                          placeholder="Enter your Full Name"
                        />
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          onChange={handleInputChange}
                          placeholder="xyz@gmail.com"
                        />
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label>Enter Mobile number</label>
                        <input
                          type="number"
                          name="phone"
                          value={data.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your 10 digit Mobile phone"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label>Gender</label>
                        <select
                          id="gender"
                          name="gender"
                          value={data.gender}
                          onChange={handleInputChange}
                          className="inputsel"
                        >
                          <option value="">Select an Option</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="other">ohter</option>
                        </select>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label>Create password</label>
                        <input
                          name="password"
                          value={data.password}
                          onChange={handleInputChange}
                          className="inputsel"
                          type="password"
                          placeholder="Enter Password"
                          id="password"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label>Confirm password</label>
                        <input
                          type="password"
                          name="cpassword"
                          placeholder="Enter Password"
                          id="cpassword"
                          value={data.cpassword}
                          className="inputsel"
                          onChange={handleInputChange}
                        />
                        <span id="message"></span>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label for="country">
                          Choose your country from the list:
                        </label>
                        <select
                          id="country"
                          name="country"
                          value={data.country}
                          onChange={handleInputChange}
                          className="inputsel"
                        >
                          <option value="">Select an Option</option>
                          <option value="India">India</option>
                          <option value="Australia">Australia</option>
                          <option value="UAE">UAE</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label for="state">
                          Choose your state from the list:
                        </label>
                        <select
                          id="state"
                          name="state"
                          value={data.state}
                          onChange={handleInputChange}
                          className="inputsel"
                        >
                          <option value="">Select an Option</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="UP">UP</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Assam">Assam</option>
                        </select>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label>Enter Address</label>
                        <input
                          type="text"
                          name="address"
                          value={data.address}
                          onChange={handleInputChange}
                          placeholder="Enter your address"
                        />
                      </div>

                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <label for="dateInput">Select or Enter Date:</label>
                        <div class="input-group">
                          <DatePicker
                            selected={data.dob}
                            onChange={(date) => handleDateChange(date)}
                            className="form-control inputsel"
                            dateFormat="dd-MM-yyyy"
                            placeholderText="Select a date"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <input
                    name="refferelCode"
                    value={data.refferelCode}
                    onChange={handleInputChange}
                    placeholder="Enter Referral Code"
                    type="text"
                  />
                  <button className="submitbtn" type="submit">
                    submit
                  </button>

                  <hr className="light-grey-hr" />
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <ToastContainer />
      </Container>
    </>
  );
};

export default Enrollnow;
const Container = styled.div`
  .inputsel {
    width: 100%;
  }

  input {
    width: 100%;
  }
`;
