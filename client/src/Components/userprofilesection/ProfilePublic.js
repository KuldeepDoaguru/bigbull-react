import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ProfilePublic = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Container>
        <div className="">
          <div className="header pt-5">
            <h1 className="mt-5 text-center">{user.name}</h1>
          </div>
          <div className="imgct d-flex justify-content-center align-items-center">
            <img
              src="https://res.cloudinary.com/dq5upuxm8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1696504314/samples/smile.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfilePublic;
const Container = styled.div`
  height: 100vh;
  .header {
    background-color: #000;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgct {
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      //   background-color: #000;
      height: 6rem;
      width: 6rem;
    }
  }
`;
