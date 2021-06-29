if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({
        path: '.env',
    })
}

module.exports = {
    siteMetadata: {
        title: 'Link Cupboard',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
    ],
}
