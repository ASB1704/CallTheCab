// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/About.css";
export const About = () => {
  return (
    <div id="about" className="Abount">
      <div className="About_our_company">
        <div className="TaxiImg">
          <img src="../public/static/taxi.gif" alt="" />
        </div>
        <div className="Description">
          <h2>About our Company</h2>
          <span>
            CallTheCab dedicatedly providing a great taxi service for more than
            10 years. Dedication and experience with the right size taxi
            equipped as per passengers needs is the key to our success.
            CallTheCab Taxi Service is available 24/7 throughout all the days
            and specialized in taxi service from Perth airports all terminals
            and Fremantle cruise ports. Call Maxi Cab has specially equipped
            maxi taxis for wheelchair passengers transportation in Perth. We
            also offer on-demand pre-booked maxi taxis and also provide
            transportation services to people traveling in groups and help them
            to travel safely. With our convenient online booking form, you will
            book a taxi with ease, knowing our reliable service goes to be there
            for you, You can plan your journey with us without any hesitation.
            With a range of vehicles and services, we have got all of your
            travel needs covered.
          </span>
        </div>
      </div>
      <div className="Service_reviews">
        <div className="Customer_review">
          <h3>Reviewed by people</h3>
          <h1>Customer{`'`}s Testimonials</h1>
        </div>
        <div className="Customer_review_card">
          <div className="card">
            <p>
              {`"`}We booked a car from this website and had an amazing
              experience ! The booking was easy and the rates were very
              affordable{`"`}
            </p>
            <span>Rohit Dhakad</span>
          </div>
          <div className="card">
            <p>
              {`"`}The taxi was in great condition and made our trip even
              better.Highly recommmend for booking the cabs from this website
              {`"`}
            </p>
            <span>Tanmay Tripathy</span>
          </div>
          <div className="card">
            <p>
              {`"`}It was a great experience with CallTheCab service and the drivers were very polite and made a good trip
              {`"`}
            </p>
            <span>Abhishek Gupta</span>
          </div>
        </div>
      </div>
    </div>
  );
};
