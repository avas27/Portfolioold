import React from "react";
import "../assets/font-awesome/css/font-awesome.min.css";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <div className="int">
          I love to work until imagination changes into reality
        </div>
        <div className="designer introText">
          <div className="after">
            <i className="fa fa-paint-brush"></i>Designer
          </div>
          <span>
            Passionate UI/UX designer with an aim to convert imagination into
            reality.
          </span>
        </div>
        <div className="developer introText">
          <div className="after">
            <i className="fa fa-code code"></i>Developer
          </div>
          <span>
            Enthusiast Front-end and Back-end coder with clean, efficient and
            simple coding logic.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
