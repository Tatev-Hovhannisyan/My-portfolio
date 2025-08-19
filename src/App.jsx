import { useState } from "react";
import About from "./components/About";
import Projects from "./components/projects.jsx";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="app">
      {/* Header */}
      <Header setActiveSection={setActiveSection} />

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
