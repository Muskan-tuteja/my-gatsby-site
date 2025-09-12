import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
        tags
      }
      html
    }
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date} • {post.frontmatter.author}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>
          <strong>Tags:</strong> {post.frontmatter.tags?.join(", ")}
        </p>
      </div>
    </Layout>
  )
}

export default BlogPost
