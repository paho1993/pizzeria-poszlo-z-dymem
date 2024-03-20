import React from "react"
import Picture1 from "../images/aaa20201118-DSC00087.jpg"
import Picture2 from "../images/20201028-DSC09aa883.jpg"
import Picture3 from "../images/bb20201201-DSC00362.jpg"
import Picture4 from "../images/20201028-DSC098aa68.jpg"
import Picture5 from "../images/20201028-DSC098aa96.jpg"
import Picture6 from "../images/20201028-DSC0985aa8.jpg"
import Picture7 from "../images/aaa20201118-DSC00101.jpg"
import Picture8 from "../images/20201127-DSC00345.jpg"
import Picture9 from "../images/aaa20201118-DSC00106.jpg"
import Picture10 from "../images/aaa20201121-DSC00120.jpg"
import Picture11 from "../images/bb20201201-DSC00347.jpg"
import Picture12 from "../images/bb20201201-DSC00365.jpg"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Place = () => (
  <Layout>
    <Seo title="Nasz lokal" />
    <div id="team">
      <div className="container">
        <div
          className="text-center section-title"
          style={{ marginTop: "70px" }}
        >
        </div>
        <div
          className="text-center section-title"
          style={{ marginTop: "40px" }}
        >
          <h2>Galeria</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture2}
                alt="Klimatyczne wnętrze"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture3}
                alt="Poszło z Dymem lokal"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture4}
                alt="Włoskie składniki"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture5}
                alt="Pizza makarony panini"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture6}
                alt="Pyszna pizza"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture7}
                alt="Calzone"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture8}
                alt="Wysoka jakość"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture9} alt="Desery" className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture1}
                alt="Centrum Opola"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture10}
                alt="Najlepsza pizza w Opolu"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture11}
                alt="Włoska pizza w Opolu"
                className="team-img img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img
                src={Picture12}
                alt="Opole pizza"
                className="team-img img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Place
