import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const Footer = () => (
  <div id="footer">
    <div className="container text-center">
      <h3>Zamów na telefon : 510 265 267</h3>
    </div>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className=" col-sm-2 col-md-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Posz%C5%82o-z-Dymem-102492268325629"
          >
            <FacebookIcon className="iconFooter" fontSize="large" />
          </a>
        </div>
        <div className="col-sm-2 col-md-1">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/poszlozdymem/?fbclid=IwAR3zMOCXLdVKWmPSi2QYt7_U0Yv89JPfoL49SukJLGsMRiIXA5zk9PPVeow"
          >
            <InstagramIcon className="iconFooter" />
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
