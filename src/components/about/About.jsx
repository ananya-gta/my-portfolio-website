import React from 'react'
import './about.css'
import ME from '../../assests/aboutme.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export const About = () => {
  return (
   <section id="about">
    <h5>Get to Know</h5>
    <h2>About Me</h2>

   <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About me Image" />
      </div>
    </div>

    <div className="about__content">
      <div className="about__cards">

        <article className="about__card">
          <FaAward className='about__icon' />
          <h5>Experience</h5>
          <small>10 months of work experience</small>
        </article>

        <article className="about__card">
          <FiUsers className='about__icon' />
          <h5>Clients</h5>
          <small>200+ Worldwide</small>
        </article>

        <article className="about__card">
          <VscFolderLibrary className='about__icon' />
          <h5>Projects</h5>
          <small>10+ Completed Projects</small>
        </article>

      </div>

      <p>
        Hi! I am a web developer and designer. My name is Ananya Gupta. 
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
   </div>
   </section>
  )
}

export default About