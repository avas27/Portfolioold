import React from "react";
import "../assets/font-awesome/css/font-awesome.min.css";

function About() {
  return (
    <div className="home">
      <div className="intro">
        <div className="int">
          I love to work until imagination changes into reality
          <br />
          <p style={{ fontWeight: "normal" }}>
            Certified Front-End React Developer
            <br />
            Certified Front-End Angular Developer
            <br />
            Certified Full Stack (MEAN-Stack) Web Developer
            <br />
            Certified UI/UX Designer
          </p>
          <span style={{ fontWeight: "normal" }}>Connect with me on : </span>
          <br />
          <a
            href="https://twitter.com/avas27avas"
            style={{ color: "white", fontSize: "40px" }}
            target="_blank"
          >
            <i className="fa fa-twitter-square"></i>
          </a>
          <a
            href="https://github.com/avas27"
            target="_blank"
            style={{ color: "white", fontSize: "40px" }}
          >
            <i className="fa fa-github" style={{ marginLeft: "20px" }}></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCfqU1zw2n7_dzWskNOep-Ww"
            target="_blank"
            style={{ color: "white", fontSize: "40px" }}
          >
            <i className="fa fa-youtube" style={{ marginLeft: "20px" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
