import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ margin: "200px" }}>
      <h1>STRONA NIE ISTNIEJE</h1>
      <p>Ta strona już nie istnieje, wróć na stronę główną</p>
    </div>
  </Layout>
)

export default NotFoundPage
