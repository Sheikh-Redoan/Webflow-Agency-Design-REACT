import React from 'react'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <section id="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <img src={logo} alt="logo"/>
                <p className="first-texst">We are always open to discuss your project and improve your online presence.</p>
                <div className="info_part">
                    <div className="one">
                        <h4>Email me at</h4>
                        <a href="#">contact@website.com</a>
                    </div>
                    <div className="one">
                        <h4>Call us</h4>
                        <a href="#">0927 6277 28525</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <h3>Lets Talk!</h3>
                <p className="text_of_footer">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                <div className="icons">
                    <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
 </section>
  )
}

export default Footer