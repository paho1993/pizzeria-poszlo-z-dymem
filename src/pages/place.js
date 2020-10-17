import React from "react"
import Picture1 from "../images/appetizer-1238615_1920.jpg"
import Picture2 from "../images/brick-wall-1834784_1920.jpg"
import Picture3 from "../images/chair-3306118_1920.jpg"
import Picture4 from "../images/fast-food-2132863_1920.jpg"
import Picture5 from "../images/pizza-2000614_1920.jpg"
import Picture6 from "../images/pizza-5275191_1920.jpg"
import Picture7 from "../images/pizzeria-4804753_1920.jpg"
import Picture8 from "../images/table-5104538_1920.jpg"
import Picture9 from "../images/tuscany-685110_1920.jpg"
import Picture10 from "../images/restaurant-449952_1920.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Place = () => (
  <Layout>
    <SEO title="Nasz lokal" />
    <div id="team">
      <div className="container">
        <div
          className="text-center section-title"
          style={{ marginTop: "70px" }}
        >
          <h2>Lokal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit duis sed dapibus leonec. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit duis sed dapibus leonec. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit duis sed dapibus leonec. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit duis sed dapibus leonec. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit duis sed dapibus leonec.
          </p>
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
              <img src={Picture1} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture2} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture3} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture4} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture5} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture6} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture7} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture8} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture9} alt="..." className="team-img img-fluid" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex justify-content-center team">
            <div className="thumbnail">
              <img src={Picture10} alt="..." className="team-img img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Place
