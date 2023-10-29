import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSuitHeartFill, BsSuitHeart, BsCart3, BsBell } from "react-icons/bs";
import axios from "axios";

const CartPage = () => {
  const [allCourses, setallCourses] = useState([]);
  const [images, setImages] = useState([]);
  const user = useSelector((state) => state.user);
  const [cartItem, setCartItem] = useState({});
  console.log(`User Name: ${user.name}, User ID: ${user.id}`);
  console.log("User State:", user);

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

  const displayCartItem = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/getCartItems/${user.id}`
      );
      console.log(response.data.CartItem);
      setCartItem(response.data.CartItem);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(cartItem.items);

  useEffect(() => {
    displayCartItem();
  }, []);

  useEffect(() => {
    if (allCourses.length > 0) {
      allCourses.forEach((course) => {
        responseImage(course._id);
      });
    }
  }, [allCourses]);

  useEffect(() => {
    responseCourse();
  }, []);

  const coursesInCart = allCourses.filter((course) =>
    cartItem.items.includes(course._id)
  );

  console.log(coursesInCart);

  

  const totalPrice = () => {
    try {
      let total = 0;
      coursesInCart.forEach((item) => {
        total = total + parseFloat(item.price);
      });
      return total;
    } catch (error) {
      console.log(error);
      return 0;
    }
  };

  return (
    <>
      <Container>
        <div className="coursepage">
          <h1 className="title mt-5">My Course Cart</h1>
          <div className="container ms-3 me-3 my-5 mb-5">
            <div className="container">
              <div className="row g-3">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                  {coursesInCart?.map((item, index) => (
                    <div className="row d-flex flex-row">
                      <div
                        className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"
                        key={index}
                      >
                        <div className="card course-card rounded">
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
                                <BsSuitHeartFill className="icons-added" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="card-body">
                          <h5 className="card-title text-start">
                            <Link to={`/course-details/${item._id}`}>
                              {item.name}
                            </Link>
                          </h5>
                          <p className="text-start">{item.category}</p>
                          <div className="d-flex justify-start">
                            <h5 className="text-start  ">4.9</h5>
                            <ul className="list-unstyled d-flex justify-content-start text-warning mb-1">
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
                          <h5 className="text-start">Price - ₹{item.price}</h5>
                          <div className="d-flex justify-content-start">
                            <a
                              href="/course-cart"
                              className="btn btn-danger mt-1"
                            >
                              Remove from Cart
                            </a>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-2" />
                    </div>
                  ))}
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                  <h4>Cart Summary</h4>
                  <p>Total | Checkout | Payment</p>
                  <hr />
                  <h4>Total :{totalPrice()}</h4>

                  <button
                    className="btn btn-success"
                    // onClick={makePaymentStripeAndDownload}
                  >
                    make payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
const Container = styled.div`
  .course-card {
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

  .icons {
    color: white;
  }

  .icons-added {
    color: red;
  }
`;
