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
const Courses = () => {
  const [allCourses, setallCourses] = useState([]);

  const [keyword, setkeyword] = useState("");

  useEffect(() => {
    axios
      .get(`/course/course/`)
      .then((response) => {
        setallCourses(response.data);
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
          </div>
          {/* {allCourses === [] ?
                    <p>No Courses</p>
                    : <div className='courses_array'>
                        {
                            allCourses.filter((val) => {
                                if (keyword === '') {
                                    return val
                                }
                                else if (val.course_name.toLowerCase().includes(keyword) || val.course_author.toLowerCase().includes(keyword)) {
                                    return val
                                }
                            }).map((course) =>
                                <Card1 key={course._id} coursename={course.course_name} creator={course.course_author} courseimg={course.course_image} coursedescription={course.course_description} courseprice={course.course_price} courseoffer={course.offer_price} courseid={course._id} />
                            )
                        }
                    </div>} */}

          {/* edit my me */}
          <div className="container ms-3 me-3 my-5 mb-5">
            <div>
              <h3 className="my-3">We have 230 videos total</h3>
            </div>
            <div className="container mb-5">
              <div className="card-group">
                <div className="card course-card d-flex mr-3 border">
                  <img
                    src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                    class="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video class="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Ultimate Financial Course</h5>
                    <p>Bigbull</p>
                    <h5>4.9 *****</h5>
                    <h5>Price - ₹10000</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="card course-card d-flex mr-3 border">
                  <img
                    src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                    class="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video class="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Ultimate Financial Course</h5>
                    <p>Bigbull</p>
                    <h5>4.9 *****</h5>
                    <h5>Price - ₹10000</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="card course-card d-flex mr-3 border">
                  <img
                    src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                    class="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video class="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Ultimate Financial Course</h5>
                    <p>Bigbull</p>
                    <h5>4.9 *****</h5>
                    <h5>Price - ₹10000</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="card course-card d-flex mr-3 border">
                  <img
                    src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697625839/bigbull_cards_cpbg4n.png"
                    class="card-img-top"
                    alt="Video Thumbnail"
                  />
                  <video class="card-img-overlay">
                    <source src="your-video.mp4" type="video/mp4" />
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">Ultimate Financial Course</h5>
                    <p>Bigbull</p>
                    <h5>4.9 *****</h5>
                    <h5>Price - ₹10000</h5>
                    <a href="/" className="btn btn-primary" id="bgs">
                      Buy Now
                    </a>
                  </div>
                </div>
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
    height: 27rem !important;
    width: 100%;
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
