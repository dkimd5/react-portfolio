import React from "react";
import "./ModalComponent.css";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ image, show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <img src={image} alt="" />
    </Modal>
  );
}

export default ModalComponent;
