
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Header from "./header"
import "./layout.scss"

import { RiFacebookBoxFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import { RiLinkedinBoxFill } from 'react-icons/ri'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      footerLogo: file(relativePath: {eq: "logo.png"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)



  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="site-content">
        <main>
          {children}
        </main>
        <footer>
          <div className="footer__container">
            <div className="footer__social-wrapper invisible">
              <RiFacebookBoxFill />
              <RiLinkedinBoxFill />
              <AiFillInstagram />
            </div>
            <div className="footer__disclaimer">
              <AnchorLink to="/#hero__section" className="footer__link">
                <div className="footer__logo-wrapper">
                  <Img fluid={data.footerLogo.childImageSharp.fluid} className="footer__logo" alt="Filip Jankech logo" />
                </div>
                <span>Filip Jankech</span>
              </AnchorLink>
              <span className="footer__claim">© {new Date().getFullYear()} | všetky práva vyhradené</span>
            </div> 
            <div className="footer__social-wrapper">
              <a href="https://www.facebook.com/fillip.jankech" target="_blank" rel="noopener noreferrer">
                <RiFacebookBoxFill />
              </a>
              <a href="https://www.linkedin.com/in/filip-jankech" target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxFill />
              </a>
              <a href="https://www.instagram.com/filipjankech" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
