
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Stránka nenájdená" />
      <section className="not-found">
        <h1>Hľadaná stránka neexistuje</h1>
        <p>Každý sa občas dostane do slepej uličky. Kliknite na tlačidlo nižšie a objavte správnu cestu. &#128578;</p>
        <div className="not-found__button-wrapper">
          <Link to="/">Späť na hlavnú stránku</Link>
        </div>
      </section>
    </Layout>
  )
}
  
export default NotFoundPage
