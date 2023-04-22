// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/Main.css";

export const Main = () => {
  return (
    <div id="main" className="Main">
      <div className="Landing">
        <div className="Taxiimg">
          <img src="../src/assets/Taxiimg.jpg" alt="" />
        </div>
        <div className="Book_the_ride">
          <span>Plan your trip now</span>
          <p>Save big with our cab service</p>
          <span>
            Book the cab whenever you want. Unbeatable prices, flexible pick-up
            options and much more
          </span>
          <div className="btn">
            <button
              onClick={() => {
                var div = document.getElementById("myDiv");
                div.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book Now
            </button>
            <button>Learn more </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
