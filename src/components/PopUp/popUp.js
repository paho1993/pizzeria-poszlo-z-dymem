import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import image from "../../images/Menuurodzinowe.png"

const PopUp = () => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <b>Szanowni klienci</b>
          <p>
            W ten weekend zapraszamy do lokalu na specjalne dania z okazji 3
            urodzin Poszło z Dymem
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={image}
          alt="Poszło z Dymem lokal"
          className="team-img img-fluid"
        />
      </Modal.Body>
    </Modal>
  )
}
export default PopUp
