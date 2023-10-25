import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./EditUserpage.css";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Navbar";
const EditUserpage = () => {
  const { uid } = useParams();
  let navigate = useNavigate();
  const [useractive, setUseractive] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    country: "",
    state: "",
    address: "",
    dob: "",
  });

  const getUserViaId = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/getUserViaId/${uid}`
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserViaId();
  }, [uid]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const updateUserProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/v1/auth/users/${uid}`,
        data
      );

      if (response.data.success) {
        toast.success("User details updated successfully");
      } else {
        toast.error("Failed to update user details");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="user-profile">
        <Navbar />
        <div className="head-main">Edit / Delete User Data</div>
        <div className="userprofile-container">
          <form onSubmit={updateUserProfile}>
            <div className="content-half">
              <label>Name</label>
              <input
                name="username"
                defaultValue={data.name}
                onChange={handleInputs}
              />
            </div>

            <div className="content-half">
              <label>Phone</label>
              <input name="phone" defaultValue={data.phone} />
            </div>

            <div className="content-half">
              <label>Email</label>
              <input name="email" defaultValue={data.email} />
            </div>
            <div className="content-half">
              <label>Gender</label>
              <select
                id="gender"
                name="gender"
                defaultValue={data.gender}
                onChange={handleInputs}
              >
                <option disabled>{data.gender}</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="content-half">
              <label>DOB</label>
              <input
                type="date"
                name="dob"
                defaultValue={data.dob.substring(0, 10)}
                onChange={handleInputs}
              />
            </div>
            <div className="content-half">
              <label>Select Country</label>
              <select
                id="country"
                name="country"
                defaultValue={data.country}
                onChange={handleInputs}
              >
                <option disabled>{data.country}</option>
                <option>India</option>
              </select>
            </div>
            <div className="content-half">
              <label>Select State</label>
              <select
                id="state"
                name="state"
                defaultValue={data.state}
                onChange={handleInputs}
              >
                <option disabled>{data.state}</option>
                <option>MP</option>
                <option>UP</option>
                <option>AP</option>
                <option>JB</option>
                <option>KP</option>
                <option>NP</option>
              </select>
            </div>
            <div className="content-half">
              <label>Enter City</label>
              <input
                name="city"
                defaultValue={data.city}
                onChange={handleInputs}
              />
            </div>
            <div className="contentfullwidth">
              <label>Address</label>
              <textarea
                name="address"
                defaultValue={data.address}
                onChange={handleInputs}
              />
            </div>

            <div className="btn-group">
              <button type="submit">Save Changes</button>
              {/* <button onClick={Deleteuser}>Delete User</button> */}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default EditUserpage;
