import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Dostawa" />
    <div id="restaurant-menu">
      <div class="container">
        <div class="section-title text-center" style={{ marginTop: "70px" }}>
          <h2>Dostawa</h2>
          <p>Do 2,5km dowóz gratis,minimalna wartość zamówienia 25zl</p>
          <p>
            Do 4km koszt dowozu to 4zł,milmalna wartość zamówienia 30 zł.
            Darmowy dowóz od kwoty 50zł
          </p>
          <p style={{ marginBottom: "350px" }}>
            Powyżej 6km koszt dowozu to 6zł,milmalna wartość zamówienia 30 zł.
            Darmowy dowóz od kwoty 60zł
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default MenuPage
