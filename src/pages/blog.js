import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/blog.css"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="blog-page">
        <h1>My Blog</h1>
        <div className="blog-container">
          {data.allMarkdownRemark.nodes.map((node, index) => (
            <div key={index} className="blog-post">
              <h2>{node.frontmatter.title}</h2>
              <p>
                {node.frontmatter.date} by {node.frontmatter.author}
              </p>
              {/* Markdown content */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: node.excerpt }} 
              />
             
              {node.fields?.slug && (
                <Link to={node.fields.slug}>Read More →</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date
          author
        }
        excerpt(pruneLength: 150)
        fields {
          slug
        }
      }
    }
  }
`
