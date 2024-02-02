import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiDjango } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <FaHtml5 />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="skills_details">
              <IoLogoCss3 />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills_details">
              <SiJavascript />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills_details">
              <FaBootstrap />
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills_details">
              <FaReact />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <FaPython />
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>

            <article className="skills_details">
            <FaNodeJs />
              <h4>Node JS</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="skills_details">
            <FaPhp />
              <h4>PHP</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="skills_details">
            <GrMysql />
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
            </article>

            <article className="skills_details">
            <SiMongodb />
              <h4>MongoDB</h4>
              <small className="text-light">Beginner</small>
            </article>

            <article className="skills_details">
            <SiDjango />
              <h4>Django</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
        {/* END OF BACKEND */}

      </div>
    </section>
  );
};

export default Skills;
