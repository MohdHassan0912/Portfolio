import Common from "./common";
import Common1 from "./common1";
import "./project.css";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <Common />
      <div className="r2">
        <div className="c3">
          <div className="img-div">
            <img className="img1" src={require("./image/mypic.jpeg")} />
          </div>
        </div>
        <div className="c4">
          <div className="c4-1">
            <h4 className="h1">
              Hey I'm <span className="text-success">Mohd Hassan</span>
              <br /> I'm a <span className="text-success">Web Developer</span>
            </h4>
            <p>
       I specialize in front-end development using modern technologies such as React, HTML, CSS, and JavaScript. I enjoy solving problems and turning ideas into real, interactive web applications.
            </p>
            <br />
            <a href="https://wa.me/+917991948390">
              <i className="fa-brands  fa-whatsapp "></i>
            </a>
            <a href="https://www.instagram.com/__h_a_s_s_a_n_7">
              <i className="fa-brands  fa-instagram "></i>
            </a>
            <a href="https://www.facebook.com/Mohd Hassan">
              <i className="fa-brands  fa-facebook "></i>
            </a>
            <a href="https://www.linkedin.com/in/Mohd Hassan">
            <i className="fa-brands  fa-linkedin "></i>
            </a>
            <a href="https://twitter.com/@MohdHas29732233">
            <i className="fa-brands  fa-twitter "></i>
            </a>
            <br />
            <br />
            <br />
            {/* <a href="./docs/Mohd HASSAN CV -1.pdf" download="cv.pdf">
              <button className="btn btn-success btn1">Hire me</button>
            </a> */}
            <a href="https://drive.google.com/file/d/1cmyZaQ4wMybUmApjjYW9mlKSt3Vznc5H/view?usp=sharing">
            <button className="btn btn-success btn1">Hire me</button>
            </a>
          </div>
        </div>
      </div>
      <Common1/>
    </>
  );
};
export default Project;
