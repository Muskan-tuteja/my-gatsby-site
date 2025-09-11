import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <h1>Portfolio</h1>
      <div className='links'>
        <Link to='/'style={{ marginRight: "20px" }}>Home</Link>
        <Link to='/about' style={{ marginRight: "20px" }}>About</Link>
        <Link to='/blog' style={{ marginRight: "20px" }}>Blog</Link>
      
        <Link to='/contact' style={{ marginRight: "20px" }}>Contact</Link>
      </div>
    </nav>
  )
}

