import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import WhatLearn from "../CourseDetailsTabs/WhatLearn";
import CourseModule from "../CourseDetailsTabs/CourseModule";
import TestimonialCourse from "../CourseDetailsTabs/TestimonialCourse";

const CourseDetails = () => {
  let { courseid } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [videoPlay, setVideoPlay] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
    setVideoPlay(true);
  };

  console.log(courseid);

  const CourseDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/coursePage/${courseid}`
      );
      console.log(res.data);
      localStorage.setItem("courseData", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CourseDetails();
  }, []);

  const storedCourseData = JSON.parse(localStorage.getItem("courseData"));
  console.log(storedCourseData);
  // setCourseData(storedCourseData);
  // console.log(storedCourseData.name);

  return (
    <>
      <Container>
        <div className="maindiv">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="container">
                  <video
                    ref={videoRef}
                    src="https://res.cloudinary.com/dq5upuxm8/video/upload/v1697973901/Stranger_Things_4___Volume_2_Trailer___Netflix_u6dbve.mp4"
                    controls={videoPlay}
                  ></video>
                  {!videoPlay && (
                    <button
                      className="btn btn-success mt-2"
                      onClick={playVideo}
                    >
                      Watch Demo
                    </button>
                  )}
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="container">
                  <h1>{storedCourseData.name}</h1>
                  <p className="mt-3 mb-0">{storedCourseData.description}</p>
                  <p>
                    <strong>Category :</strong> {storedCourseData.category}
                  </p>
                  <p className="fw-bold">Rs. ₹{storedCourseData.price}</p>
                  <button className="btn btn-info">Enroll Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="container mt-3 mb-3 p-5 tabcont">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="tab1-tab"
                      data-toggle="tab"
                      href="#tab1"
                      role="tab"
                      aria-controls="tab1"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="tab2-tab"
                      data-toggle="tab"
                      href="#tab2"
                      role="tab"
                      aria-controls="tab2"
                      aria-selected="false"
                    >
                      Course Module
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="tab3-tab"
                      data-toggle="tab"
                      href="#tab3"
                      role="tab"
                      aria-controls="tab3"
                      aria-selected="false"
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab1-tab"
                  >
                    <WhatLearn />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab2-tab"
                  >
                    <CourseModule />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="tab3-tab"
                  >
                    <TestimonialCourse />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="container mt-5">
                <div class="card h-100 w-100">
                  <img
                    class="card-img-top"
                    src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697630200/bull_co43rp.png"
                    alt="Card cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      Subscribe to Bigbull’s top courses
                    </h5>
                    <p class="card-text">
                      Get this course, plus 500+ of our courses. For our
                      Guidance <Link to="/contact">Contact us</Link>
                    </p>
                    <button className="btn btn-info w-100">
                      Subscribe Now
                    </button>
                    <div className="mt-2">
                      <button className="btn btn-outline-success">
                        Share this Course
                      </button>
                      <button className="btn btn-outline-success ml-2">
                        Gift this course
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CourseDetails;
const Container = styled.div`
  .maindiv {
    padding-top: 3rem;
    padding-bottom: 2rem;
    background: linear-gradient(to right, #ffefba, #ffffff);
  }
`;
