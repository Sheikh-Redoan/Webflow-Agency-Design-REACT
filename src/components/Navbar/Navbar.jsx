import React from 'react'
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <section id="navbar">
    <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={logo} alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About us.html">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="features.html">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pricing.html">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#frequently">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#our_blog">Blog</a>
              </li>
            </ul>
            <form className="d-flex">
              <a className="nav_btn" href="#">Contact uss</a>
            </form>
          </div>
        </div>
      </nav>
</section>
  )
}

export default Navbar