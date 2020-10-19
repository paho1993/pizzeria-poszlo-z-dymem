import React from "react"
import Layout from "../components/layout"
import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import Picture from "../images/stock-pizza-main.jpg"
import PhoneIcon from "@material-ui/icons/Phone"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>
                    PASTA PIZZA PANINI
                    <span></span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed dapibus leo nec ornare diam sed commodo nibh ante
                    facilisis bibendum.
                  </p>
                  <a href="/menu" className="btn btn-custom btn-lg page-scroll">
                    Zobacz menu
                  </a>
                  <a
                    href="tel:123-456-7890"
                    className="btn btn-custom btn-lg page-scroll showonmobile"
                  >
                    <PhoneIcon fontSize="small" />
                    &nbsp;&nbsp;zadzwoń
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="features" className="text-center">
        <div className="container">
          <div className=" section-title">
            <h2>Co nas wyróźnia </h2>
          </div>
          <div className="row center">
            <div className="col-xs-6 col-md-3">
              <FontAwesomeIcon className="icon" icon={faCoffee} />
              <h3>Szybka dostawa</h3>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <FontAwesomeIcon className="icon" icon={faCoffee} />
              <h3>Najlepsza jakośc</h3>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <FontAwesomeIcon className="icon" icon={faCoffee} />
              <h3>Atmosfera</h3>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>
            <div className="col-xs-6 col-md-3">
              <FontAwesomeIcon className="icon" icon={faCoffee} />
              <h3>Atmosfera</h3>
              <p>
                Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus
                eleifend pellentesque natoque etiam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src={Picture}
                className="img-responsive img-fluid"
                alt="Twoja stara"
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>O nas</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
