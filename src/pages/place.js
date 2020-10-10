import React from "react"
import { Link } from "gatsby"
import Picture from "../images/intro-bg.jpg"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Place = () => (
  <Layout>
    <SEO title="Home" />

    <div id="gallery">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <div class="gallery-item">
              {" "}
              <img src={Picture} class="img-responsive" alt="" />
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="gallery-item">
              {" "}
              <img src={Picture} class="img-responsive" alt="" />
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="gallery-item">
              {" "}
              <img src={Picture} class="img-responsive" alt="" />
            </div>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="gallery-item">
              {" "}
              <img src={Picture} class="img-responsive" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Place
