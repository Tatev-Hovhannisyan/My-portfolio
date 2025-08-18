import React from "react";
import styles from "./Contacts.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactContent}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:tatevhovhannisyan494@gmail.com">tatevhovhannisyan494@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/tatev-hovhannisyan" target="_blank" rel="noopener noreferrer">
          github.com/tatev-hovhannisyan
        </a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/yourprofile
        </a></p>
      </div>
    </section>
  );
}

export default Contact;
