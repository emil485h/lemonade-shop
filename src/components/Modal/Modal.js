// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Make sure to create a corresponding CSS file for styling

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-body">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </>,
    document.getElementById('modal-root') // This is where the modal will be mounted in the HTML
  );
};

export default Modal;
