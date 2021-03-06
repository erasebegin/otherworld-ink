const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allContentfulPortfolioEntry {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              id
              slug
            }
          }
        }
        allContentfulProduct {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
  )
    .then((result) => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors);
      }

      // Resolve the paths to our template
      const portfolioTemplate = path.resolve("./src/templates/portfolio.js");
      // Then for each result we create a page.
      result.data.allContentfulPortfolioEntry.edges.forEach((edge) => {
        createPage({
          path: `/portfolio/${edge.node.slug}/`,
          component: slash(portfolioTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        });
      });

      const blogTemplate = path.resolve("./src/templates/BlogEntry.js");

      result.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
          path: `/blog/${edge.node.slug}`,
          component: slash(blogTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        });
      });

      const shopTemplate = path.resolve("./src/templates/ProductPage.js");

      result.data.allContentfulProduct.edges.forEach((edge) => {
        createPage({
          path: `/shop/${edge.node.slug}`,
          component: slash(shopTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        });
      });
    })
    .catch((error) => {
      console.log("Error retrieving contentful data", error);
    });
};
