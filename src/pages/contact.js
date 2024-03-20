import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone,faEnvelope,faMapPin } from "@fortawesome/free-solid-svg-icons"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Skontaktuj się z nami" />
    <div className="section-title text-center" style={{ marginTop: "150px" }}>
      <h2>Lokalizacja</h2>
    </div>
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1788.174343240133!2d17.93558123403557!3d50.666852285331736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471053f5168c7593%3A0xced4f70fdc20fe18!2sPosz%C5%82o%20z%20Dymem!5e0!3m2!1spl!2spl!4v1605733985273!5m2!1spl!2spl"
        width="100%"
        height="550"
        frameborder="0"
        allowfullscreen=""
        title="googlemaps"
        aria-hidden="false"
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
              <form
                name="contactForm"
                id="contactForm"
                data-netlify="true"
                method="post"
                action="contact-after-send"
                netlify
                netlify-honeypot="bot-field"
                noValidate
              >
                <input type="hidden" name="form-name" value="contactForm" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
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
                        name="email"
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
                <FontAwesomeIcon icon={faMapPin}/>
                  &nbsp;&nbsp;&nbsp;Adres
                </span>
                ul. Katowicka 48, 45-061, Opole
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                <FontAwesomeIcon icon={faPhone}/>
                  &nbsp;&nbsp;&nbsp;Telefon
                </span>
                +48 510 265 267
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                <FontAwesomeIcon icon={faEnvelope}/>
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
