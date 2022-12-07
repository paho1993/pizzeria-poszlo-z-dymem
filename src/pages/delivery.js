import React from "react"
import Layout from "../components/layout"
import Picture6 from "../images/food-delivery.png"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Dostawa" />
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
            Do 1.5 km koszt dowozu to 3 zł - Minimalna wartość zamówienia 40 zł.
            Darmowy dowóz od kwoty 100 zł
          </p>
          <p>
            Do 4 km koszt dowozu to 6 zł - Minimalna wartość zamówienia 40 zł.
            Darmowy dowóz od kwoty 100 zł
          </p>
          <p style={{ marginBottom: "100px" }}>
            Od 4-7 km koszt dowozu to 8 zł - Minimalna wartość zamówienia 45 zł.
            Darmowy dowóz od kwoty 120 zł
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default MenuPage
