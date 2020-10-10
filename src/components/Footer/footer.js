import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import "../style.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import Logo from "../../images/fiverr_weblogo.svg"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap"
const HeaderWrapper = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  height: 70px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
  display: flex;
  box-shadow: 0px 4px 12px -2px rgba(117, 117, 117, 1);
  justify-content: space-between;
  align-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`

const ContentSeparator = styled.div`
  margin-left: auto;
`
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  margin-right: 20px;
`

const Footer = () => (
  <div id="footer">
    <div className="container text-center">
      <h3>Zamów na telefon : 523592835</h3>
    </div>
    <div className="container text-center">
      <div className="row">
        <div className="col">
          {" "}
          <a href="lol">
            <FontAwesomeIcon className="iconFooter" icon={faCoffee} size="3x" />
          </a>
        </div>{" "}
        <div className="col">
          {" "}
          <a href="lol">
            <FontAwesomeIcon className="iconFooter" icon={faCoffee} size="3x" />
          </a>
        </div>{" "}
        <div className="col">
          {" "}
          <a href="lol">
            <FontAwesomeIcon className="iconFooter" icon={faCoffee} size="3x" />
          </a>
        </div>
      </div>
    </div>
    {/* <div className="col-md-12">
      <div className="row">
        <div className="social">
          <ul>
            <li>
              <a href="lol">
                <FontAwesomeIcon className="icon" icon={faCoffee} />
              </a>
            </li>
            <li>
              <a a href="lol">
                <FontAwesomeIcon className="icon" icon={faCoffee} />
              </a>
            </li>
            <li>
              <a href="lol">
                <FontAwesomeIcon className="icon" icon={faCoffee} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    <div className="container text-center">
      <p>
        &copy; {new Date().getFullYear()} Poszło z dymem. Realizacja :{" "}
        <a href="http://www.templatewire.com" rel="nofollow">
          Maciej Pacholak
        </a>
      </p>
    </div>
  </div>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
