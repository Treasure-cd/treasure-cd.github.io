import React from "react";
import { lazy, Suspense } from "react";
import AnimeTip from "../components/AnimeTip"
import Reveal from "../components/Reveal";

const AboutScene = lazy(() => import("../components/AboutScene"));
const DEFAULT_PARAGRAPHS = [
  <>
    I'm Treasure Ani-Joseph, and I'm a third-year Computer Science student at the University of
    Uyo, Nigeria, and a fullstack developer.
    I love building and learning, and the unique combination of creativity, logic, technology
    and never running out of new things to discover, drives my excitement
    and passion for software development.
  </>,
  <>
    My engineering philosophy is to adhere to set standards as best as I can, and
    to think for the benefit of the end user. I love building things that solve real
    problems. When I'm not on my computer, I'm usually reading about art history or
    watching an <AnimeTip><b>anime</b></AnimeTip>.
  </>,
];

export default function About({
  heading = "Who am I?",
  paragraphs = DEFAULT_PARAGRAPHS,
  Scene = AboutScene,
}) {

  return (
    <section
      id="about"
      className="w-full bg-background text-ink-muted px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-8">
          <Reveal>
            <h2 className="font-extrabold text-ink text-[clamp(1.75rem,4vw,2.75rem)]">
              {heading}
            </h2>
          </Reveal>

          {paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={(i + 1) * 100}>
              <p className="text-[clamp(1rem,2vw,1.15rem)] leading-relaxed">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        {/* icon cluster — centered, with room to breathe so hover-scaled
            icons at the edge never clip against the column bounds */}
        <Reveal delay={200} className="hidden items-center justify-center overflow-visible p-6 sm:p-8 lg:flex">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
