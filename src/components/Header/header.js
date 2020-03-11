import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const HeaderWrapper = styled.div`
  font-size: 18px;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
`

const LogoStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  height: 70px;
  font-family: "Montserrat", sans-serif;
  background: black;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`
const NavlinksStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
  height: 70px;
  font-family: "Montserrat", sans-serif;
  background: black;
  color: white;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 20px;
`

const Header = () => (
  <HeaderWrapper>
    <header>
      <div>
        <Link to="/">MACIEJ PACHOLAK</Link>
      </div>
      <div>
        <Link to="/about">O mnie</Link>
      </div>
      <div>
        <Link to="/projects">Projekty</Link>
      </div>
      <div>
        <Link to="/cgi">Grafika komputerowa</Link>
      </div>
      <div>
        <Link to="/contact">Kontakt</Link>
      </div>
    </header>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
