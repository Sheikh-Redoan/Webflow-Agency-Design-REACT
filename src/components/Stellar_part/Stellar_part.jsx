import React from 'react';

const Stellar_part = () => {
  return (
    <section id="stellar">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 first_text">
            <h2>Building stellar websites for early startups</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
          </div>
          <div className="col-lg-6">
            <form action="">
              <div className="tittle_text">
                <h3>Send inquiry</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Paste your Figma design URL" />
              <button type="submit" className="form_send_btn">Send an Inquiry</button>
              <button type="button" onClick={() => window.location.href = '#'}>Get in touch with us <i className="fa-solid fa-arrow-right"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stellar_part;
