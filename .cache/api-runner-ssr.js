var plugins = [{
      plugin: require('/home/chris/otherworld-ink/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images-contentful","options":{"maxWidth":590,"linkImagesToOriginal":false,"withWebp":true,"loading":"lazy"}}]},
    },{
      plugin: require('/home/chris/otherworld-ink/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/home/chris/otherworld-ink/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Otherworld Ink","short_name":"otherworld","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/otherworld-logo.svg","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"9e71d9b90e4b4dc2b7d5ad29da48fd8b"},
    },{
      plugin: require('/home/chris/otherworld-ink/node_modules/gatsby-plugin-snipcartv3/gatsby-ssr'),
      options: {"plugins":[],"apiKey":"MzBmN2Y2NzktOWJjNS00MmRkLThlNjItODk5ZjY1NTM5ODk3NjM3MTY5NTQ2NDc2ODAxNTk3"},
    },{
      plugin: require('/home/chris/otherworld-ink/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
