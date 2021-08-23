import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const PopUp = () => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <b>Szanowni klienci</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Informujemy, że w przyczyn osobistych dnia 24.08 (wtorek) lokal będzie
        nieczynny. Zapraszamy w środę ;)
      </Modal.Body>
    </Modal>
  )
}
export default PopUp
