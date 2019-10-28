import React from "react";
import omni from "../assets/omni.gif";
import rest from "../assets/rest.gif";
import mp from "../assets/mp.gif";
import hms from "../assets/hms.gif";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "../assets/font-awesome/css/font-awesome.min.css";

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.isToggle = this.isToggle.bind(this);
    this.state = {
      isOpen: false,
      heading: "",
      desc: "",
      tech: "",
      url1: "",
      url2: ""
    };
  }
  isToggle(v) {
    this.setState({
      isOpen: !this.state.isOpen,
      heading: v.heading,
      desc: v.desc,
      tech: v.tech,
      url1: v.url1,
      url2: v.url2
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader toggle={this.isToggle}>{this.state.heading}</ModalHeader>
          <ModalBody>
            <div style={{ marginTop: "30px" }}>
              <span style={{ fontWeight: "bold" }}>Technology Used : </span>
              {this.state.tech}
            </div>
            <div style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: "bold" }}>Description : </span>
              {this.state.desc}
            </div>
            <div style={{ margin: "25px 0" }}>
              View On:
              <br />
              <a
                href={this.state.url1}
                target="_blank"
                style={{ color: "black", fontSize: "50px" }}
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href={this.state.url2}
                target="_blank"
                style={{ color: "black", fontSize: "50px", marginLeft: "30px" }}
              >
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </ModalBody>
        </Modal>
        <div className="home">
          <div className="work">
            <div
              onDoubleClick={() =>
                this.isToggle({
                  heading: "Food Ordering Website",
                  desc:
                    "A real-world responsive food ordering website designed to run smoothly on all devices.",
                  tech: "HTML5, CSS3, Bootstrap and jQuery",
                  url1: "https://github.com/avas27/Food-ordering-Website",
                  url2: "https://www.youtube.com/watch?v=fZm7CknOnaI"
                })
              }
            >
              <img src={omni} alt="omnifood" />
              <span>
                <p>Food Ordering Website</p>
              </span>
            </div>
            <div
              onDoubleClick={() =>
                this.isToggle({
                  heading: "Music Player App",
                  desc:
                    "A real-world music player web-app designed to run smoothly on all devices.",
                  tech: "HTML5, CSS3, JavaScript and jQuery",

                  url1: "https://github.com/avas27",
                  url2:
                    "https://www.youtube.com/channel/UCfqU1zw2n7_dzWskNOep-Ww"
                })
              }
            >
              <img src={mp} alt="music player" />
              <span>
                <p>Music Player</p>
              </span>
            </div>
            <div
              onDoubleClick={() =>
                this.isToggle({
                  heading: "Hotel Management System",
                  desc:
                    "It is Hotel Management website consisting of 30+ webpages and 17+ Service like guest-login, staff-management, catering-service, account-management, etc.",
                  tech: "HTML5, CSS3 and JavaScript",

                  url1: "https://github.com/avas27",
                  url2: "https://www.youtube.com/watch?v=mKA3syowAj4"
                })
              }
            >
              <img src={hms} alt="hms" />
              <span>
                <p>Hotel Management System</p>
              </span>
            </div>
            <div
              onDoubleClick={() =>
                this.isToggle({
                  heading: "Restaurant Website",
                  desc:
                    "A responsive website to take a restaurant business online",
                  tech: "React and CSS-3",
                  url1: "https://github.com/avas27",
                  url2:
                    "https://www.youtube.com/channel/UCfqU1zw2n7_dzWskNOep-Ww"
                })
              }
            >
              <img src={rest} alt="restaurant" />
              <span>
                <p>Restaurant Website</p>
              </span>
            </div>
          </div>
          <div className="workText">
            Tap or Click for info
            <br />
            Double Click or tap to View
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
