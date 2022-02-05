module.exports = {
  pathPrefix: `/~cbradley`,
  siteMetadata: {
      title: `Carleton-CV`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    },
  },
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/data/`
    },
  },]
};