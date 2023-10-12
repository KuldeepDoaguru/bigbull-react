import React, { useState } from "react";
import styled from "styled-components";

const PhotoProfile = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <>
      <Container>
        <div className="d">
          <h2 className="text-center">Update Profile Picture</h2>
          <hr />
        </div>

        <div>
          <div className="imgpreview">
            {/* <h2>Preview Image</h2> */}
            {imageSrc && (
              <img src={imageSrc} alt="Uploaded" style={{ maxWidth: "100%" }} />
            )}
          </div>
          <div className="mt-3 fileIn">
            {/* <input type="file" accept="image/*" onChange={handleImageUpload} /> */}
            <div class="">
              {/* <label for="photo_upload">Upload File</label> */}
              <input
                type="file"
                class="form-control-file"
                id="file_upload"
                accept="image/*"
                name="file_upload"
                onChange={handleImageUpload}
              />
            </div>
            <button className="btn btn-info mt-5">Save</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PhotoProfile;
const Container = styled.div`
  .imgpreview {
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    img {
      height: 100%;
    }
  }
  .fileIn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
