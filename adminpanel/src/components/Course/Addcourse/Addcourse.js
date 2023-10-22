import React, { useState } from "react";
import axios from "axios";
import "./Addcourse.css";
import Navbar from "../../Navbar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addcourse = () => {
  const [course_name, setcoursename] = useState("");
  const [course_image, setcourseimg] = useState("");
  const [course_description, setcoursedescription] = useState("");
  const [category, setCategory] = useState("");
  const [course_price, setcourseprice] = useState("");

  const formdata = new FormData();
  formdata.append("name", course_name);
  formdata.append("thumbnails", course_image);
  formdata.append("description", course_description);
  formdata.append("price", course_price);
  formdata.append("category", category);

  const PostData = async (e) => {
    e.preventDefault();
    console.log(typeof course_image);
    axios
      .post("http://localhost:8080/api/v1/auth/add-course", formdata)
      .then((response) => {
        if (response.status === 400) {
          toast.error(e.response.data + "💀", {
            position: "top-center",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
          });
        }
        if (response.status === 200) {
          toast.success("successfull!", {
            position: "top-center",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
          });
        }
      })
      .catch((e) => {
        if (e.response.status === 400) {
          toast.error(e.response.data + "💀", {
            position: "top-center",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "colored",
          });
        }
      });
  };

  return (
    <>
      <div className="Addcourse-outer">
        <Navbar />
        <div className="head-main"> Add New Course </div>
        <div className="new-form">
          <form onSubmit={PostData} encType="multipart/form-data">
            <input
              onChange={(e) => {
                setcoursename(e.target.value);
              }}
              name="name"
              value={course_name}
              placeholder="Enter Course Title"
            />

            <input
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              name="category"
              value={category}
              placeholder="Enter Course Category Name"
            />
            <input
              onChange={(e) => {
                setcourseprice(e.target.value);
              }}
              placeholder="Enter Course Price in Rupees"
              type="number"
              name="price"
              value={course_price}
            />
            {/* <input onChange={(e) => { setcourseoffer(e.target.value) }} placeholder='Enter Offer Price in Rupees' type='number' /> */}

            <input
              type="file"
              filename="thumbnails"
              onChange={(e) => {
                setcourseimg(e.target.files[0]);
              }}
              placeholder="Upload Course Thumbnail"
              accept="image/jpeg,image/jpg,image/png"
            />

            <textarea
              onChange={(e) => {
                setcoursedescription(e.target.value);
              }}
              rows={3}
              placeholder="Course Description"
              name="description"
              value={course_description}
            ></textarea>
            <button onClick={PostData}>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Addcourse;
