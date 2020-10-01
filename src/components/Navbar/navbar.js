import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import Logo from "../../images/fiverr_weblogo.svg"
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
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

const NavigationBar = () => (
  <Navbar
    bg="#272121"
    variant="dark"
    style={{ backgroundColor: "#272121" }}
    expand="lg"
  >
    <Navbar.Brand href="/">
      <img
        src={Logo}
        width="257"
        height="70"
        className="d-inline-block align-top"
        alt="Poszło z Dymem"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/menu">Menu</Nav.Link>
        <Nav.Link href="/about">O nas</Nav.Link>
        <Nav.Link href="/place">Lokal</Nav.Link>
        <Nav.Link href="/contact">Kontakt</Nav.Link>
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
