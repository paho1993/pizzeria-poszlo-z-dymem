import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare,faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
  <div id="footer">
    <div className="container text-center text-white mt-2 mb-2">
    <a
        href="tel:510265267"
        className="text-white"
      >
        TELEFON : &nbsp;
        <FontAwesomeIcon icon={faPhone} className="phoneicon" />
        &nbsp;510 265 267
      </a>
    </div>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className=" col-sm-2 col-md-1">
          <a 
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Posz%C5%82o-z-Dymem-102492268325629"
          >   <FontAwesomeIcon icon={faFacebookSquare} className="iconFooter" />
          </a>
        </div>
        <div className="col-sm-2 col-md-1">
          <a
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/poszlozdymem/?fbclid=IwAR3zMOCXLdVKWmPSi2QYt7_U0Yv89JPfoL49SukJLGsMRiIXA5zk9PPVeow"
          >   <FontAwesomeIcon icon={faInstagram} className="iconFooter" />
          </a>
        </div>
      </div>
    </div>
    <div className="container text-center">
      <p>
        &copy; {new Date().getFullYear()} Poszło z dymem. Realizacja :{" "}
        <a href="http://maciejpacholak.pl/" target="_blank" rel="noreferrer">
          Maciej Pacholak
        </a>
      </p>
    </div>
  </div>
)

export default Footer
