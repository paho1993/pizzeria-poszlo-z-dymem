import React from "react"
import Layout from "../components/layout"
import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import RoomIcon from "@material-ui/icons/Room"
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="section-title text-center" style={{ marginTop: "150px" }}>
      <h2>Lokalizacja</h2>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39114.16286486486!2d20.914870096679707!3d52.21367692013387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1602970537703!5m2!1spl!2spl"
        width="100%"
        height="550"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
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
