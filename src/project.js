import Common from "./common";
import "./project.css";
import { Link } from "react-router-dom";


const Project = () => {
  return (
    <>
      <Common/>
      <div className="r2">
        <div className="c3">
          <div className="img-div">
            <img className="img1" src={require("./image/mypic.jpeg")} />
          </div>
        </div>
        <div className="c4">
          <div className="c4-1">
          <h1 className="h1">
            Hey I'm <span className="text-success">Hassan</span>
            <br /> I'm a <span className="text-success">Web Developer</span>
          </h1>
          <p className="h5">I am a Web Developer</p>
          <br />
          <a href="https://wa.me/+917991948390">
          <i className="fa-brands  fa-whatsapp ">

          </i>
          </a>
          <a href="https://www.instagram.com/__h_a_s_s_a_n_7">
          <i className="fa-brands  fa-instagram ">

          </i>
          </a>

          <i className="fa-brands  fa-facebook "></i>
          <i className="fa-brands  fa-linkedin "></i>
          <i className="fa-brands  fa-twitter "></i>
          <br />
          <br />
          <br />
          <a href="./docs/Mohd HASSAN CV -1.pdf" download="cv.pdf">
          <button className="btn btn-success btn1">Hire me</button>
          </a>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <p>&copy; 2024 Hassan's Portfolio | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};
export default Project;
