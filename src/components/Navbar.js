import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
					<span>[niltonheck ~]#</span>
        </Link>
      </div>
      <div className="navbar-start">
			</div>
      <div className="navbar-end">
				<a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://github.com/niltonheck" rel="noopener noreferrer" target="_blank">
					<i class="fab fa-lg fa-github"></i>
				</a>

				<a class="navbar-item is-hidden-touch is-hidden-desktop-only" href="https://twitter.com/niltonheck" rel="noopener noreferrer" target="_blank">
					<i class="fab fa-lg fa-twitter"></i>
				</a>

				<Link className="navbar-item" to="/about">
         Sobre 
        </Link>

        <Link className="navbar-item" to="/">
         Postagens 
        </Link>
			</div>
    </div>
  </nav>
)

export default Navbar
