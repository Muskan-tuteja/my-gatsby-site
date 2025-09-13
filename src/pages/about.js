import React from "react"
import Img from "gatsby-image"
import "../styles/about.css"

import Layout from "../components/layout"
import { graphql } from "gatsby"

// import { Link } from "gatsby";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi, I am <b>Muskan </b>. Currently working as a{" "}
          <b>Frontend Developer Intern</b> at Hexadecimal Software Pvt. Ltd.
        </p>
        <p>
          <b>Education:</b> B.Tech in Computer Engineering <br />
          <b>Skills:</b> HTML, CSS, JavaScript, React, Gatsby <br />
          <b>Goal:</b> To become a professional Frontend Developer <br />
        </p>
        <Img
          fluid={data.file.childImageSharp.fluid}
          placeholder="blurred"
          style={{
            width: "200px",
            height: "200px",
            margin: "20px auto",
          }}
        />
      </div>
    </Layout>
  )
}

export default AboutPage

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
