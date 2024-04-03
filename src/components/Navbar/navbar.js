import React from "react"
import Logo from "../../images/fiverr_final_website.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Navbar, Nav } from "react-bootstrap"

const NavigationBar = () => (
  <Navbar
    bg="#272121"
    variant="dark"
    fixed="top"
    style={{
      backgroundColor: "#272121",
      boxShadow: "0 4px 2px -2px rgba(0,0,0,.2)",
    }}
    expand="lg"
  >
    <Navbar.Brand href="/">
      <Logo style={{ height: "75px", marginLeft: "40px" }} />
    </Navbar.Brand>
    <div className="navbarphone ml-3">
      <a
        href="tel:510265267"
        className="btn btn-custom btn-lg "
      >
        Telefon : &nbsp;
        <FontAwesomeIcon icon={faPhone} className="phoneicon" />
        &nbsp;510 265 267
      </a>
    </div>
    <div className="navbarphone ml-4">
      <a
        aria-label="Facebook"
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/Posz%C5%82o-z-Dymem-102492268325629"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="2xl" color="rgba(255, 255, 255, 0.5)" />
      </a>
    </div>
    <div className="navbarphone ml-4">
      <a
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/poszlozdymem/?fbclid=IwAR3zMOCXLdVKWmPSi2QYt7_U0Yv89JPfoL49SukJLGsMRiIXA5zk9PPVeow"
      >
        <FontAwesomeIcon icon={faInstagram} size="2xl" color="rgba(255, 255, 255, 0.5)" />
      </a>
    </div>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mr-5">
        <Nav.Link className="navbar-linkstyle" href="https://poszlo-z-dymem.upmenusite.com/">
          Menu
        </Nav.Link>
        <Nav.Link className="navbar-linkstyle" href="/delivery">
          Dostawa
        </Nav.Link>
        <Nav.Link className="navbar-linkstyle" href="/place">
          Lokal
        </Nav.Link>
        <Nav.Link className="mr-2 navbar-linkstyle" href="/contact">
          Kontakt
        </Nav.Link>  
         <Nav.Link className="mr-2 navbar-linkstyle" href="https://poszlo-z-dymem.upmenusite.com/">
          Zamów online / Zarezewuj stolik
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationBar
