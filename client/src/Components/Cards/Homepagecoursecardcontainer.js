import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const Homepagecoursecardcontainer = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [images, setImages] = useState([]);

  const responseCourse = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/getAllCourses"
      );
      setAllCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const responseImage = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/thumbnail/${id}`
      );
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    responseCourse();
  }, []);

  useEffect(() => {
    if (allCourses.length > 0) {
      allCourses.forEach((course) => {
        responseImage(course._id);
      });
    }
  }, [allCourses]);

  const options = {
    items: 5,
    margin: 10,
    loop: true,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      992: { items: 5 },
    },
  };

  return (
    <Container>
      <div className="home-all-card-container-outer">
        <div className="container">
          <h2 className="text-center mb-5 mt-5" id="spo">
            Special Offers
          </h2>
        </div>
        <OwlCarousel options={options}>
          {allCourses.map((item, index) => (
            <div key={index} className="item">
              <div className="card course-card border rounded">
                <div className="relative">
                  {images && (
                    <img
                      src={`http://localhost:8080/${item.thumbnails}`}
                      className="card-img-top"
                      alt="Course Thumbnail"
                    />
                  )}
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
                      <Link to={`/course-details/${item._id}`}>
                        {" "}
                        {item.name}
                      </Link>
                    </h5>
                    <p className="text-center">{item.category}</p>
                    <div className="d-flex justify-center">
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
                    <h5 className="text-center">Price - ₹{item.price}</h5>
                    <div className="d-flex justify-content-center">
                      <a href="/" className="btn btn-primary mt-1">
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
      <ToastContainer />
    </Container>
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

  .owl-carousel {
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .item {
    background: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0px;
    margin: 10px;
    border-radius: 5px;
    width: 100%;
    text-align: center;
  }
  img {
    height: 15rem;
  }
`;
