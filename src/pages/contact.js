import React from "react"
import Layout from "../components/layout"
import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import Map from "../components/Map/map"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div className="container">
      <div className="text-center section-title" style={{ marginTop: "170px" }}>
        <h2>Lokal</h2>
      </div>
      <Map />
    </div> */}

    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Napisz do nas</h2>
                <p>
                  Jeśli masz do Nas jakiekolwiek pytanie - napisz ! Postaramy
                  się odpowiedzieć jak najszybciej.
                </p>
              </div>
              <form name="sentMessage" id="contactForm" noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Imię"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Wiadomość"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informacje kontaktowe</h3>
              <p>
                <span>
                  <RoomIcon fontSize="small" />
                  &nbsp;&nbsp;&nbsp;Adres
                </span>
                ul. Jakaś 28, 45-000, Opole
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <PhoneIcon fontSize="small" />
                  &nbsp;&nbsp;&nbsp;Telefon
                </span>
                +48 000 000 000
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <MailOutlineIcon fontSize="small" />
                  &nbsp;&nbsp;&nbsp;Email
                </span>
                pizzeriaposzlozdymem@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
