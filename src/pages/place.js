import React from "react"
import { Link } from "gatsby"
import Picture from "../images/intro-bg.jpg"
import Layout from "../components/layout"
import InstagramIcon from "@material-ui/icons/Instagram"
// import Image from "../components/image"
import SEO from "../components/seo"

const Place = () => (
  <Layout>
    <SEO title="Home" />
    <div id="team">
      <div className="container">
        <div className="text-center section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-3 team">
            <div className="thumbnail">
              <img src={Picture} alt="..." className="team-img" />
            </div>
          </div>
          <div className="col-md-3 col-sm-3 team">
            <div className="thumbnail">
              <img src={Picture} alt="..." className="team-img" />
            </div>
          </div>
          <div className="col-md-3 col-sm-3 team">
            <div className="thumbnail">
              <img src={Picture} alt="..." className="team-img" />
            </div>
          </div>
          <div className="col-md-3 col-sm-3 team">
            <div className="thumbnail">
              <img src={Picture} alt="..." className="team-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Place
