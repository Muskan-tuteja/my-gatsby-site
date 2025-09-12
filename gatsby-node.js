const path = require("path")

// Har Markdown file ke लिए slug banata hai
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = `/blog/${path.basename(node.fileAbsolutePath, ".md")}/`
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// Har slug ke लिए ek page create karta hai
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
