import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/avas27.jpg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = {
      home: true,
      work: false,
      contact: false
    };
  }
  handle(value) {
    if (value === "work") {
      console.log("okk");
      this.setState({
        home: false,
        work: true,
        contact: false
      });
    } else if (value === "contact") {
      this.setState({
        home: false,
        work: false,
        contact: true
      });
    } else if (value === "home") {
      this.setState({
        home: true,
        work: false,
        contact: false
      });
    }
  }

  render() {
    return (
      <div className="header">
        <div className="img">
          <img src={img} alt="avas27"></img>
        </div>
        <div className="title clearfix">
          Abhishek Verma
          <span>Full Stack Web Developer</span>
        </div>
        <ul>
          {this.state.home ? (
            <Link style={{ color: "white" }} to="/home">
              <li className="ud">Home</li>
            </Link>
          ) : (
            <Link style={{ color: "white" }} to="/home">
              {" "}
              <li
                onClick={() => {
                  this.handle("home");
                }}
              >
                Home
              </li>
            </Link>
          )}
          {this.state.work ? (
            <Link style={{ color: "white" }} to="/work">
              <li className="ud">My Work</li>
            </Link>
          ) : (
            <Link style={{ color: "white" }} to="/work">
              {" "}
              <li
                onClick={() => {
                  this.handle("work");
                }}
              >
                My Work
              </li>
            </Link>
          )}
          {this.state.contact ? (
            <Link style={{ color: "white" }} to="/about">
              {" "}
              <li className="ud">About Me</li>
            </Link>
          ) : (
            <Link style={{ color: "white" }} to="/about">
              <li
                onClick={() => {
                  this.handle("contact");
                }}
              >
                About Me
              </li>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}

export default Header;
