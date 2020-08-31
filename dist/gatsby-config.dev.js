"use strict";

require('dotenv').config({
  path: ".env.".concat(process.env.NODE_ENV)
});

var contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

var spaceId = contentfulConfig.spaceId,
    accessToken = contentfulConfig.accessToken;

if (!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the access token need to be provided.');
}

module.exports = {
  siteMetadata: {
    title: "Koppedit",
    description: "Easiest way to buy and sell used gadgets",
    author: "@gatsbyjs"
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-sass", {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }
  }]
};