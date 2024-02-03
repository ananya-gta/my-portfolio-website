import React from 'react'
import './footer.css'
import {FaLinkedin, FaGithub, FaTwitter, FaDiscord} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Ananya Gupta</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/ananya-gupta-1902/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/ananya-gta" target='_blank'><FaGithub /></a>
        <a href="https://twitter.com/ananya_192" target='_blank'><FaTwitter/></a>
        <a href="https://discord.com/users/864127704231968789" target='_blank'><FaDiscord/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;  2024 Ananya Gupta</small>
      </div>
    </footer>
  )
}

export default Footer