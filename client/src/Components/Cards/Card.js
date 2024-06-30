import React from "react";
import exampleImage from "../../Assets/CardCover.jpg";

function Card(props) {
  // Define a function to handle the click event
  const handleClick = (text) => {
    return () => {
      alert("Image " + text + " Clicked!"); // Example action: showing an alert
    };
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* Add the onClick event listener to the image */}
      <img
        className="card-img-top"
        src={exampleImage}
        alt="Card image cap"
        onClick={handleClick(props.text)} // Setting up the click event handler
      />
      <div className="card-body">
        <p className="card-text">
          {props.text} {/* Use props.text to display the passed-in text */}
        </p>
      </div>
    </div>
  );
}

export default Card;
