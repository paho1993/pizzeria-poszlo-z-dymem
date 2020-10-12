import React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import "../components/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import Image from "../components/image"
import Map from "../components/Map/map"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <Map />
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
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
                        placeholder="Name"
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
                    placeholder="Message"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faCoffee} /> Address
                </span>
                lol
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon icon={faCoffee} /> Phone
                </span>
                lol
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <FontAwesomeIcon icon={faCoffee} />
                  Email
                </span>
                lol
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
