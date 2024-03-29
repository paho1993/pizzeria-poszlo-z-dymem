/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Script } from "gatsby"

import Navbar from "./Navbar/navbar"
import Footer from "./Footer/footer"
import "./layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <><Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/93919fddc0d1988891eb9587/script.js"></Script>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
