import { Script } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"



const MenuPage = () => (
  <Layout>
    <Seo title="Nasze menu" />
    <div class="iframe-container">
      <iframe class="responsive-iframe" width="100%" height="100%" src="https://poszlo-z-dymem.upmenusite.com/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


  </Layout>
)

export default MenuPage
