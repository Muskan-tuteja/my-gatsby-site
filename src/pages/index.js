import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({data}) {

  console.log(data)
  return (
    <Layout>
      <section className="intro">
        <div>
          <h1>Welcome to My Portfolio </h1>
          <p>
            I am Muskan , a Frontend Developer Intern at Hexadecimal
            Software Pvt. Ltd.
          </p>
          <Img fluid={data.file.childImageSharp.fluid} style={{
            width: "400px",
            height: "400px",
            margin: "20px auto",
          }} />
         
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  query ima {
    file(relativePath: { eq: "my-photo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
