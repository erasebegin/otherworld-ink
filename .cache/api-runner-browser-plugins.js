module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images-contentful","options":{"maxWidth":590,"linkImagesToOriginal":false,"withWebp":true,"loading":"lazy"}}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Otherworld Ink","short_name":"otherworld","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/otherworld-logo.svg"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
