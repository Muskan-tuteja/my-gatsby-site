import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../styles/about.css" 
// import { Link } from "gatsby";  

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-container">
        <h1>About Me</h1>
        <p>
          Hi, I am <b>Muskan Tuteja</b>.  
          Currently working as a <b>Frontend Developer Intern</b> at Hexadecimal Software Pvt. Ltd.
        </p>
        <p>
          <b>Education:</b> B.Tech in Computer Engineering <br />
           <b>Skills:</b> HTML, CSS, JavaScript, React, Gatsby <br />
           <b>Goal:</b> To become a professional Frontend Developer <br />
        </p>

        {/* Profile Image */}
        <StaticImage
          src="../images/my-photo.png"
          alt="Muskan Profile"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />
      </div>
    </Layout>
  )
}

export default AboutPage
