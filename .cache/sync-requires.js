const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-portfolio-js": hot(preferDefault(require("D:\\Programming\\otherworld-ink\\src\\templates\\portfolio.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("D:\\Programming\\otherworld-ink\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Programming\\otherworld-ink\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("D:\\Programming\\otherworld-ink\\src\\pages\\about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Programming\\otherworld-ink\\src\\pages\\index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("D:\\Programming\\otherworld-ink\\src\\pages\\portfolio.js")))
}

