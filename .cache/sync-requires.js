const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/blog.js"))),
  "component---src-pages-cart-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/cart.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/index.js"))),
  "component---src-pages-legal-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/legal.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/portfolio.js"))),
  "component---src-pages-shop-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/pages/shop.js"))),
  "component---src-templates-blog-entry-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/templates/BlogEntry.js"))),
  "component---src-templates-portfolio-js": hot(preferDefault(require("/home/chris/repos/otherworld-ink/src/templates/portfolio.js")))
}

