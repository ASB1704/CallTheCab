// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../Styles/ScrollToTopButton.css";
import { AiOutlineArrowUp } from "react-icons/ai";
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      <button
        className={`${isVisible ? "show" : ""} scroll-to-top-button`}
        onClick={scrollToTop}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
}

export default ScrollToTopButton;
