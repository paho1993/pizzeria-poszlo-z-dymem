import React from "react"
import Layout from "../components/layout"
import Picture6 from "../images/food-delivery.png"
import Seo from "../components/seo"

const MenuPage = () => (
  <Layout>
    <Seo title="Dostawa" />
    <div id="restaurant-menu">
      <div class="container">
        <div class="section-title text-center" style={{ marginTop: "70px" }}>
          <h2>Dostawa</h2>
          <div className="thumbnail" style={{ marginBottom: "30px" }}>
            <img
              src={Picture6}
              alt="Pizza z dowozem w Opolu"
              className="team-img img-fluid"
            />
          </div>
          <p>
            0-1.5 km koszt dowozu to 5 zł - Minimalna wartość zamówienia 60 zł.
            Darmowy dowóz od kwoty 150 zł
          </p>
          <p>
            1.5-3 km koszt dowozu to 8 zł - Minimalna wartość zamówienia 60 zł.
            Darmowy dowóz od kwoty 200 zł
          </p>
          <p>
            3-5 km koszt dowozu to 10 zł - Minimalna wartość zamówienia 60 zł.
            Darmowy dowóz od kwoty 200 zł
          </p>
          <p style={{ marginBottom: "100px" }}>
            5-7 km koszt dowozu to 12 zł - Minimalna wartość zamówienia 70 zł.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default MenuPage
