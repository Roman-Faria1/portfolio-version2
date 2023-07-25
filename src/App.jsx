import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    overflow-x: hidden;
    width: 100%;
  }
`;

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const handleClick = (link) => {
    setActiveLink(link);
  };

  // Create a ref for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root element
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility is considered as "visible"
    };

    // Callback function when a section becomes visible
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const sectionId = target.getAttribute("id");
          setActiveLink(sectionId);
        }
      });
    };

    // Create an intersection observer instance
    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe the section elements
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup the observer
    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <Navbar activeLink={activeLink} handleClick={handleClick} />
      <section id="home" ref={homeRef}>
        <Hero handleClick={handleClick} />
      </section>
      <section id="about" ref={aboutRef}>
        <Who handleClick={handleClick} />
      </section>
      <section id="projects" ref={projectsRef}>
        <Works handleClick={handleClick} />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </Container>
  );
}

export default App;
