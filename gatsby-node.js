/*exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}*/


const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve('./src/templates/home.js');
  return graphql(
    ` {
      allContentfulHowWeWorkImage(limit: 10) {
        edges {
          node {
            id
          }
        }
      }
      allContentfulEntry {
        nodes {
          id
        }
      }
    }`
  ).then(result => {
    if(result.error) throw result.error;

    //Create home page content
    const entry = result.data.allContentfulEntry.nodes;
    console.log(entry);

  });

  
}
