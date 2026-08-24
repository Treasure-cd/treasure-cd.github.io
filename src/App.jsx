import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Tools from './sections/Tools'
import ProjectsSection from './sections/Projects';
import ProjectPage from './sections/ProjectPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './sections/Contact';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Tools />
      <ProjectsSection />
      <Contact />
    </>
  );
}
 
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
