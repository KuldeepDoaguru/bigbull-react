import React, { useState } from "react";
// import mainlogo from "../photos/mainlogo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navigationbar.css";
import Cookies from "js-cookie";
import testimg from "../photos/no-profile.jpg";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BsSuitHeart, BsCart3, BsBell } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";

const Navigationbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userdetails, setuserDetails] = useState();
  const user = useSelector((state) => state.user);
  console.log(`User Name: ${user.name}, User ID: ${user.id}`);
  console.log("User State:", user);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Courses", path: "/courses" },
    { text: "About", path: "/about" },
    { text: "Blogs", path: "/blogs" },
    { text: "Contact", path: "/contact" },
  ];

  const authToken = Cookies.get("authToken");
  return (
    <>
      <Container>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                {navLinks.map((link, index) => (
                  <li className="nav-item" key={index}>
                    <Link
                      className={`nav-link ${
                        location.pathname === link.path ? "active" : ""
                      }`}
                      to={link.path}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <div class="d-flex" role="search">
                {authToken ? (
                  <>
                    <Link className="nav-link" to="/enrollnow">
                      My Learning
                    </Link>
                    <Link className="nav-link" to="/login">
                      <BsSuitHeart className="icons" />
                    </Link>
                    <Link className="nav-link" to="/login">
                      <BsCart3 className="icons" />
                    </Link>

                    <Link className="nav-link" to="/login">
                      <BsBell className="icons" />
                    </Link>
                    <Link className="nav-link" to="/edit-profile">
                      <div class="icon-container">
                        <RxAvatar className="icons" />
                        <ul class="list rounded">
                          <li>
                            <div className="d-flex justify-content-around">
                              <div>
                                <RxAvatar className="icons-user" />
                              </div>
                              <div className="ml-1">
                                <p
                                  className="fw-bold m-0 fs-5"
                                  style={{ color: "black" }}
                                >
                                  {user.name}
                                </p>
                                <p className="m-0" style={{ color: "#7f8fa6" }}>
                                  {user.name}
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>Notifications</li>
                          <li>Messages</li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>Account Settings</li>
                          <li>Payment Methods</li>
                          <li>Purchase History</li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>Public Profile</li>
                          <li>Edit Profile</li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>Help</li>
                          <li>Logout</li>
                        </ul>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className="nav-link btn btn-danger" to="/enrollnow">
                      Enroll Now
                    </Link>
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navigationbar;
const Container = styled.div`
  .navbtns {
    a {
      color: white;
      font-weight: bold;
      margin-top: 1rem;
    }
  }
  nav {
    background: transparent;
    position: absolute;
  }
  .nav-link {
    color: #f8c291;
    font-weight: bold;
    background: #000;
    margin-left: 1rem;
    border-radius: 5px;
  }
  .active {
    color: yellow;
    font-weight: bold;
  }
  .icons {
    font-size: 1.5rem;
  }

  .icon-container {
    position: relative; /* Set the container to relative positioning */
    display: inline-block; /* Ensure the container and list stay inline */
  }

  .list {
    display: none; /* Initially hide the list */
    position: absolute; /* Position it absolutely within the container */
    top: 100%; /* Position it below the icon */
    background-color: #fff; /* Set a background color for the list */
    border: 1px solid #ccc; /* Add a border for styling */
    list-style: none; /* Remove the list bullets */
    padding: 0.5rem; /* Remove padding */
    width: 240px;
    right: 0; /* Reset any right positioning */
    li {
      color: #7f8fa6;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .icon-container:hover .list {
    display: block; /* Show the list on hover */
  }

  .icons-user {
    font-size: 3rem;
  }
`;
