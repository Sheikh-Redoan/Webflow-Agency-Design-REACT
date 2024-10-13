import React from 'react'
import card_img from '../../assets/blog PArt card image.jpg'

const Our_blog = () => {
  return (
    <section id="our_blog">
    <div className="container">
      <div className="tittle_part">
        <h3>Our blog</h3>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card_part">
            <img src={card_img} alt="blog PArt card image.jpg"/>
            <div className="text_part">
              <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card_part">
            <img src={card_img} alt="blog PArt card image.jpg"/>
            <div className="text_part">
              <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card_part">
            <img src={card_img} alt="blog PArt card image.jpg"/>
            <div className="text_part">
              <h5>19 Jan 2022</h5>
              <h3>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
              <p>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
              <a href="#">Read More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Our_blog