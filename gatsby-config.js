require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `New-York`,
        description: ``,
        author: `@thomast_404`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: 'gatsby-source-prismic',
            options: {
                schemas: {
                    page: require('./src/schemas/page.json')
                },
                repositoryName: process.env.PRISMIC_REPO,
                accessToken: process.env.PRISMIC_TOKEN
            }
        },
        {
            resolve: 'gatsby-plugin-prismic-preview',
            options: {
                repositoryName: 'gatsby-source-prismic-test-site',
                linkResolver: require('./src/linkResolver'),
                path: '/preview',
            }
        }
    ],
};
