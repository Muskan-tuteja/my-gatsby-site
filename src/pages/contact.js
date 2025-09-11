import * as React from "react"
import Layout from "../components/layout"
import "../styles/contact.css"   // 👈 CSS import

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>
          You can reach me via: <br />
           Email: <a href="mailto:muskan@example.com">muskantuteja466@gmail.com</a> <br />
           LinkedIn: <a href="https://linkedin.com/in/muskan-tuteja" target="_blank" rel="noreferrer">https://www.linkedin.com/in/muskan-tuteja-90b1b2322/</a> <br />
           Phone: +91-XXXXXXXXXX
        </p>

        <form method="post" action="#" className="contact-form">
          <label>
            Your Name
            <input type="text" name="name" required />
          </label>

          <label>
            Your Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="4" required></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
