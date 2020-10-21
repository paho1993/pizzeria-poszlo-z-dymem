import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

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
      <div className="row justify-content-center">
        <div className=" col-sm-2 col-md-1">
          <a target="_blank" href="https://www.pyszne.pl">
            <FacebookIcon className="iconFooter" fontSize="large" />
          </a>
        </div>
        <div className="col-sm-2 col-md-1">
          <a target="_blank" href="https://www.pyszne.pl">
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

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
