import React, { useEffect, useState } from "react";
import "./Courses.css";
import Card3 from "../Cards/Card3.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card1 from "../Cards/Card1";
import styled from "styled-components";
import coursebanner from "../../image/coursebannertone.webp";
import { BsSuitHeartFill, BsCart3, BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
const Courses = () => {
  const [allCourses, setallCourses] = useState([]);
  const [keyword, setkeyword] = useState("");
  const [images, setImages] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const responseCourse = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/auth/getAllCourses"
      );
      console.log(res.data);
      setallCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const responseImage = async (id) => {
    console.log(id);
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/thumbnail/${id}`
      );
      console.log(res.data);
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    responseCourse();
  }, []); // Fetch course information only once when the component mounts

  useEffect(() => {
    if (allCourses.length > 0) {
      allCourses.forEach((course) => {
        responseImage(course._id);
      });
    }
  }, [allCourses]);

  const handleSearch = () => {
    // Get all text content on the page
    const pageContent = document.body.innerText.toLowerCase();
    // Split the content into paragraphs or sections (you can customize this based on your page structure)
    const sections = pageContent.split("\n");
    // Filter the sections to find those containing the keyword
    const matchingSections = sections.filter((section) =>
      section.includes(keyword)
    );
    // Set the search results
    setSearchResults(matchingSections);
    setShowResults(true);
  };

  return (
    <>
      <Container>
        <div className="mainbanner">
          <img src={coursebanner} alt="about" />
        </div>
        <div className="coursepage">
          <h1 className="title">Our Courses</h1>
          <div className="course-searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input
              placeholder="Search any course by title or creator name"
              value={keyword}
              onChange={(e) => setkeyword(e.target.value.toLowerCase())}
              type="text"
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          <div>
            {showResults && (
              <div className="searchDiv">
                <h2>Search Results:</h2>
                <ul>
                  {searchResults.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="container ms-3 me-3 my-5 mb-5">
            <div>
              <h3 className="my-3">We have 230 videos total</h3>
            </div>
            <div className="container">
              <div className="row g-3">
                {allCourses?.map((item, index) => (
                  <>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
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
                            {/* <p className="text-center">{item.description}</p> */}
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

                            <h5 className="text-center">
                              Price - ₹{item.price}
                            </h5>
                            <div className="d-flex justify-content-center">
                              <a href="/" className="btn btn-primary mt-1">
                                Add to Cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ToastContainer />
    </>
  );
};

export default Courses;
const Container = styled.div`
  background: url("https://res.cloudinary.com/dq5upuxm8/image/upload/v1696505140/background1_d81fmy.png");
  .mainbanner {
    box-shadow: 1px 1px 21px #e0e0e0;
  }

  .course-card {
    height: 25rem !important;
    width: 100%;
    border-radius: 1rem;
    img {
      height: 13rem;
    }
  }
  h5 {
    font-size: 1rem;
    font-weight: bold;
    margin: 5px;
  }
  p {
    margin: 5px;
  }
`;
