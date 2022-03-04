import React from "react";
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Customize</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
          <label for="cars">Choose a color:</label>

<select name="colors" id="color">
  <option value="red">Red</option>
  <option value="blue">blue</option>
  <option value="yellow">Yellow</option>
  <option value="white">White</option>
</select>
<br/>
<label for="bgcolor">Choose a background:</label>

<select name="colors" id="bgcolor">
  <option value="red">Red</option>
  <option value="blue">blue</option>
  <option value="yellow">Yellow</option>
  <option value="white">White</option>
</select>
<br/>
<label for="fontSize">Select Font size:</label>

<select name="colors" id="fsize">
  <option value="16px">16px</option>
  <option value="20px">20px</option>
  <option value="24px">24px</option>
  <option value="30px">30px</option>
</select>
<br/>
<label for="fontFamily">Select Font Family:</label>

<select name="colors" id="fsize">
  <option value="Arial">Arial</option>
  <option value="Poppins">Poppins</option>
  <option value="Roboto">Roboto</option>
  
</select>
          </div>
          
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Customize
              </button>
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;