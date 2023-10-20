import React from "react";
import { Card } from "react-bootstrap";
import "./Homepagecoursecardcontainer.css";
import Card1 from "./Card1";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import cardimg1 from "../photos/cardimgs/1.png";
import cardimg2 from "../photos/cardimgs/2.png";
import cardimg3 from "../photos/cardimgs/3.png";
import cardimg4 from "../photos/cardimgs/4.png";
import cardimg5 from "../photos/cardimgs/5.png";
import cardimg6 from "../photos/cardimgs/6.png";

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSuitHeartFill, BsCart3, BsBell } from "react-icons/bs";

const Homepagecoursecardcontainer = () => {
  const [allCourses, setallCourses] = useState([]);

  const [keyword, setkeyword] = useState("");

  useEffect(() => {
    axios
      .get(`/course/course/`)
      .then((response) => {
        setallCourses(
          response.data.sort(GetSortOrder("course_price" - "offer_price"))
        );
      })
      .catch((e) => {
        toast.error(e, {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: "colored",
        });
      });
  }, []);

  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }
  // console.log(allCourses)
  // allCourses.map((course) => {
  //     console.log(course.course_price)
  // })
  return (
    <>
      <Container>
        <div className="home-all-card-container-outer">
          <div className="container">
            <h2 className="text-center mb-5" id="spo">
              Specail Offers
            </h2>
          </div>
          <div className="container-fluid">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-group">
                    <div className="card course-card d-flex mr-3 border">
                      <div className="relative">
                        <img
                          src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                          className="card-img-top"
                          alt="Video Thumbnail"
                        />
                        <div
                          className="absolute"
                          style={{ top: "10px", right: "10px" }}
                        >
                          <div className="relative">
                            <BsSuitHeartFill className="icons" />
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            Ultimate Financial Course
                          </h5>
                          <p className="text-center">Bigbull</p>
                          <div>
                            <h5 className="text-center  ">4.9</h5>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>

                          <h5 className="text-center">Price - ₹10000</h5>
                          <div className="d-flex justify-content-center">
                            <a href="/" className="btn btn-primary mt-1">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card course-card d-flex mr-3 border">
                      <div className="relative">
                        <img
                          src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                          className="card-img-top"
                          alt="Video Thumbnail"
                        />
                        <div
                          className="absolute"
                          style={{ top: "10px", right: "10px" }}
                        >
                          <div className="relative">
                            <BsSuitHeartFill className="icons" />
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            Ultimate Financial Course
                          </h5>
                          <p className="text-center">Bigbull</p>
                          <div>
                            <h5 className="text-center  ">4.9</h5>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>

                          <h5 className="text-center">Price - ₹10000</h5>
                          <div className="d-flex justify-content-center">
                            <a href="/" className="btn btn-primary mt-1">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card course-card d-flex mr-3 border">
                      <div className="relative">
                        <img
                          src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                          className="card-img-top"
                          alt="Video Thumbnail"
                        />
                        <div
                          className="absolute"
                          style={{ top: "10px", right: "10px" }}
                        >
                          <div className="relative">
                            <BsSuitHeartFill className="icons" />
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            Ultimate Financial Course
                          </h5>
                          <p className="text-center">Bigbull</p>
                          <div>
                            <h5 className="text-center  ">4.9</h5>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>

                          <h5 className="text-center">Price - ₹10000</h5>
                          <div className="d-flex justify-content-center">
                            <a href="/" className="btn btn-primary mt-1">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card course-card d-flex mr-3 border">
                      <div className="relative">
                        <img
                          src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                          className="card-img-top"
                          alt="Video Thumbnail"
                        />
                        <div
                          className="absolute"
                          style={{ top: "10px", right: "10px" }}
                        >
                          <div className="relative">
                            <BsSuitHeartFill className="icons" />
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            Ultimate Financial Course
                          </h5>
                          <p className="text-center">Bigbull</p>
                          <div>
                            <h5 className="text-center  ">4.9</h5>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>

                          <h5 className="text-center">Price - ₹10000</h5>
                          <div className="d-flex justify-content-center">
                            <a href="/" className="btn btn-primary mt-1">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card course-card d-flex mr-3 border">
                      <div className="relative">
                        <img
                          src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                          className="card-img-top"
                          alt="Video Thumbnail"
                        />
                        <div
                          className="absolute"
                          style={{ top: "10px", right: "10px" }}
                        >
                          <div className="relative">
                            <BsSuitHeartFill className="icons" />
                          </div>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            Ultimate Financial Course
                          </h5>
                          <p className="text-center">Bigbull</p>
                          <div>
                            <h5 className="text-center  ">4.9</h5>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-1">
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i className="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>

                          <h5 className="text-center">Price - ₹10000</h5>
                          <div className="d-flex justify-content-center">
                            <a href="/" className="btn btn-primary mt-1">
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev pe-5 me-5"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                <span>
                  <img
                    className="pbtn"
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695887551/166128_lkcmst.png"
                  />
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next ps-5 ms-5"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                <span>
                  <img
                    className="nbtn"
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695887534/167761_qpj5zn.png"
                  />
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Homepagecoursecardcontainer;
const Container = styled.div`
  .course-card {
    height: 27rem !important;
    width: 100%;
  }
  h5 {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
  }
  p {
    margin: 0;
  }

  .absolute {
    position: absolute;
  }

  .relative {
    position: relative;
  }

  .icons {
    font-size: 1.5rem;
    color: white;
  }
`;
