/* eslint-disable react/prop-types */
import React from "react";
import "./Buttons.css";

function checkId(id) {
  if (id === "") {
    console.error(
      "Button id is empty. Please provide a unique id for the button."
    );
  }
  // TODO: Add different checks to return different button structures as needed.
}

const Button = ({
  text,
  onClick,
  type = "button",
  id = "",
  disabled = false,
}) => {
  checkId(id);
  return (
    <div className={`button-container-${id}`}>
      <button type={type} id={`${id}`} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  onClick: (e) => {
    e.preventDefault();
    console.log("Button clicked. This is the default onClick prop.");
  },
};

export default Button;

// For more information on the button tag and its properties, visit: https://www.w3schools.com/tags/tag_button.asp
