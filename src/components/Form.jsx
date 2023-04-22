// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../Styles/Form.css";
import {FaTaxi} from 'react-icons/fa'
var Form = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // handle form submission
      setSubmitted(true);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (pickupLocation.trim() === "") {
      errors.pickupLocation = "Please enter a pickup location";
    }
    if (dropOffLocation.trim() === "") {
      errors.dropOffLocation = "Please enter a drop-off location";
    }
    if (date === "") {
      errors.date = "Please select a pickup date";
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(date);
      if (selectedDate < currentDate) {
        errors.date = "Pickup date cannot be in the past";
      }
    }
    if (time === "") {
      errors.time = "Please select a pickup time";
    }
    return errors;
  };

  const resetForm = () => {
    setPickupLocation("");
    setDropOffLocation("");
    setDate("");
    setTime("");
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div>
      {!submitted && (
        <form onSubmit={handleSubmit} >
            <div className="formcontrol">
               <FaTaxi/>
                <h4>Ride Now</h4>
            </div>
          <div className="formcontrol">
            <img src="../src/assets/location.png" alt="" />

            <input
              placeholder="Pickup Location"
              type="text"
              id="pickup-location"
              name="pickup-location"
              value={pickupLocation}
              onChange={(event) => setPickupLocation(event.target.value)}
              required
            />
          </div>
          {errors.pickupLocation && (
            <p className="error">{errors.pickupLocation}</p>
          )}
          <div className="formcontrol">
            <img src="../src/assets/destination.png" alt="" />
            <input
              placeholder="drop-off-location"
              type="text"
              id="drop-off-location"
              name="drop-off-location"
              value={dropOffLocation}
              onChange={(event) => setDropOffLocation(event.target.value)}
              required
            />
          </div>
          {errors.dropOffLocation && (
            <p className="error">{errors.dropOffLocation}</p>
          )}
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
            />
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              required
            />
          {errors.date && <p className="error">{errors.date}</p>}

          {errors.time && <p className="error">{errors.time}</p>}

          <button type="submit">Search For Cab</button>
        </form>
      )}

      {submitted && (
        <div className="confirmation">
          <h2>Thank you for your inquiry!</h2>
          <p>Pickup Location: {pickupLocation}</p>
          <p>Drop-off Location: {dropOffLocation}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Additional Requirements: None</p>
          <button onClick={resetForm}>Submit Another Inquiry</button>
        </div>
      )}
    </div>
  );
};
export default Form;
