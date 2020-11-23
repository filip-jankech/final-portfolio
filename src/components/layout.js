
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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

  function Mailto({ email, className, ...props }) {
    return (
      <a href={`mailto:${email}`} class={className}>{props.children}</a>
    );
  }

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
              <Mailto email="filip.jankech@gmail.com" className="footer__email">filip.jankech@gmail.com</Mailto>
            </div> 
            <div className="footer__social-wrapper">
              <OutboundLink href="https://www.facebook.com/fillip.jankech" target="_blank" rel="noopener noreferrer">
                <RiFacebookBoxFill />
              </OutboundLink>
              <OutboundLink href="https://www.linkedin.com/in/filip-jankech" target="_blank" rel="noopener noreferrer">
                <RiLinkedinBoxFill />
              </OutboundLink>
              <OutboundLink href="https://www.instagram.com/filipjankech" target="_blank" rel="noopener noreferrer">
                <AiFillInstagram />
              </OutboundLink>
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
