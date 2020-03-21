require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `New-York`,
    description: ``,
    author: `@thomast_404`,
    url: `https://new-york-with-gatsby.netlify.com`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-demo-new-york`,
        short_name: `new-york`,
        start_url: `/`,
        background_color: `#cfcbc8`,
        theme_color: `#cfcbc8`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        schemas: {
          page: require("./src/schemas/page.json"),
        },
        repositoryName: process.env.PRISMIC_REPO,
        accessToken: process.env.PRISMIC_TOKEN,
      },
    },
  ],
}
