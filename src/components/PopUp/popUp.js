import React, { useState } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import image from "../../images/242124334_406093487781506_3684268385438712264_n.png"

const PopUp = () => {
  const [show, setShow] = useState(true)

  const handleClose = () => setShow(false)

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        {/* <Modal.Title>
          <b>Szanowni klienci</b>
        </Modal.Title> */}
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
