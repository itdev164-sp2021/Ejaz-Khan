module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `ITDev-164 Gatsby blog`,
    author: `Ejaz Khan`,
    contact: {
      name: "Ejaz Khan",
      company: "Blogs Inc,",
      address:"PD Box 1234"
    }
  },
  plugins: [
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        spaceId:'dzcfc1oczjva',
        accessToken: 'U7T_O77xA5ciRXrcY4efeP2lDCNe2gYgqIXSmf6mYk',
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
