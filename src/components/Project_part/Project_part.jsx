import React from 'react'
import project1 from '../../assets/project 1.png'
import project2 from '../../assets/project 2.png'
import project3 from '../../assets/project 3.png'
const Project_part = () => {
  return (
    <section id="projects">
    <div className="container">
      <div className="tittle_part">
        <h3>View our projects</h3>
        <a href="#">View More <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="hover_part">
            <h3>Workhub office Webflow Webflow Design</h3>
            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
            <a href="#">View project <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <img src={project1} alt="project 1.png"/>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-12">
              <div className="one">
            <div className="hover_part">
              <h3>Unisaas Website 
                Design</h3>
              <a href="#">View portfolio <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <img src={project2} alt="project 2.png"/>
          </div>
            </div>
            <div className="col-lg-12">
              <div className="one">
            <div className="hover_part">
              <h3>Unisaas Website 
                Design</h3>
              <a href="#">View portfolio <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <img src={project3} alt="project 3.png"/>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Project_part