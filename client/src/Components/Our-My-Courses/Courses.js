import React, { useEffect, useState } from 'react'
import './Courses.css'
import Card3 from '../Cards/Card3.js'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card1 from '../Cards/Card1';
const Courses = () => {
    const [allCourses, setallCourses] = useState([]);

    const [keyword, setkeyword] = useState('');

    useEffect(() => {
        axios.get(`/course/course/`).then((response) => {
            setallCourses(response.data);
        }).catch((e) => {
            toast.error(e, {
                position: "top-center",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                theme: 'colored'
            });
        })
    }, [])



    return (
        <>
            <div className='coursepage'>
                <h1 className='title'>Our Courses</h1>
                <div className='course-searchbar'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input placeholder='Search any course by title or creator name' value={keyword} onChange={(e) => setkeyword(e.target.value.toLowerCase())} type='text' />
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
                <div className='container border ms-3 me-3 my-5 mb-5'>
                    <div>
                        <h3 className='my-3'>We have 230 videos total</h3>
                    </div>
                    <div className='container mb-5'>
                        <div className="card-group">
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 ">
                                <img className="card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997655/people-education-and-learning-concept-woman-or-student-girl-with-laptop-computer-writing-to-notebook-at-home-at-night_rjm6h3dul_thumbnail-1080_01_h6rafo.png" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my first video </p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className=" card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997654/R_xvxkwd.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my second video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 " >
                                <img className="card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997653/OIP_8_v60bnr.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my third video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5 card-image " src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997655/writing-735x400_eae1ot.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5 card-image " src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997652/OIP_7_yldqfc.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container mb-5'>
                        <div className="card-group">
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 ">
                                <img className="card-img-top fluid rounded-5 card-image" id='cbimg' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988708/b1_pcueus.webp" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my first video </p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className=" card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988709/b4_meihuf.webp" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my second video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 " >
                                <img className="card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695998252/OIP_11_ncdytq.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my third video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5 card-image " src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695998252/OIP_10_uobyqx.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695998252/OIP_9_xxk0kk.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container  mb-5'>
                        <div className="card-group">
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 ">
                                <img className="card-img-top fluid rounded-5 card-image" id='cbimg' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997651/fotolia_19774255_l_5_gq3nza.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my first video </p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/invest-in-mutual-funds-770x462_d5duld.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className=" card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997651/OIP_4_fqyavl.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my second video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 " >
                                <img className="card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/Grove_HR_-_Recruitment_glossary_all_the_terms_and_phrases_you_need_to_know_thumbnail_ujjibi.webp" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my third video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5 card-image " src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997651/OIP_5_ualdd1.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container   mb-5'>
                        <div className="card-group">
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 ">
                                <img className="card-img-top fluid rounded-5 card-image" id='cbimg' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997653/OIP_8_v60bnr.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my first video </p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5 card-image " src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/GettyImages-504708155-59ff6ed5da2715003738e421_x71xf9.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className=" card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988709/b4_meihuf.webp" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my second video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5 " >
                                <img className="card-img-top fluid rounded-5 card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997655/writing-735x400_eae1ot.jpg" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p>my third video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card d-flex mr-3 shadow-0 h-100 border rounded-5" >
                                <img className="card-img-top fluid rounded-5  card-image" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988708/b2_z5n3y5.webp" alt="Video Thumbnail" />
                                <div className="card-body">
                                    <p className=''>my fourth video</p>
                                    <div className='d-flex justify-content-between'>
                                        <span><img className="start flex-start" src='https://res.cloudinary.com/dwivqhrnx/image/upload/v1695995682/5s_carbct.jpg' /></span>
                                        <span className='rate me-3'>Rs.1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />

        </>
    )
}

export default Courses
