import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styled from 'styled-components'

function Homeblogs() {
    return (
        <>
            <Container>
            <div className="container">
            <h2 className="text-center mb-5" id="lb">Latest Blog</h2>
          </div>
                <div className='container mb-5'>
                    <div className="card-group">
                        <div className="card d-flex mr-3 shadow-0 h-100  ">
                            <img className="card-img-top fluid rounded-5" id='cbimg' src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988708/b1_pcueus.webp"  alt="Video Thumbnail" />
                            <div className="card-body">
                               <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                               <p>my first blog </p>
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow-0 h-100  " >
                            <img  className=" card-img-top fluid rounded-5" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988709/b4_meihuf.webp"  alt="Video Thumbnail" />
                            <div className="card-body">
                            <p>September 29, 2023 Time: 12:00 PM (noon)</p> 
                            <p>my second blog</p>
                               
                            </div>
                        </div>
                        <div className="card d-flex mr-3 shadow-0 h-100 " >
                        <img className="card-img-top fluid rounded-5" src="https://res.cloudinary.com/dwivqhrnx/image/upload/v1695988708/b2_z5n3y5.webp"  alt="Video Thumbnail" />
                            <div className="card-body">
                            <p>September 29, 2023 Time: 12:00 PM (noon)</p>
                            <p>my third blog</p>     
                            </div>
                        </div>
                    
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Homeblogs;
const Container = Styled.div`
#lb{
    font-size:50px;
    font-weight:700;
    color:orange;
}

`
    ;