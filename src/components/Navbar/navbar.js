import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import Logo from "../../images/fiverr_final_website.svg"
import PyszneLogo from "../../images/svg/PysznePL.svg"
import PhoneIcon from "@material-ui/icons/Phone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Navbar, Nav } from "react-bootstrap"
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
  margin-right: 100px;
`

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
      Telefon : &nbsp;
      <FontAwesomeIcon icon={faPhone} className="phoneicon" />
      &nbsp;158915812
    </div>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto mr-5">
        <Nav.Link className="navbar-linkstyle" href="/menu">
          Menu
        </Nav.Link>
        <Nav.Link className="navbar-linkstyle" href="/place">
          Lokal
        </Nav.Link>
        <Nav.Link className="mr-2 navbar-linkstyle" href="/contact">
          Kontakt
        </Nav.Link>
        <Nav.Link
          className="navbar-linkstyle borderbutton"
          target="_blank"
          href="https://www.pyszne.pl"
        >
          <PyszneLogo style={{ height: "50px", marginLeft: "3px" }} />
          <span className="navbar-spanstyle">Zamów online</span>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

NavigationBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavigationBar.defaultProps = {
  siteTitle: ``,
}

export default NavigationBar
