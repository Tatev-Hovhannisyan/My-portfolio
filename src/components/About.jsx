import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          I am a passionate front-end developer with a strong focus on creating
          <br />
          clean, responsive, and user-friendly web applications. I enjoy working
          <br />
          with modern technologies like <strong>React</strong> and constantly
          improving my skills.
          <br />
          My portfolio includes interactive games and useful tools such as
          budget
          <br />
          trackers and task managers, which show both my creativity and
          <br />
          problem-solving abilities.
        </p>
      </div>
    </section>
  );
}

export default About;
