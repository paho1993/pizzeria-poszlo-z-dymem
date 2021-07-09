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
        Ze względu na rezerwację całego lokalu informujemy, że dnia 11.07 (niedziela) lokal będzie nieczynny.
        Zapraszamy we wtorek ;)
      </Modal.Body>
    </Modal>
  )
}
export default PopUp
