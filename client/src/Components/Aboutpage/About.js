import React from "react";
import img1 from "../photos/aboutpg/1.png";
import img2 from "../photos/aboutpg/2.png";
import tm1 from "../photos/aboutpg/teammember1.jpg";
import tm2 from "../photos/aboutpg/teammember2.png";
import tm3 from "../photos/aboutpg/teammember3.png";

import "./About.css";
const About = () => {
  return (
    <div className="about-outer">
      <img
        src="https://res.cloudinary.com/antrix/image/upload/v1680765348/home_cvhowb.jpg"
        width={"100%"}
      />
      <div className="abtus-head">
        <h1>About us</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa numquam in adipisci, eaque odio fugiat nisi iure placeat cum
            magni eveniet rem expedita ex nam distinctio veniam provident ipsam
            corrupti! Blanditiis, pariatur. Adipisci aperiam, officia illo
            expedita vitae, corrupti eius culpa molestiae tempora repellendus
            voluptate veritatis mollitia deleniti corporis?Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Porro eligendi, quod dolorem
            ad sunt, sit velit pariatur iste minus qui enim maiores! Voluptatem
            ut porro doloribus enim quo, accusamus vel? Voluptatum, obcaecati?
            Alias placeat laboriosam sed aperiam dolorem, minus quo fugit enim
            odio similique amet! Voluptatibus sequi qui iure autem ut quis
            explicabo laudantium at perspiciatis impedit, sunt, quasi illo
            recusandae rem officiis hic. Magnam earum beatae officiis recusandae
            dolore?
          </p>
        </div>
      </div>
      <div className="founders-outer">
        <h1>Our Team</h1>
        <div>
          <div className="card">
            <img src="https://res.cloudinary.com/antrix/image/upload/v1692019423/woj/avatar_a0nrwt.png" />
            <h2>Kuldeep </h2>
            <h3>Team member</h3>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/antrix/image/upload/v1692018410/woj/avatar-female_hdaurr.png" />
            <h2>shivani</h2>
            <h3>Team member</h3>
          </div>
          <div className="card">
            <img src="https://res.cloudinary.com/antrix/image/upload/v1692019423/woj/avatar_a0nrwt.png" />
            <h2>Mahesh</h2>
            <h3>Team member</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
