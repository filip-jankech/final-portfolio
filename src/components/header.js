
import PropTypes from "prop-types"
import React, { useState } from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useSpring, animated } from 'react-spring'

import { FiMenu } from 'react-icons/fi'
import logo from "../images/logo.png"

const Header = () => {

  const [isToggled, setToggle] = useState(false)

  const showNav = useSpring({
    transform: isToggled ? 'translateY(250px)' : 'translateY(-276px)'
  })

  return (
    <header id="header">
      <Container fluid style={{ padding: 0 }}>
        <Navbar expand="sm">
          <AnchorLink to="/#hero__section" className="navbar-brand">
            <img src={logo} alt="Filip Jankech logo" className="header__logo"/>
          </AnchorLink>
          <button className="navbar-toggle" onClick={() => setToggle(!isToggled)}>
            <FiMenu />
          </button>
          <animated.nav style={showNav} className="header__navbar-container">
              <ul className="header__navbar" style={{ marginRight: -5 }}>
                <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                  <AnchorLink to="/#projects__section" title="portfólio" className="nav-link" />
                </Nav.Item>
                <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                  <AnchorLink to="/#ref__section" title="referencie" className="nav-link" />
                </Nav.Item>
                <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                  <AnchorLink to="/#about__section" title="o mne" className="nav-link" />
                </Nav.Item>
                <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                  <AnchorLink to="/#offer__section" title="ponuka" className="nav-link" />
                </Nav.Item>
                <Nav.Item as="li" style={{ margin: 0 }} onClick={() => setToggle(!isToggled)}>
                  <AnchorLink to="/#form__section" title="kontakt" className="nav-link" />
                </Nav.Item>
              </ul>
          </animated.nav>
        </Navbar>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
