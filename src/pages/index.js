import React from "react"
import Layout from "../components/layout"
// import PopUp from "../components/PopUp/popUp"
import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faPizzaSlice,
  faCarSide,
  faPepperHot,
  faClock,
} from "@fortawesome/free-solid-svg-icons"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Prawdziwa włoska pizza w Opolu" />
      <div>
        {/* <PopUp /> */}
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
                      Prawdziwa włoska pizza w sercu Opola. Najlepsze składniki
                      i włoska receptura to gwarancja świetnego jedzenia.
                      Przekonaj się sam!
                    </p>
                    <a
                      href="/menu"
                      className="btn btn-custom btn-lg page-scroll"
                    >
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
            <div className="section-title">
              <h2>Co nas wyróżnia </h2>
            </div>
            <div className="row center">
              <div className="col-xs-6 col-md-4">
                <FontAwesomeIcon className="icon" icon={faCarSide} />
                <h3>Szybka dostawa</h3>
                <p>Szybka dostawa jest gwarancją pysznej świeżej pizzy</p>
              </div>
              <div className="col-xs-6 col-md-4">
                <FontAwesomeIcon className="icon" icon={faPepperHot} />
                <h3>Najlepsza jakość</h3>
                <p>
                  Składniki pochodzące prosto z Włoch decydują o wysokiej
                  jakości pizzy
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
          </div>   <div id="order" className="section-title" style={{ marginTop: "40px" }}>
              <h2>Zamów online </h2>
            </div>
          <div class="iframe-index-container">
            <iframe class="responsive-index-iframe" width="100%" height="100%" src="https://poszlo-z-dymem.upmenusite.com/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="container">
            <div className=" section-title" style={{ marginTop: "70px" }}>
              <h2>Godziny otwarcia</h2>
            </div>
            <div className="col-xs-12 col-md-12">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <h3>Poniedziałek : Nieczynne</h3>
              <h3>Wtorek - Sobota : 12:00 - 22:00</h3>
              <h3>Niedziela : 12:00 - 20:00</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
