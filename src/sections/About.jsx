import React from "react";
import IconSphere from "../components/Iconsphere";
import BentoProfile from "../components/BentoProfile";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-background text-ink-muted px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-8">
          <h2 className="font-extrabold text-ink text-[clamp(1.75rem,4vw,2.75rem)]">
            Who am I?
          </h2>

          <p className="text-[clamp(1rem,2vw,1.15rem)] leading-relaxed">
            I'm Treasure Ani-Joseph, and I'm a third-year Computer Science student at the University of
            Uyo, Nigeria, and a frontend-focused fullstack developer.
            I love building and learning, and the unique combination of creativity, logic, technology
            and never running out of new things to discover, drives my excitement
            and passion for software development.
          </p>

          <p className="text-[clamp(1rem,2vw,1.15rem)] leading-relaxed">
            My engineering philosophy is to adhere to set standards as best as I can, and
            to think for the benefit of the end user. I love building things that solve real
            problems. When I'm not on my computer, I'm usually reading about art history or
            watching an anime.
          </p>
        </div>

        {/* icon cluster — centered, with room to breathe so hover-scaled
            icons at the edge never clip against the column bounds */}
        <div className="flex items-center justify-center overflow-visible p-6 sm:p-8">
          <BentoProfile />
        </div>
      </div>
    </section>
  );
}