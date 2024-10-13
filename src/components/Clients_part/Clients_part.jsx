import React from 'react'
import clienti1 from '../../assets/clieant_image.png'

const Clients_part = () => {
  return (
    <section id="client">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <h3>What our clients say about us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div className="col-lg-8">
          <h2>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
          <div className="clieant_box">
            <div className="one">
              <div className="client_image">
                <img src={clienti1} alt="clieant_image.png"/>
              </div>
              <div className="client_details">
                <h4>Jenny Wilson</h4>
                <p>Vice President</p>
              </div>
            </div>
            <div className="one">
              <i className="fa-solid fa-chevron-left"></i>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Clients_part