import React from "react";
import "./Modal.scss"
const Modal = ({ children, title, setModal }) => {
  return (
    <div className="blur">
      <div className="modal-wrapper">
        <div className="modal-title">
          <h3>{title}</h3>
          <button onClick={() =>setModal(false)}>X</button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
