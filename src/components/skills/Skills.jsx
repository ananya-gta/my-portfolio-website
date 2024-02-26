import React from "react";
import "./skills.css";
import {
  FaHtml5,
  FaBootstrap,
  FaReact,
  FaPython,
  FaNodeJs,
  FaPhp,
  FaAws,
  FaGithub,
  FaAngular
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiMongodb, SiDjango, SiPycharm, SiPostman } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoNetlify } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="skills__container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills_details">
              <FaHtml5 className="skills_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <IoLogoCss3 className="skills_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <SiJavascript className="skills_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <FaBootstrap className="skills_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <FaReact className="skills_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <FaAngular className="skills_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills_details">
              <FaPython className="skills_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <FaNodeJs className="skills_details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="skills_details">
              <FaPhp className="skills_details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="skills_details">
              <GrMysql className="skills_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <SiMongodb className="skills_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="skills_details">
              <BiLogoSpringBoot className="skills_details-icon" />
              <div>
                <h4>Spring Boot</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}

        <div className="skills_tools_and_frameworks">
          <h3>Tools & Frameworks</h3>
          <div className="skills__content">
            <article className="skills_details">
              <SiDjango className="skills_details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="skills_details">
              <FaAws className="skills_details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="skills_details">
              <SiPycharm className="skills_details-icon" />
              <div>
                <h4>PyCharm</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <TbBrandVscode className="skills_details-icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="skills_details">
              <BiLogoNetlify className="skills_details-icon" />
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <FaGithub className="skills_details-icon" />
              <div>
                <h4>Git & GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="skills_details">
              <SiPostman className="skills_details-icon" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF TOOLS & FRAMEWORKS */}
      </div>
    </section>
  );
};

export default Skills;
