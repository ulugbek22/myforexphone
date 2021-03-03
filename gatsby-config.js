require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitle: `MyForexPhone`,
    siteTitleAlt: `Trade on the go`,
    siteHeadline: `Trading on mobile`,
    siteDescription: `Trading on mobile phone.`,
    siteLanguage: `en`,
    siteUrl: "http://localhost:8000",
    siteImage: `/banner.jpg`,
    author: `Ulugbek Mamatkulov`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        blogPath: "/",
        tagsPath: "/tags",
        navigation: [
          {
            title: "Home",
            slug: "/",
          },
          {
            title: "Contact",
            slug: "/contact",
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Terms`,
            slug: `/terms`,
          },
          {
            title: `Privacy`,
            slug: `/privacy`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/myforexphone`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/myforexphone`,
          },
          {
            name: `Telegram`,
            url: `https://www.t.me/myforexphone`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
