// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
export const Navbar = () => {
  const closenav = () => {
    let a = document.querySelector(".nav-items");
    a.classList.remove("show");
  };
  const opennav = () => {
    let a = document.querySelector(".nav-items");
    a.classList.toggle("show");
  };
  return (
    <div className="NavBar">
      <div className="logo">
        <img src="../src/assets/logo.png" alt="logo" />
        <span>CallTheCab</span>
      </div>
      <div className="nav-items">
        <span onClick={() => closenav()} className="close-nav">
          <RxCross1 />
        </span>
        <a href="#main">Home</a>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#contact">Contact Us</a>
      </div>
      <span onClick={() => opennav()} className="hamburger">
        {" "}
        <GiHamburgerMenu />{" "}
      </span>
    </div>
  );
};
