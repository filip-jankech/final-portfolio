
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spring } from "react-spring/renderprops";
import Typewriter from 'typewriter-effect';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SvgDot from "../components/svgdot"
import Form from "../components/form"
import VisibilitySensor from "../components/VisibilitySensor"

import debbie from "../images/debbie.jpg"
import patrik from "../images/patrikpavlis.jpg"
import danka from "../images/danka.jpg"
import romanakova from "../images/romanakova.jpg"

import { ImWordpress } from 'react-icons/im'
import { SiWoo } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { FaElementor } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiGatsby } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { RiFacebookBoxFill } from 'react-icons/ri'
import { AiFillInstagram } from 'react-icons/ai'
import { RiLinkedinBoxFill } from 'react-icons/ri'
import { RiWechatLine } from 'react-icons/ri'
import { RiCalculatorLine } from 'react-icons/ri'
import { RiPenNibLine } from 'react-icons/ri'
import { RiCodeSSlashLine } from 'react-icons/ri'
import { RiWechatPayLine } from 'react-icons/ri'
import { AiOutlineTool } from 'react-icons/ai'

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      tabuga: file(relativePath: {eq: "tabuga.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      pavlis: file(relativePath: {eq: "pavlis.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      planeta: file(relativePath: {eq: "planeta.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ambulance: file(relativePath: {eq: "ambulance.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      kworld: file(relativePath: {eq: "k-world.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      remeslo: file(relativePath: {eq: "remeslo.jpg"}) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      slider: file(relativePath: {eq: "slider.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      about: file(relativePath: {eq: "about.png"}) {
        id
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    
    <Layout>
      <SEO title="Filip Jankech" />
      <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
        {({ isVisible }) => (
          <Spring
            to={{
              opacity: isVisible ? 1 : 0,
            }}
          >
            {(props) => 
              <section className="hero__section" style={{ ...props }}>
                <h1 id="hero__section">Ahoj! Volám sa Filip.</h1>
                <h3 className="inline-1"><span className="hero__line-break">Navrhnem a vytvorím pre &nbsp;</span>
                  <span className="inline">
                    Vás &nbsp;
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("rýchly")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("spoľahlivý")
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString("atraktívny")
                          .pauseFor(1000)
                          .deleteAll()
                          .start()
                      }}
                      options={{
                        autoStart: true,
                        loop: true
                      }}
                    />&nbsp; web.
                  </span>
                </h3>
                <h3 className="hero__deal">Dohodnuté?</h3>
                <div className="hero__button-wrapper">
                  <AnchorLink to="/#projects__section" title="Zistiť viac" className="button-secondary" />
                  <AnchorLink to="/#form__section" title="Ozvite sa!" className="button-primary hero__button-2" />
                </div>
                <div className="hero__circles-wrapper">
                  <SvgDot className="hero__circle-1" />
                  <SvgDot className="hero__circle-2" />
                </div>
              </section>
            }
          </Spring>
        )}
      </VisibilitySensor>

      <section className="projects__section">
        <h1 id="projects__section">Moja práca</h1>
        <div className="projects__wrapper">
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : "translateX(-100px)",
                }}
              >
                {(props) => 
                  <OutboundLink href="https://tabuga.cz/" target="_blank" rel="noopener noreferrer" style={{ ...props }}>
                    <div className="projects__overlay tabuga-overlay">
                      <h2>Tabuga</h2>
                      <div className="projects__tech-wrapper">
                        <ImWordpress />
                        <SiWoo />
                        <SiPhp />
                      </div>
                      <Img fluid={data.tabuga.childImageSharp.fluid} alt="Tabuga" className="projects__img" />
                    </div>
                  </OutboundLink>
                }
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : "translateX(100px)",
                }}
              >
                {(props) => 
                  <OutboundLink href="https://patrikpavlis.com/" target="_blank" rel="noopener noreferrer" style={{ ...props }}>
                    <div className="projects__overlay pavlis-overlay">
                      <h2>Patrik Pavlis</h2>
                      <div className="projects__tech-wrapper">
                        <SiJavascript />
                        <SiJquery />
                        <FaSass />
                        <SiFirebase />
                      </div>
                      <Img fluid={data.pavlis.childImageSharp.fluid} alt="Patrik Pavlis" className="projects__img" />
                    </div>
                  </OutboundLink>
                }
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : "translateX(-100px)",
                }}
              >
                {(props) => 
                  <OutboundLink href="https://planetazemsausmieva.sk/" target="_blank" rel="noopener noreferrer" style={{ ...props }}>
                    <div className="projects__overlay planeta-overlay">
                      <h2>Planéta Zem sa usmieva</h2>
                      <div className="projects__tech-wrapper">
                        <ImWordpress />
                        <SiWoo />
                        <FaElementor />
                      </div>
                      <Img fluid={data.planeta.childImageSharp.fluid} alt="Planéta Zem sa usmieva" className="projects__img" />
                    </div>
                  </OutboundLink>
                }
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : "translateX(100px)",
                }}
              >
                {(props) => 
                  <OutboundLink href="https://romanakova.cz/" target="_blank" rel="noopener noreferrer" style={{ ...props }}>
                    <div className="projects__overlay ambulance-overlay">
                      <h2>Ambulance klinické psychologie</h2>
                      <div className="projects__tech-wrapper">
                        <SiReact />
                        <SiGatsby />
                        <FaSass />
                        <SiNetlify />
                      </div>
                      <Img fluid={data.ambulance.childImageSharp.fluid} alt="Ambulance klinické psychologie" className="projects__img" />
                    </div>
                  </OutboundLink>
                }
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : "translateX(100px)",
                }}
              >
                {(props) => 
                  <OutboundLink href="https://www.k-world.sk" target="_blank" rel="noopener noreferrer" style={{ ...props }}>
                    <div className="projects__overlay k-world-overlay">
                      <h2>K-World</h2>
                      <div className="projects__tech-wrapper">
                        <ImWordpress />
                        <SiWoo />
                        <SiPhp />
                      </div>
                      <Img fluid={data.kworld.childImageSharp.fluid} alt="K-World" className="projects__img" />
                    </div>
                  </OutboundLink>
                }
              </Spring>
            )}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateX(0)"
                    : "translateX(100px)",
                }}
              >
                {(props) => 
                  <OutboundLink href="https://www.remeslobratislava.sk" target="_blank" rel="noopener noreferrer" style={{ ...props }}>
                    <div className="projects__overlay remeslo-overlay">
                      <h2>Remeslo</h2>
                      <div className="projects__tech-wrapper">
                        <ImWordpress />
                        <SiWoo />
                        <SiPhp />
                      </div>
                      <Img fluid={data.remeslo.childImageSharp.fluid} alt="Remeslo" className="projects__img" />
                    </div>
                  </OutboundLink>
                }
              </Spring>
            )}
          </VisibilitySensor>
        </div>
      </section>

      <section className="ref__section">
        <h1 id="ref__section">Referencie</h1>
        <Carousel>
          <Carousel.Item className="ref__slide">
            <Img fluid={data.slider.childImageSharp.fluid} alt="Deborah Romaňáková" className="ref__slide-background" />
            <Carousel.Caption>
              <img src={debbie} alt="Deborah Romaňáková" />
              <h3>Deborah Romaňáková</h3>
              <OutboundLink href="https://tabuga.cz/" target="_blank" rel="noopener noreferrer">
                <h4>tabuga.cz</h4>
              </OutboundLink>
              <p>“Filip mi byl doporučený jako mladý kreativní chlapec, kterého baví vytvářet digitální podobu firmy. Hlavním zadáním bylo - hravé, jiné, odvážné. To Filip vytvořil.  Duši Tabūgy přenesl na internetové stránky. Poradil si i s mými požadavkami a úpravami. Těším se na další spolupráci.”</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="ref__slide">
            <Img fluid={data.slider.childImageSharp.fluid} alt="Patrik Pavlis" className="ref__slide-background" />
            <Carousel.Caption>
              <img src={patrik} alt="Patrik Pavlis" />
              <h3>Patrik Pavlis</h3>
              <OutboundLink href="https://patrikpavlis.com/" target="_blank" rel="noopener noreferrer">
                <h4>patrikpavlis.com</h4>
              </OutboundLink>
              <p>“Som rád, že som na tvorbu svojho web-portfólia oslovil práve Filipa. Spolupráca bola hneď od začiatku výborná. Najviac ma prekvapoval Filipov prístup. Prichádzal s novými návrhmi a možnosťami ako web posunúť o úroveň ďalej a tak sa aj stalo... Ak hľadáte človeka pre tvorbu Vášho webu, práve ste ho našli. Odporúčam, výsledok jednoducho stojí za to!”</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="ref__slide">
            <Img fluid={data.slider.childImageSharp.fluid} alt="Danka Moderdovská" className="ref__slide-background" />
            <Carousel.Caption>
              <img src={danka} alt="Danka Moderdovská" />
              <h3>Danka Moderdovská</h3>
              <OutboundLink href="https://planetazemsausmieva.sk/" target="_blank" rel="noopener noreferrer">
                <h4>planetazemsausmieva.sk</h4>
              </OutboundLink>
              <p>“Filipa som oslovila, keď som súrne potrebovala prerobiť moju webovú stránku s e-shopom. Filip sa chytil roboty a už o pár dní som mala veci nastavené tak, ako bolo treba. Jeho práca bola napriek časovému tlaku precízna a pekná. Vie zruzumiteľne veci vysvetliť a nastaviť podľa reálnej potreby. Vrelo odporúčam, neoľutujete. Ja som nadmieru spokojná a môj web ide konečne ako som si predstavovala.”</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="ref__slide">
            <Img fluid={data.slider.childImageSharp.fluid} alt="Marta Romaňáková" className="ref__slide-background" />
            <Carousel.Caption>
              <img src={romanakova} alt="Marta Romaňáková" />
              <h3>Marta Romaňáková</h3>
              <OutboundLink href="https://romanakova.cz/" target="_blank" rel="noopener noreferrer">
                <h4>romanakova.cz</h4>
              </OutboundLink>
              <p>“Filip mi byl doporučen pro úpravy mých webových stránek. Tyto stránky byly zastaralé a Filip jim vdechl modernější, šmrncovnější styl. Spolupráce byla absolutně bezproblémová a věcná, současně citlivá. Vážím si toho, že co Filip řekne, to i splní. Nemohu jinak než doporučit. Těším se na další spolupráci. Děkuji, Filipe.”</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="about__section">
        <div className="about__container">
          <h1 id="about__section">Kto som?</h1>
          <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
            {({ isVisible }) => (
              <Spring
                delay={250}
                to={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(100px)",
                }}
              >
                {(props) => 
                  <>
                    <div className="about__row" style={{ ...props }}>
                      <SvgDot className="about__circle" />
                      <p>
                        vo veku 29 rokov som sa rozhodol ukončiť prácu na manažérskej pozícií a obrátiť svoj život naruby
                      </p>
                    </div>
                    <div className="about__row" style={{ ...props }}>
                      <SvgDot className="about__circle" />
                      <p>
                        od tej doby navrhujem a tvorím weby pomocou najmodernejších webových technológií
                      </p>
                    </div>
                    <div className="about__row" style={{ ...props }}>
                      <SvgDot className="about__circle" />
                      <p className="about__p-last">
                        verte mi, nič lepšie som nemohol spraviť, teraz sa živím tým, čo ma baví
                      </p>
                    </div>
                    <div className="about__social-wrapper" style={{ ...props }}>
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
                  </>
                }
              </Spring>
            )}
          </VisibilitySensor>
        </div>
        <div className="about__photo">
          <Img fluid={data.about.childImageSharp.fluid} alt="Filip Jankech" />
        </div>
      </section>
      
      <section className="offer__section">
        <div className="offer__container">
          <h1 id="offer__section">Čo ponúkam?</h1>
          <div className="offer__cards-wrapper">
            <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                  }}
                >
                  {(props) => 
                    <div className="offer__card" style={{ ...props }}>
                      <RiWechatLine />
                      <h2>Úvodná konzultácia</h2>
                      <p>Počas osobného, telefonického alebo online rozhovoru mi objasníte Vaše predstavy a požiadavky.</p>
                    </div>
                  }
                </Spring>
              )}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                  }}
                >
                  {(props) => 
                    <div className="offer__card" style={{ ...props }}>
                      <RiCalculatorLine />
                      <h2>Cenová ponuka</h2>
                      <p>Na základe Vášho zadania vypracujem cenovú ponuku a pošlem Vám ju na schválenie.</p>
                    </div>
                  }
                </Spring>
              )}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                  }}
                >
                  {(props) => 
                    <div className="offer__card" style={{ ...props }}>
                      <RiPenNibLine />
                      <h2>Grafický návrh</h2>
                      <p>Pred samotným programovaním Vám zašlem grafický návrh Vášho nového webu.</p>
                    </div>
                  }
                </Spring>
              )}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                  }}
                >
                  {(props) => 
                    <div className="offer__card" style={{ ...props }}>
                      <RiCodeSSlashLine />
                      <h2>Programovanie</h2>
                      <p>Po schválení grafického návrhu sa vrhnem na samotné programovanie webu.</p>
                    </div>
                  }
                </Spring>
              )}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                  }}
                >
                  {(props) => 
                    <div className="offer__card" style={{ ...props }}>
                      <RiWechatPayLine />
                      <h2>Spätná väzba</h2>
                      <p>Pred spustením ostrej verzie webu máte ešte možnosť pripomienkovať vytvorenú stránku.</p>
                    </div>
                  }
                </Spring>
              )}
            </VisibilitySensor>
            <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
              {({ isVisible }) => (
                <Spring
                  delay={250}
                  to={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(100px)",
                  }}
                >
                  {(props) => 
                    <div className="offer__card" style={{ ...props }}>
                      <AiOutlineTool />
                      <h2>Podpora</h2>
                      <p>V prípade problémov v priebehu užívania nového webu som Vám k dispozícií.</p>
                    </div>
                  }
                </Spring>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </section>

      <section className="form__section">
        <h1 id="form__section">Ozvite sa!</h1>
        <VisibilitySensor partialVisibility offset={{ bottom: -100 }} once>
          {({ isVisible }) => (
            <Spring
              delay={250}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0)"
                  : "translateY(100px)",
              }}
            >
              {(props) => 
                <Form name="Kontaktný formulár" style={{ ...props }} />
              }
            </Spring>
          )}
        </VisibilitySensor>
      </section>

    </Layout>
  )
}

export default IndexPage
