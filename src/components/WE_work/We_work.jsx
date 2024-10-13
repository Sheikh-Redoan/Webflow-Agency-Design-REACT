import React from 'react'
import weworkimg1 from '../../assets/we work pointer 1.png'
import weworkimg2 from '../../assets/we work pointer 2.png'
import weworkimg3 from '../../assets/we work pointer 3.png'
import weworkimg4 from '../../assets/we work pointer 4.png'

const We_work = () => {
  return (
    <section id="we_work">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="text_box">
                <h2>How we work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <a href="#">Get in touch with us {/*<FontAwesomeIcon icon="fa-solid fa-arrow-right" />*/}</a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="one">
                <img src={weworkimg1} alt="we work pointer 1.png"/>
                <h3>Strategy</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
              <div className="one">
                <img src={weworkimg3} alt="we work pointer 3.png"/>
                <h3>Strategy</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="one">
                <img src={weworkimg2} alt="we work pointer 2.png"/>
                <h3>Strategy</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
              <div className="one">
                <img src={weworkimg4} alt="we work pointer 4.png"/>
                <h3>Strategy</h3>
                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default We_work