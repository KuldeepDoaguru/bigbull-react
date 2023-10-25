import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Navbar";
import ManageNav from "./ManageNav";
import "./EditCourse.css";

const EditCourse = () => {
  const { cid } = useParams();
  let navigate = useNavigate();

  const [course_name, setcoursename] = useState("");
  const [course_image, setcourseimg] = useState();
  const [course_description, setcoursedescription] = useState("");
  const [course_price, setcourseprice] = useState("");
  const [courseCategory, setCourseCategory] = useState("");

  const getCourseViaID = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/v1/auth/coursePage/${cid}`
      );
      console.log(response.data);
      setcoursename(response.data.name);
      setcourseimg(response.data.thumbnails);
      setcoursedescription(response.data.description);
      setcourseprice(response.data.price);
      setCourseCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseViaID();
  }, []);

  const courseformdata = new FormData();
  courseformdata.append("name", course_name);
  courseformdata.append("description", course_description);
  courseformdata.append("price", course_price);
  courseformdata.append("category", courseCategory);
  courseformdata.append("thumbnails", course_image);

  const responseImage = async () => {
    console.log(cid);
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/auth/thumbnail/${cid}`
      );
      console.log(res.data);
      setcourseimg(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    responseImage();
  }, []);

  //   update course details
  const updateCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8080/api/v1/auth/editCourse/${cid}`,
        courseformdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      toast.success(res.data.message);
      //   navigate("/managecourses");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCourse = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/auth/deleteCourse/${cid}`
      );
      console.log(res);
      navigate("/managecourses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="editcourse-outer">
        <Navbar />
        <ManageNav
          editcourse={true}
          addvideo={false}
          showvideos={false}
          courseid={cid}
        />
        <div className="head-main"> Update Course Data </div>
        <div className="new-form">
          <form onSubmit={updateCourse} encType="multipart/form-data">
            <div className="form-inner">
              <div className="s1">
                <img
                  src={`http://localhost:8080/${course_image}`}
                  width="200px"
                />
                <div>
                  <label>Update Course Thumbnail</label>
                  <input
                    type="file"
                    filename={course_image}
                    onChange={(e) => {
                      setcourseimg(e.target.files[0]);
                    }}
                    placeholder="Upload Course Thumbnail"
                    accept="image/jpeg, image/png, image/jpg"
                  />
                </div>
              </div>

              <div className="s2">
                <div>
                  <label>Course Name</label>
                  <input
                    onChange={(e) => {
                      setcoursename(e.target.value);
                    }}
                    name="course_name"
                    value={course_name}
                    placeholder="Enter Course Title"
                  />
                </div>

                <div>
                  <label>Course Price</label>
                  <input
                    onChange={(e) => {
                      setcourseprice(e.target.value);
                    }}
                    value={course_price}
                    placeholder="Enter Course Price in Rupees"
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="hrline"></div>

            <div className="s3">
              <label>Change Course Description</label>
              <textarea
                onChange={(e) => {
                  setcoursedescription(e.target.value);
                }}
                value={course_description}
                name="course_description"
                rows={3}
                placeholder="Course Description"
              ></textarea>
            </div>

            <div className="s4">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button className="btn btn-danger" onClick={deleteCourse}>
                Delete this Course
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default EditCourse;
