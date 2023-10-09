import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Navbar from './Navigationbar'
import Carousel from "react-bootstrap/Carousel";
import "./Home.css";

import carouselimg1 from "../../image/RegisterNow.webp";
import carouselimg2 from "../../image/b2tone.webp";
import carouselimg3 from "../../image/bb3tone.webp";

import imgtexthome1 from "../photos/img-text-home/1.png";
import imgtexthome2 from "../photos/img-text-home/2.png";
import imgtexthome3 from "../photos/img-text-home/3.png";

import Homepagecoursecardcontainer from "../Cards/Homepagecoursecardcontainer";
import Productslider1 from "../product-slider/Productslider1";
import Productslider from "../product-slider/Productslider";
import Homeblogs from "./Homeblogs";
import styled from "styled-components";

const Home = () => {
  const [carousel, setcarousel] = useState([]);

  useEffect(() => {
    axios
      .get(`/carouseldata/carouseldata/`)
      .then((response) => {
        setcarousel(response.data);
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
        <div>
          {/* Carousel */}
          <div className="carousel-container">
            <Carousel>
              {carousel.map((e) => {
                return (
                  <Carousel.Item interval={1000}>
                    <a href={e.youtube_link}>
                      {" "}
                      <img
                        className="d-block w-100"
                        src={e.carouselcard_img}
                        alt={"/" + e.carouselcard_name}
                      />
                    </a>
                  </Carousel.Item>
                );
              })}
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={carouselimg3}
                  alt="First slide"
                  style={{ height: "35rem" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={carouselimg2}
                  alt="Second slide"
                  style={{ height: "35rem" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={carouselimg1}
                  alt="third slide"
                  style={{ height: "35rem" }}
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* <div className="big-heading">
        <span>We are Bigbulls</span>
      </div> */}
          <Homepagecoursecardcontainer />
          <div className="home-paragraph mb-5">
            <h1>Who Are We ?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
              feugiat sed lectus vestibulum mattis ullamcorper velit sed. Tortor
              posuere ac ut consequat. Odio pellentesque diam volutpat commodo
              sed egestas egestas. Eget nunc lobortis mattis aliquam faucibus.
              Egestas pretium aenean pharetra magna ac placerat vestibulum
              lectus. Ipsum dolor sit amet consectetur. Ultricies lacus sed
              turpis tincidunt id aliquet. Aliquam eleifend mi in nulla posuere.
              Massa massa ultricies mi quis hendrerit. Tempus egestas sed sed
              risus pretium quam. Varius duis at consectetur lorem donec massa
              sapien faucibus.
            </p>
          </div>

          <Productslider1 />
          {/* img -text */}
          <div className="hrline"></div>
          <h1 className="head-small">Our Goal</h1>
          <div className="img-text-home imgleft center">
            <img src={imgtexthome1} alt="imgtexthome1" />
            <div>
              <h1>This is some text</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                feugiat sed lectus vestibulum mattis ullamcorper velit sed.
                Tortor posuere ac ut consequat. Odio pellentesque diam volutpat
                commodo sed egestas egestas. Eget nunc lobortis mattis aliquam
                faucibus.
              </p>
            </div>
          </div>

          <div className="img-text-home imgright center">
            <img src={imgtexthome2} alt="imgtexthome2" />
            <div>
              <h1>This is some text</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                feugiat sed lectus vestibulum mattis ullamcorper velit sed.
                Tortor posuere ac ut consequat. Odio pellentesque diam volutpat
                commodo sed egestas egestas. Eget nunc lobortis mattis aliquam
                faucibus.
              </p>
            </div>
          </div>

          <div className="img-text-home imgleft center">
            <img src={imgtexthome3} alt="imgtexthome3" />
            <div>
              <h1>This is some text</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
                feugiat sed lectus vestibulum mattis ullamcorper velit sed.
                Tortor posuere ac ut consequat. Odio pellentesque diam volutpat
                commodo sed egestas egestas. Eget nunc lobortis mattis aliquam
                faucibus.
              </p>
            </div>
          </div>

          {/* <Productslider /> */}
          <Homeblogs />
        </div>
      </Container>
    </>
  );
};

export default Home;
const Container = styled.div`
  // background: url("https://res.cloudinary.com/dq5upuxm8/image/upload/v1696505140/background1_d81fmy.png");

  .carousel-control-prev,
  .carousel-control-next {
    top: auto;
    bottom: 0;
    transform: translateY(50%);
  }

  /* Adjust the size of the Carousel control buttons */
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 30px;
    height: 30px;
  }

  /* Customize the appearance of the Carousel control buttons */
  .carousel-control-prev-icon:before,
  .carousel-control-next-icon:before {
    content: "";
    border: 2px solid #fff; /* You can change the border color */
    border-radius: 50%; /* Make the buttons circular */
  }
`;
