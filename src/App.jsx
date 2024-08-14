import { Fragment, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import FloatingNavBar from "./Components/FloatingNavBar";
import Education from "./Components/Education/Education";

function App() {
  const [pageSelected, setPageSelected] = useState("home");
  const [showTransition, setShowTransition] = useState(false);

  const handlePageChange = (page) => {
    setShowTransition(true);
    setTimeout(() => {
      setPageSelected(page);
      setShowTransition(false);
    }, 1000); // Duration should match the animation duration
  };

  const footerNavItemClickHandler = (page) => {
    handlePageChange(page);
  };

  const floatingNavItemClickedHandler = (page) => {
    handlePageChange(page);
  };

  return (
    <Fragment>
      <div>
        <FloatingNavBar
          onFloatingNavItemClicked={floatingNavItemClickedHandler}
        />
      </div>
      <div className="main_bg_img content">
        {pageSelected === "home" && <Home />}
        {pageSelected === "about" && <About />}
        {pageSelected === "skills" && <Skills />}
        {pageSelected === "education" && <Education />}
        {pageSelected === "projects" && <Projects />}
        {pageSelected === "contact" && <Contact />}
      </div>
      <div className="footer_bg_img">
        <Footer onFooterNavItemClicked={footerNavItemClickHandler} />
      </div>
      {showTransition && <div className="transition-overlay"></div>}
    </Fragment>
  );
}

export default App;