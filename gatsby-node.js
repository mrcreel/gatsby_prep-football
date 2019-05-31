/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/*
exports.onCreateNode = ({ node }) => {
  // TeamsJson
  if (node.internal.type === `TeamsJson`) {
    // const fileNode = getNode(node.parent)
    console.log(node.slug)
  }
}
 */

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
/*
  return graphql(`
    allTeamsJson{
      edges {
        node {
          slug
        }
      }
    }
  `
  ).then(result => {
    console.log(JSON.stringify(result, null, 4))
  })
*/
}