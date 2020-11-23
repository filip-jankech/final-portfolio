
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Správa odoslaná" />
      <section className="not-found">
        <h1>Ďakujem za Vašu správu!</h1>
        <p>
          Na vašu správu odpoviem v čo možno najkratšom čase. 
          <span role="img" aria-label="usmiaty emoji">&#128578;</span>
        </p>
        <div className="not-found__button-wrapper">
          <Link to="/">Späť na hlavnú stránku</Link>
        </div>
      </section>
    </Layout>
  )
}
  
export default NotFoundPage
