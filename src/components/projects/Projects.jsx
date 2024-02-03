import React from "react";
import "./projects.css";
import IMG1 from "../../assests/sociobuzz.png";
import IMG2 from "../../assests/imaginai.png";
import IMG3 from "../../assests/deja-brew.jpg";

// array of projects
// now whenever you want to add a new project just add json in the data array
const data = [
  {
    id: 1,
    image: IMG1,
    title: "SocioBuzz",
    desc: "This is a responsive social media website with theme customization. It was made to practice HTML, CSS & JavaScript. It has an interactive and visually appealing UI. Know more about SocioBuzz on GitHub.",
    github: "https://github.com/ananya-gta/sociobuzz",
    deployed_url: "https://sociobuzz.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "ImaginAI",
    desc: "ImaginAI is a user-friendly image generator inspired by DALL·E. The simple UI of ImaginAI is built using Flask & HTML/CSS/Javascript. The project is hosted and developed on the Replit platform.",
    github: "https://github.com/ananya-gta/imaginai",
    deployed_url: "https://imaginai.ananya-gta.repl.co/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Deja Brew",
    desc: "This is a user-friendly front end of a cafe website. It was made to have hands-on experience in the Django Framework. Also leveraged the Bootstrap framework for designing and styling the website.",
    github: "https://github.com/ananya-gta/cafe-website",
    deployed_url:
      "https://github.com/ananya-gta/cafe-website/blob/main/README.md",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5> My Recent Work</h5>
      <h2>Projects</h2>

      <div className="projects__container container">
        {data.map(({ id, image, title, desc, github, deployed_url }) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <h5>{desc}</h5>
              <div className="projects__item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a
                  href={deployed_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
