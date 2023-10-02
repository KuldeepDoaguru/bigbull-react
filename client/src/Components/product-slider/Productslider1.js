import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Styled from 'styled-components'
function Productslider1() {
    return (
        <>    
        <Container>
        <div className="container">
            <h2 className="text-center mb-5" id="exc">Explore More Courses</h2>
        </div> 
<div className='container-fluid'>
          <ul class="nav nav-pills mb-3 ms-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-python-tab" data-bs-toggle="pill" data-bs-target="#pills-python" type="button" role="tab" aria-controls="pills-python" aria-selected="true">PYTHON</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-java-tab" data-bs-toggle="pill" data-bs-target="#pills-java" type="button" role="tab" aria-controls="pills-java" aria-selected="false">JAVA</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-cc-tab" data-bs-toggle="pill" data-bs-target="#pills-cc" type="button" role="tab" aria-controls="pills-cc" aria-selected="false">C++</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-c-tab" data-bs-toggle="pill" data-bs-target="#pills-c" type="button" role="tab" aria-controls="pills-c" aria-selected="false">C</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-react-tab" data-bs-toggle="pill" data-bs-target="#pills-react" type="button" role="tab" aria-controls="pills-react" aria-selected="false">REACT</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-javascript-tab" data-bs-toggle="pill" data-bs-target="#pills-javascript" type="button" role="tab" aria-controls="pills-javascript" aria-selected="false">JAVASCRIPT</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-jquery-tab" data-bs-toggle="pill" data-bs-target="#pills-jquery" type="button" role="tab" aria-controls="pills-jquery" aria-selected="false">JQUERY</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-css-tab" data-bs-toggle="pill" data-bs-target="#pills-css" type="button" role="tab" aria-controls="pills-css" aria-selected="false">CSS</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-html-tab" data-bs-toggle="pill" data-bs-target="#pills-html" type="button" role="tab" aria-controls="pills-html" aria-selected="false">HTML</button>
            </li>
          </ul>
            <div className="tab-content border ms-3 me-3 my-3 mb-5"  id="pills-tabContent">
                <div className="container-fluid pe-5 ps-5 my-3 mb-3 py-4 pb-4 tab-pane fade show active" id="pills-python" role="tabpanel" aria-labelledby="pills-python-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-java" role="tabpanel" aria-labelledby="pills-java-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
       
      
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-cc" role="tabpanel" aria-labelledby="pills-cc-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
           
         
      
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-c" role="tabpanel" aria-labelledby="pills-c-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
          
        
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-javascript" role="tabpanel" aria-labelledby="pills-javascript-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
        
         
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-jquery" role="tabpanel" aria-labelledby="pills-jquery-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
           
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-react" role="tabpanel" aria-labelledby="pills-react-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
       
           
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-css" role="tabpanel" aria-labelledby="pills-css-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
           
                <div className="container-fluid pe-5 ps-5 mb-3 py-4 pb-4 tab-pane fade" id="pills-html" role="tabpanel" aria-labelledby="pills-html-tab">
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow ">
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary" id='bgs' >Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow " >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow" >
                            <img src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695824574/headerimage-98_uscnih.jpg" className="card-img-top" alt="Video Thumbnail" />
                            <video className="card-img-overlay">
                                <source src="your-video.mp4" type="video/mp4" />
                            </video>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                 </div> 
            </div> 
            </div>
            </Container>
               </>
    )
}
export default Productslider1;

const Container = Styled.div`
  #exc{
    color:orange;
    font-size:50px;
    font-weight:700;
  }
  
`;



