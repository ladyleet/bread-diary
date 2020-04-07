module.exports = {
  siteMetadata: {
    title: `Bread Diary`,
    description: `Welcome to my first bread diary. Gonna get yeasty up in here.`,
    author: `@ladyleet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `@vojtaholik/gatsby-theme-simplecast`,
      options: {
        simplecastApiSecret: `SIMPLECAST_API_SECRET`,
        podcastId: `PODCAST_ID`, // theme uses mockup data if no podcastId provided
        markdownPath: `content/episodes`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
