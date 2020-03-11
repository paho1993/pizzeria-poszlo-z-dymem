import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

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

const Navbar = () => (
  <HeaderWrapper>
    <StyledLink to="/">
      <b>MACIEJ PACHOLAK</b>
    </StyledLink>
    <ContentSeparator />
    <StyledLink>O mnie</StyledLink>

    <StyledLink to="/projects">Projekty</StyledLink>

    <StyledLink to="/cgi">Grafika komputerowa</StyledLink>

    <StyledLink to="/contact">Kontakt</StyledLink>
  </HeaderWrapper>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
