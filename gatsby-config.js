module.exports = {
  siteMetadata: {
    title: `Filip Jankech`,
    description: `Ahoj, volám sa Filip. Navrhnem a vytvorím pre Vás pekný, rýchly a spoľahlivý web.`,
    author: `Filip Jankech`,
    image: `/social.jpg`,
    keywords: `[webová stránka, web, webstránka, e-shop, eshop, tvorba, návrh, developer, dizajnér, programátor]`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-QNHEWKKFFW",
        head: true,
        anonymize: true,
        pageTransitionDelay: 0,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -180
      }
    },
  ],
}
