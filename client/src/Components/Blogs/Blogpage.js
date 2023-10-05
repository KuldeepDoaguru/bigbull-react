import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import Styled, { styled } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import blogbanner from "../../image/blogbanner.webp"
const Blogpage = () => {
    return (
        <>
            <Container>
            <div className='mainbanner'>
        <img src={blogbanner} alt='about' />
        </div>
                <div className='coursepage'>
                    <div className='container my-5 mb-5'>
                        <div>
                            <h4 className='mb-4'>Bigbulls Blogs</h4>
                        </div>
                        <div class="row">
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                <div className='container'>

                                    <div className='row g-5'>

                                    <div class="col-md-6 card  shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/Grove_HR_-_Recruitment_glossary_all_the_terms_and_phrases_you_need_to_know_thumbnail_ujjibi.webp" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my first blog </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/GettyImages-504708155-59ff6ed5da2715003738e421_x71xf9.jpg" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my second blog</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card  shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988708/b1_pcueus.webp" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my first blog </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988709/b4_meihuf.webp" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my second blog</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card  shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997654/R_xvxkwd.jpg" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my first blog </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997655/writing-735x400_eae1ot.jpg" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my second blog</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card  shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997651/fotolia_19774255_l_5_gq3nza.jpg" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my first blog </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997651/OIP_4_fqyavl.jpg" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my second blog</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card  shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/Grove_HR_-_Recruitment_glossary_all_the_terms_and_phrases_you_need_to_know_thumbnail_ujjibi.webp" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my first blog </p>
                                        </div>
                                    </div>
                                    <div class="col-md-6 card shadow h-100 ">
                                        <img className="card-img-top fluid rounded-5 mb-2" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/GettyImages-504708155-59ff6ed5da2715003738e421_x71xf9.jpg" alt="Video Thumbnail" />
                                        <div className="card-title">
                                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                                            <p>my second blog</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 h-100'>
                                <div className='row  shadow rounded-5 mb-3'>
                                    <div className='col-12'>
                                        <div className="card-title p-4">
                                            <h6 className='mb-4'>Search</h6>
                                            <div>
                                                <input type='search' name='search' className='form-control rounded-5 d-flex' placeholder='search' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row shadow rounded-5  mb-3'>
                                    <div className='col-12'>
                                        <div className="card-title p-4">
                                            <h6 className='mb-4'>Recent Page</h6>
                                            <div>
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        <img className='img-fluid' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695998252/OIP_9_xxk0kk.jpg" />
                                                    </div>
                                                    <div className='col-7'>
                                                        Lorem ipsum dolor sit amet consectetur 
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        <img className='img-fluid' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997650/GettyImages-504708155-59ff6ed5da2715003738e421_x71xf9.jpg" />
                                                    </div>
                                                    <div className='col-7'>
                                                        Lorem ipsum dolor sit amet consectetur 
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        <img className='img-fluid' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997651/OIP_4_fqyavl.jpg" />
                                                    </div>
                                                    <div className='col-7'>
                                                        Lorem ipsum dolor sit amet consectetur 
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        <img className='img-fluid' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988709/b4_meihuf.webp" />
                                                    </div>
                                                    <div className='col-7'>
                                                        Lorem ipsum dolor sit amet consectetur 
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-5'>
                                                        <img className='img-fluid' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695997654/R_xvxkwd.jpg" />
                                                    </div>
                                                    <div className='col-7'>
                                                        Lorem ipsum dolor sit amet consectetur 
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row  shadow rounded-5  mb-3'>
                                    <div className='col-12'>
                                        <div className="card-title p-4">
                                            <h6 className='mb-4'>Categories</h6>
                                            <div>
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        Online Courses
                                                    </div>
                                                    <div className='col-2'>
                                                        (45)
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        Online Courses
                                                    </div>
                                                    <div className='col-2'>
                                                        (45)
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        Online Courses
                                                    </div>
                                                    <div className='col-2'>
                                                        (45)
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        Online Courses
                                                    </div>
                                                    <div className='col-2'>
                                                        (45)
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-10'>
                                                        Online Courses
                                                    </div>
                                                    <div className='col-2'>
                                                        (45)
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <ToastContainer />

        </>
    )
}

export default Blogpage

const Container = Styled.div`
background: url("https://res.cloudinary.com/dq5upuxm8/image/upload/v1696505140/background1_d81fmy.png");
.mainbanner{
    box-shadow: 1px 1px 21px #e0e0e0;
}

.card-img-top{
    height:auto;
    width:100%;
}

.card{
    background:transparent!important;
    width:100%;
}


`;