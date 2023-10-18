import React from "react";
import Styled from "styled-components";
import backgroundImg from "../../image/bgwebp.webp";
import aboutbanner from "../../image/About_bbtone.webp";
function Aboutus() {
  return (
    <>
      <Container>
        <div>
          <img src={aboutbanner} alt="about" />
        </div>
        <div className="container-fluid bgColor">
          <div className="row my-5 ms-5 me-5">
            <div className="col-sm-6">
              <h2>About Us</h2>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available{" "}
              </p>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful consider the form of
                a webpage or publication
              </p>

              <p className="row my-3">
                <span className="col-sm-1">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1696080389/975871-removebg-preview_kr1hjb.png"
                    width={"50px"}
                  />
                </span>
                <span className="col-sm-11">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                </span>
              </p>

              <p className="row my-3">
                <span className="col-sm-1">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1696080389/975871-removebg-preview_kr1hjb.png"
                    width={"50px"}
                  />
                </span>
                <span className="col-sm-11">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate
                </span>
              </p>

              <p className="row my-3">
                <span className="col-sm-1">
                  <img
                    src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1696080389/975871-removebg-preview_kr1hjb.png"
                    width={"50px"}
                  />
                </span>
                <span className="col-sm-11">
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrat
                </span>
              </p>

              <button className="btn btn-primary btn-lg my-5">
                Contact us
              </button>
            </div>
            <div className="col-sm-6 ">
              <img
                className="img-fluid"
                src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697631822/bullt_p8ivfj.png"
              />
            </div>
          </div>
          {/* editing  */}
          <div className="container mb-5 ">
            <div className="text-center mb-5">
              <h3>Meet Our Expert</h3>
            </div>
            <div>
              <div>
                <div>
                  <div className="card-group">
                    <div className="card cardteam d-flex mr-3  h-100">
                      <img
                        src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697632905/tty_kok97u.png"
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">Mr. Narendra Singh</h5>
                        <p>Advisor</p>
                      </div>
                    </div>
                    <div className="card cardteam d-flex mr-3  h-100">
                      <img
                        src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697632905/tty_kok97u.png"
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body text-center">
                        <h5 className="card-title">Mr. Narendra Singh</h5>
                        <p>Advisor</p>
                      </div>
                    </div>
                    <div className="card cardteam d-flex mr-3  h-100">
                      <img
                        src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697632905/tty_kok97u.png"
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body text-center">
                        <h5 className="card-title">Mr. Narendra Singh</h5>
                        <p>Advisor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid py-3 my-5 ">
            <div className="container-fluid ">
              <div className="row ms-5 me-5 ">
                <div className="col-sm-6">
                  <img
                    className="img-fluid"
                    src="https://res.cloudinary.com/dq5upuxm8/image/upload/v1697632311/avvvv_gybcz1.png"
                  />
                </div>
                <div className="col-sm-6 my-5">
                  <h2 className="mb-4">Why Choose Us</h2>
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available{" "}
                  </p>
                  <p className="row my-4">
                    <span className="col-sm-1">
                      <img
                        src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1696080389/975871-removebg-preview_kr1hjb.png"
                        width={"50px"}
                      />
                    </span>
                    <span className="col-sm-11">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to
                    </span>
                  </p>

                  <p className="row my-4">
                    <span className="col-sm-1">
                      <img
                        src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1696080389/975871-removebg-preview_kr1hjb.png"
                        width={"50px"}
                      />
                    </span>
                    <span className="col-sm-11">
                      demonstrate the visual form of a document or a typeface
                      without relying on meaningful
                    </span>
                  </p>

                  <p className="row my-4">
                    <span className="col-sm-1">
                      <img
                        src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1696080389/975871-removebg-preview_kr1hjb.png"
                        width={"50px"}
                      />
                    </span>
                    <span className="col-sm-11">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mb-5">
            <div className="text-center mb-5">
              <h3>Student reviews of our institution</h3>
            </div>
            <div
              id="carouselExampleControls"
              class="carousel slide text-center carousel-dark"
              data-bs-ride="carousel"
            >
              <div>
                <div>
                  <div className="row ms-5 me-5">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="card border shadow h-100 mr-5 mx-5">
                        <div className="d-flex justify-content-center">
                          <img
                            class="rounded-circle shadow-1-strong m-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            alt="avatar"
                            style={{ width: "150px" }}
                          />
                        </div>
                        <div class="row d-flex justify-content-center">
                          <div className="">
                            <h5>Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p class="text-justify">
                              your project involves creating complex,
                              interactive, and data-driven web applications,
                              ReactJS is an excellent choice. It excels in
                              handling real-time updates, dynamic content, and
                              single-page applications (SPAs).
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center text-warning mb-1">
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="card border shadow h-100 mr-5">
                        <div className="d-flex justify-content-center">
                          <img
                            class="rounded-circle shadow-1-strong m-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            alt="avatar"
                            style={{ width: "150px" }}
                          />
                        </div>
                        <div class="row d-flex justify-content-center">
                          <div>
                            <h5 class="">Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p class="text-justify">
                              your project involves creating complex,
                              interactive, and data-driven web applications,
                              ReactJS is an excellent choice. It excels in
                              handling real-time updates, dynamic content, and
                              single-page applications (SPAs).
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center text-warning  my-0 mb-1">
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="card border shadow h-100 mr-5">
                        <div className="d-flex justify-content-center">
                          <img
                            class="rounded-circle shadow-1-strong m-3"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                            alt="avatar"
                            style={{ width: "150px" }}
                          />
                        </div>
                        <div class="row d-flex justify-content-center">
                          <div>
                            <h5 class="">Anna Deynah</h5>
                            <p>UX Designer</p>
                            <p class="text-justify">
                              your project involves creating complex,
                              interactive, and data-driven web applications,
                              ReactJS is an excellent choice. It excels in
                              handling real-time updates, dynamic content, and
                              single-page applications (SPAs).
                            </p>
                            <ul class="list-unstyled d-flex justify-content-center text-warning  my-0 mb-1">
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="fas fa-star fa-sm"></i>
                              </li>
                              <li>
                                <i class="far fa-star fa-sm"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
}

export default Aboutus;
const Container = Styled.div`
background: url("https://res.cloudinary.com/dq5upuxm8/image/upload/v1696838093/backgroupbb_t9p15q.png");
// margin-top:6rem;
.bgColor {
    // background-color: #eee;
    padding:40px;
}
.card-img-top{
  height:250px;
  justify-content:center;
  align-items:center;
}
.bgColorCount{
    background: rgba(237, 205, 205, 0.67);
}


.tag{
    text-align: center;
    font-size: 1.1rem
}
.fa-heart{
    color: rgba(255, 230, 0, 0.959);
    font-size: 30px
}

.cardteam{
  background-color:transparent;
  border-radius: 1rem;
}



`;
