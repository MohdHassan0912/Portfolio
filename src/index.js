import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Project from "./project";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import Skill from "./skill";
import Contact from "./contact";
import Service from "./service";
import Commmon1 from "./common1";
import Common1 from "./common1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Project/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/skill' element={<Skill/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/service' element={<Service/>}/>
        <Route exact path='/common1' element={<Common1/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Project/> */}
    {/* <About/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
