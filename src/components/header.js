import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src='/images/logo-1.png' width="80" /></Link>
          <Link to="/services">Services</Link>
          <Link to="/conveniently-cut">Custom Vinyl</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default Header
