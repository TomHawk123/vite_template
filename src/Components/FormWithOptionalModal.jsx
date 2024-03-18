import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./FormWithOptionalModal.css";
import axios from "axios";

const FormWithOptionalModal = ({ useModal, onClose }) => {
  /* TODO: Create a way to toggle between modal styling and static styling */
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, name, message };
    const API_ENDPOINT = import.meta.env.VITE_API_URL;
    try {
      await axios.post(API_ENDPOINT, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setEmail("");
      setName("");
      setMessage("");
      onClose && onClose(); // Only call onClose if it exists
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const formContent = (
    <>
      {useModal && (
        <button className="close-button" onClick={onClose}>
          X
        </button>
      )}
      <div id="cta">
        Contact us using the form below <br /> to let us know your vision,{" "}
        <br /> and we will help you bring it to life.
      </div>
      <div className="contact-form">
        <h3 className="contact-form-h3">Contact DigitalForge</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-div">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-div">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button id="homePageSubmitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );

  return useModal
    ? ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="overlay" onClick={onClose}></div>
            {formContent}
          </div>
        </div>,
        document.getElementById("modal-root")
      )
    : formContent;
};

export default FormWithOptionalModal;
