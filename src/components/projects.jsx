// src/components/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";

const projects = [
    {
    id: 0,
    title: "Cafe Regina - Responsive Website from Figma Design",
    description: "Pixel-perfect landing page converted from a Figma mockup.",
    image: "./CafeRegina1.png", 
    link: "https://responsive-website-from-figma-desig.vercel.app", 
  },

  {
    id: 1,
    title: "ACA Tetris",
    description: "Classic Tetris game built with JavaScript and React.",
    image: "./tetris.png",
    link: "https://tatev-hovhannisyan.github.io/aca_tetris/",
  },
  {
    id: 2,
    title: "Rotating Shape",
    description: "Interactive shape rotation demo using React.",
    image: "./rotating-shape.png",
    link: "https://tatev-hovhannisyan.github.io/Rotating-Shape/",
  },
  {
    id: 3,
    title: "Budget Tracker",
    description: "Web app to track personal expenses and budget.",
    image: "./2.png",
    link: "https://tatev-hovhannisyan.github.io/Budget-Tracker/",
  },
  {
    id: 4,
    title: "ToDo List App",
    description: "React project to manage tasks with add/edit/delete features.",
    image: "./todo-list.png",
    link: "https://tatev-hovhannisyan.github.io/react-project-ToDoList/",
  },
  {
    id: 5,
    title: "Game1",
    description: "Fun mini game built with JavaScript.",
    image: "./Number Guessing.png",
    link: "https://tatev-hovhannisyan.github.io/Game1/",
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
