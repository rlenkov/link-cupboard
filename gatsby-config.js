require('dotenv').config({
    path: '.env',
})

module.exports = {
    siteMetadata: {
        title: 'Link Cupboard',
        siteUrl: `https://link-cupboard.com/`,
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
    ],
}
