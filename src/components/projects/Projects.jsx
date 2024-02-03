import React from "react";
import "./projects.css";
import IMG1 from "../../assests/sociobuzz.png";
import IMG2 from "../../assests/imaginai.png";
import IMG3 from "../../assests/deja-brew.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <h5> My Recent Work</h5>
      <h2>My Projects</h2>

      <div className="projects__container container">
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG1} alt="sociobuzz home page" />
          </div>
          <h3>SocioBuzz</h3>
          <small>
            This is a responsive social media website with theme customization.
            It was made to practice HTML, CSS & JavaScript. It has an
            interactive and visually appealing UI.
          </small>
          <a href="https://github.com/ananya-gta/sociobuzz" className="btn">
            GitHub
          </a>
          <a
            href="https://sociobuzz.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        {/* END OF PROJECT-SOCIOBUZZ  */}

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG2} alt="ImaginAI home page" />
          </div>
          <h3>ImaginAI</h3>
          <small>
            This is a responsive social media website with theme customization.
            It was made to practice HTML, CSS & JavaScript. It has an
            interactive and visually appealing UI.
          </small>
          <a href="https://github.com/ananya-gta/imaginai" className="btn">
            GitHub
          </a>
          <a
            href="https://imaginai.ananya-gta.repl.co/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        {/* END OF PROJECT-ImaginAI  */}

        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG3} alt="Deja brew home page" />
          </div>
          <h3>Deja Brew</h3>
          <small>
            This is a responsive social media website with theme customization.
            It was made to practice HTML, CSS & JavaScript. It has an
            interactive and visually appealing UI.
          </small>
          <a href="https://github.com/ananya-gta/cafe-website" className="btn">
            GitHub
          </a>
          <a
            href="https://github.com/ananya-gta/cafe-website/blob/main/README.md"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>
        </article>
        {/* END OF PROJECT-Deja-Brew  */}
      </div>
    </section>
  );
};

export default Projects;
