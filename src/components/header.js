import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-swift.png')} width="30" /></Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/downloads"><button>Downloads</button></Link>
    </div>
  </div>
)

export default Header
