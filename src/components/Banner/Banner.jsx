import React from 'react'
import bannerimg from "../../assets/banner image.png"

const Banner = () => {
  return (
    <div id="banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <h1>Building stellar websites for early startups</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <div className="buttons_banner">
            <a className="banner_btn" href="#">View our work</a>
            <a className="banner_view" href="#">View Pricing <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="image_part">
            <img src={bannerimg} alt="banner image.png"/>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Banner