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
          <b>Drodzy klienci</b>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Informujemy, że w najbliższy weekend (29-30 maja) lokal będzie
        nieczynny. Musimy mieć więcej czasu na przygotowanie się do otwarcie
        sali ! Do zobaczenia już 1 czerwca
      </Modal.Body>
    </Modal>
  )
}
export default PopUp
