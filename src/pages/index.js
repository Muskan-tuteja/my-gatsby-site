import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <section className="intro">
        <div>
          
          <h1>Welcome to My Portfolio </h1>
          <p>
            I am Muskan Tuteja, a Frontend Developer Intern at Hexadecimal
            Software Pvt. Ltd.
          </p>

          <div className="img">
            <StaticImage
              src="../images/my-photo.png"
              placeholder="blurred"
          layout="fixed"
          width={600}
          height={600}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
