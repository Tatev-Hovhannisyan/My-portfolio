import { useState } from "react";
import styles from "./Header.module.css";

export default function Header({ setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./logo.png" alt="Tatev Hovhannisyan Logo" />
      </div>

<h1>Tatev Hovhannisyan</h1>

      <button 
        className={styles.burger} 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <button onClick={() => { setActiveSection("home"); setIsOpen(false); }}>Home</button>
        <button onClick={() => { setActiveSection("projects"); setIsOpen(false); }}>Projects</button>
        <button onClick={() => { setActiveSection("about"); setIsOpen(false); }}>About</button>
        <button onClick={() => { setActiveSection("contact"); setIsOpen(false); }}>Contact</button>
      </nav>
    </header>
  );
}
