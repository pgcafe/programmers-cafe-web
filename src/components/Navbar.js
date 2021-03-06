import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/pgcafe_logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Programmer's Cafe" style={{ height: '38px', width: '38px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <a class="navbar-item" href="http://feeds.soundcloud.com/users/soundcloud:users:398628864/sounds.rss">
          RSS(Podcast)
        </a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/pgcafe/programmers-cafe-web"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
