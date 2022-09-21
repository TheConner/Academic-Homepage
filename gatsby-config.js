module.exports = {
  pathPrefix: `/~cbradley`,
  siteMetadata: {
    title: `Conner Bradley`,
    siteUrl: `https://www.cisl.carleton.ca/~cbradley/`,
    author: 'Conner Bradley',
    description: `Conner Bradley's academic homepage at Carleton University`
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
}
