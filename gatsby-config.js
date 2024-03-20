module.exports = {
  siteMetadata: {
    title: `Pizzeria Poszło z Dymem`,
    description: `Korzystamy tylko z prawdziwych włoskich składników i przepisów `,
    author: `Poszło z Dymem`,
    siteUrl: "https://poszlozdymem.pl",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.GATSBY_FB_PIXEL_ID,
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
        background_color: `#272121`,
        theme_color: `#272121`,
        display: `minimal-ui`,
        icon: `src/images/pzd_final.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/404/`, `/contact-after-send/`],
      },
    },
    "gatsby-plugin-robots-txt",
  ],
}
