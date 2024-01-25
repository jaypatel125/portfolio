
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import './index'; // Import your CSS file for transitions

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <TransitionGroup>
                <CSSTransition
                  key="home"
                  classNames="fade"
                  timeout={300}
                >
                  <Home />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/about"
            element={
              <TransitionGroup>
                <CSSTransition
                  key="about"
                  classNames="fade"
                  timeout={300}
                >
                  <About />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/projects"
            element={
              <TransitionGroup>
                <CSSTransition
                  key="projects"
                  classNames="fade"
                  timeout={300}
                >
                  <Project />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/resume"
            element={
              <TransitionGroup>
                <CSSTransition
                  key="resume"
                  classNames="fade"
                  timeout={300}
                >
                  <Resume />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path="/contact"
            element={
              <TransitionGroup>
                <CSSTransition
                  key="contact"
                  classNames="fade"
                  timeout={300}
                >
                  <Contact />
                </CSSTransition>
              </TransitionGroup>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
