import React, { useEffect, useState } from "react";
import "../../Recentpurchases/RecentPurchases.css";
import Navbar from "../../Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Managecourses = () => {
  const [allCourses, setallCourses] = useState([]);
  const [keyword, setkeyword] = useState("");
  const [newdata, setnewdata] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const getCourse = async () => {
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

  // const deletecourse = async (cid) => {

  //     axios.delete(`/course/course/${cid}`).then((response) => {
  //         if (response.status === (404)) {
  //             toast.error(response.data + '💀', {
  //                 position: "top-center",
  //                 hideProgressBar: false,
  //                 closeOnClick: true,
  //                 pauseOnHover: true,
  //                 theme: 'colored'
  //             });
  //         }
  //         if (response.status === (200)) {
  //             toast.success(response.data, {
  //                 position: "top-center",
  //                 hideProgressBar: false,
  //                 closeOnClick: true,
  //                 pauseOnHover: true,
  //                 theme: 'colored'
  //             });
  //             setnewdata(true)
  //         }

  //     }).catch((e) => {
  //         if (e.response.status === 400) {
  //             toast.error(e.response.data + '💀', {
  //                 position: "top-center",
  //                 hideProgressBar: false,
  //                 closeOnClick: true,
  //                 pauseOnHover: true,
  //                 theme: 'colored'
  //             });
  //         }
  //     });
  // }

  useEffect(() => {
    getCourse();
  }, []);

  const deleteCourse = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/auth/deleteCourse/${id}`
      );
      console.log(res);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    const matchingCourses = allCourses.filter((course) => {
      return course.name.toLowerCase().includes(keyword.toLowerCase());
    });

    console.log(matchingCourses);
    setShowResults(matchingCourses);
  };

  console.log(showResults);
  console.log(searchResults);

  return (
    <>
      <Container>
        <div className="recentpurchases-outer">
          <Navbar />
          <div className="head-main">Manage Courses</div>
          <div className="searchbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              placeholder="Search any course by title or creator name"
              value={keyword}
              onChange={(e) => setkeyword(e.target.value.toLowerCase())}
              type="text"
            />
            <button
              className="btn btn-info handlesearchbtn"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div>
            {showResults && (
              <div className="searchDiv">
                <h2>Search Results:</h2>
                <ul>
                  {showResults.map((result, index) => (
                    <li key={index}>
                      <a
                        href={`http://localhost:5500/course-details/${result._id}`}
                        target="_blank"
                      >
                        {result.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="table">
            <div className="table-head">
              <p className="table-sno">Course Name</p>
              <p className="table-small">Course Category</p>
              <p className="table-email">Courses Price</p>
              <p className="table-btn">Delete</p>

              <p className="table-btn">Edit</p>
            </div>
            <div className="table-body">
              {allCourses?.map((item, index) => (
                <>
                  <div className="table-row" key={index}>
                    <p className="table-sno">
                      <a
                        href={`http://localhost:5500/course-details/${item._id}`}
                        target="_blank"
                      >
                        {item.name}
                      </a>
                    </p>
                    <p className="table-small">{item.category}</p>
                    <p className="table-email">{item.price}</p>
                    <p
                      className="table-btn"
                      onClick={() => deleteCourse(item._id)}
                    >
                      Delete
                    </p>
                    <Link
                      to={`/editcourse/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p className="table-btn">Edit</p>
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Managecourses;
const Container = styled.div`
  .table-row {
    border-radius: 5px;
  }

  .table-sno {
    width: 10rem;
    a {
      text-decoration: none;
      color: #22a6b3;
    }
  }
  .handlesearchbtn {
    border: none;
    background: transparent;
    padding: 0.5rem;
    border-radius: 5px;
    &:hover {
      background-color: #dff9fb;
    }
  }
`;
