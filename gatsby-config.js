module.exports = {
  siteMetadata: {
    title: `-213 PLN na Airbnb | kupon, promocja, voucher, rabat, zniżka, kod Airbnb`,
    description: `Odbierz 213 PLN na swój pierwszy pobyt z Airbnb. Kupon Airbnb pozwala na wykorzystanie 155zł na rezerwację noclegu oraz zniżkę 58zł na atrakcje.`,
    author: `@kkdrz`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        name: `kodyairbnb`,
        short_name: `kodyairbnb`,
        start_url: `/`,
        background_color: `rgb(255, 255, 255)`,
        theme_color: `rgb(0, 96, 185)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145121177-1",
        head: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   }
    // },
  ],
}
