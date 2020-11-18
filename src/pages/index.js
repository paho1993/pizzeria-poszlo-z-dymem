import React from "react"
import Layout from "../components/layout"
import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faPhone,
  faPizzaSlice,
  faCarSide,
  faPepperHot,
} from "@fortawesome/free-solid-svg-icons"
import Picture from "../images/stock-pizza-main.jpg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Prawdziwa włoska pizza w Opolu" />
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
                    Prawdziwa włoska pizza w sercu Opola. Najlepsze składniki i
                    włoska receptura to gwarancja świetnego jedzenia. Przekonaj
                    się sam!
                  </p>
                  <a href="/menu" className="btn btn-custom btn-lg page-scroll">
                    Zobacz menu
                  </a>
                  <a
                    href="tel:510265267"
                    className="btn btn-custom btn-lg page-scroll showonmobile"
                  >
                    <FontAwesomeIcon icon={faPhone} className="phoneicon" />
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
            <div className="col-xs-6 col-md-4">
              <FontAwesomeIcon className="icon" icon={faCarSide} />
              <h3>Szybka dostawa</h3>
              <p>Szybka dostawa jest gwarancja pysznej świeżej pizzy</p>
            </div>
            <div className="col-xs-6 col-md-4">
              <FontAwesomeIcon className="icon" icon={faPepperHot} />
              <h3>Najlepsza jakośc</h3>
              <p>
                Składniki pochodzące prosto z Włoch decydują a wysokiej jakość
                pizzy
              </p>
            </div>
            <div className="col-xs-6 col-md-4">
              <FontAwesomeIcon className="icon" icon={faPizzaSlice} />
              <h3>Receptura</h3>
              <p>
                Nasze wszystkie danie przygotowywane są z prawdziwych
                oryginalnych włoskich przepisów
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="about">
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
      </div> */}
    </div>
  </Layout>
)

export default IndexPage
