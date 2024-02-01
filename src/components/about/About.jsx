import React from "react";
import "./about.css";
import ME from "../../assests/aboutme.png";
import { FaAward } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

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
            <a href="#experience">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
              </article>
            </a>

            <a href="#services">
              <article className="about__card">
                <FaPenNib className="about__icon" />
                <h5>Blogs</h5>
              </article>
            </a>

            <a href="#projects">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
              </article>
            </a>
          </div>

          <p id="about-me">
            Hello! I'm Ananya, based in Gurugram, India. With a love for clean
            code and captivating design, I am learning how to craft beautiful,
            aesthetic and functional user interfaces. I also enjoy sharing my
            knowledge and insights through writing engaging content on
            technology and development. When I'm not busy coding, you can find
            me exploring new cafes, capturing moments through my camera lens, or
            lost in the pages of a good book.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
