import React from 'react'
import './about.css'
import ME from '../../assests/aboutme.png'

export const About = () => {
  return (
   <section id="about">
    <h5>Get to Know</h5>
    <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src="{ME}" alt="About me Image" />
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <h5>Experience</h5>
          <small>10 months of work experience</small>
        </article>
      </div>
    </div>
   </div>
   </section>
  )
}

export default About