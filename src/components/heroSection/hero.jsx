import React, { useState, useRef } from "react";
import "./hero.css";

function HeroBG() {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const popupRef = useRef(null); // Ref for the popup

  const handleClick = () => {
    setShowPopup(true); // Set showPopup state to true when button is clicked
    // Smooth scroll to the section where the popup is located
    popupRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClose = () => {
    setShowPopup(false); // Set showPopup state to false to close the popup
    popupRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="BG">
        <h1>
          35+Years of Expertise to Simplify Your Procedures </h1><h2> Expedite Shipments Worldwide
        </h2>
        <h3>Streamline Your Customs Procedures with <span><h3>UDHAY SHIPPING</h3></span></h3>
       
  
      </div>
    </>
  );
}
export default HeroBG;
