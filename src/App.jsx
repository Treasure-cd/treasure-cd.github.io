import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Tools from './sections/Tools'
import ProjectsSection from './sections/Projects';
import ProjectPage from './sections/ProjectPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './sections/Contact';
import useHashScroll from "./utils/useHashScroll";
import { DataHome, DataProjectPage } from "./pages/DataSite";

function Home() {
  useHashScroll();

  return (
    <>
      <Hero switchLink={{ label: "data", to: "/data" }} />
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
        <Route path="/data" element={<DataHome />} />
        <Route path="/data/projects/:id" element={<DataProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
