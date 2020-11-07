import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const Footer = () => (
  <div id="footer">
    <div className="container text-center">
      <h3>Zamów na telefon : 523592835</h3>
    </div>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className=" col-sm-2 col-md-1">
          <a target="_blank" rel="noreferrer" href="https://www.pyszne.pl">
            <FacebookIcon className="iconFooter" fontSize="large" />
          </a>
        </div>
        <div className="col-sm-2 col-md-1">
          <a target="_blank" rel="noreferrer" href="https://www.pyszne.pl">
            <InstagramIcon className="iconFooter" />
          </a>
        </div>
      </div>
    </div>
    <div className="container text-center">
      <p>
        &copy; {new Date().getFullYear()} Poszło z dymem. Realizacja :{" "}
        <a href="http://maciejpacholak.pl/" rel="nofollow">
          Maciej Pacholak
        </a>
      </p>
    </div>
  </div>
)

export default Footer
