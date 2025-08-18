import { useState } from "react";
import About from "./components/About";
import Projects from "./components/projects.jsx";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
         <div className="logo">
        <img src="./logo-TH.png" alt="Tatev Hovhannisyan Logo" />
      </div>
        <h1>Tatev Hovhannisyan</h1>

        {/* Main menu */}
        <nav className="navbar">
          <button onClick={() => setActiveSection("home")}>Home</button>
          <button onClick={() => setActiveSection("about")}>About</button>
          <button onClick={() => setActiveSection("projects")}>Projects</button>
          <button onClick={() => setActiveSection("contact")}>Contact</button>
        </nav>
      </header>

      {/* Dynamic content */}
      <main className="content">
       {activeSection === "home" && (
  <section className="homePage">
    <div className="homeText">
      <h1>Welcome to my portfolio!</h1>
  
    </div>
  </section>
)}
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;
