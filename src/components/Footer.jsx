// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="contact">
        <h3>Contact Us</h3>
        <p>
          CallTheCab
          <br />
          123 Main St
          <br />
          Anytown, UP <br />
          Phone: 123-456-7890
          <br />
          Email: info@callthecab.com
        </p>
      </div>
      <div className="captions">
        <h3>CallTheCab</h3>
        <p>A reliable taxi service for all your transportation needs.</p>
      </div>
    </footer>
  );
}

export default Footer;
