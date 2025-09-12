import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/blog.css"

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date
          author
        }
        html
        fields {
          slug
        }
      }
    }
  }
`

const HomePage = ({ data }) => (
  <Layout>
    <div>
      <h1>My Blog</h1>
      <div className="blog-container">
        {data.allMarkdownRemark.nodes.map((node, index) => (
          <div key={index} className="blog-post">
            <h2>{node.frontmatter.title}</h2>
            <p>
              {node.frontmatter.date} by {node.frontmatter.author}
            </p>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
            <Link to={node.fields.slug}>Read More →</Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)

export default HomePage
