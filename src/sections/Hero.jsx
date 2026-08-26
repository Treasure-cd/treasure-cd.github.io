import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionBackdrop from "../components/SectionBackdrop";
import { Squiggle, Star, Loop } from "../components/Doodles"
import SkyBackdrop from "../components/SkyBackdrop";

const colorWord = [
  { letter: "T", color: "#7DD3FC" },
  { letter: "r", color: "#38BDF8" },
  { letter: "e", color: "#0EA5E9" },
  { letter: "a", color: "#0284C7" },
  { letter: "s", color: "#2563EB" },
  { letter: "u", color: "#4F46E5" },
  { letter: "r", color: "#4338CA" },
  { letter: "e", color: "#312E81" },
];

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const handleNavClick = (key) => {
  setClickedLink(key);
  setTimeout(() => setClickedLink(null), 200);
};

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background text-ink-muted">
      {/* "nav" that doesn't look like a navbar — no bar, no background,
          no border, just words. Sits at the top and scrolls away with
          the page for now (easiest default) — say the word if you'd
          rather it stay pinned. */}
          <SectionBackdrop />
       <SkyBackdrop />
      <header className="relative z-10 w-full px-6 sm:px-10 pt-8 sm:pt-10">
        <nav
          aria-label="Main"
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-4 sm:gap-y-0 text-xs sm:text-sm tracking-[0.14em]"
        >
        <Link
          to="/"
          onClick={() => handleNavClick("name")}
          className={`font-script text-2xl sm:text-3xl text-ink hover:opacity-60 transition-all duration-150 self-center sm:self-auto hover:animate-wiggle ${
            clickedLink === "name" ? "scale-90" : "scale-100"
          }`}
        >
          Treasure Ani-Joseph
        </Link>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            {["about", "project", "contacts"].map((link, i) => (
              <React.Fragment key={link}>
                {i !== 0 && (
                  <span aria-hidden="true" className="text-accent">
                    ·
                  </span>
                )}
              <Link
                to={`/#${link}`}
                onClick={() => handleNavClick(link)}
                className={`uppercase font-semibold text-ink hover:text-[#00215f] hover:scale-105 transition-all duration-150 ${
                  clickedLink === link ? "scale-90" : "scale-100"
                }`}
              >
                {link}
              </Link>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-0 text-center">
        <h1 className="opacity-0 animate-fade-in font-extrabold leading-tight text-ink text-[clamp(2.75rem,8vw,6.5rem)]">
          Hi, I'm{" "}
          <span
            className="text-ink cursor-default"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {colorWord.map((single, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-300 ease-out"
                style={{
                  color: isHovered ? single.color : "inherit",
                  transform: isHovered ? "translateY(-12px)" : "translateY(0)",
                  transitionDelay: `${i * 40}ms`,
                }}
              >
                {single.letter}
              </span>
            ))}
          </span>
        </h1>
        <p
          className="opacity-0 animate-fade-in mt-2 sm:mt-3 max-w-xs sm:max-w-lg text-ink-muted text-[clamp(0.95rem,2vw,1.15rem)] font-regular"
          style={{ animationDelay: "700ms" }}
        >
          Frontend-focused fullstack developer building clean, responsive
          interfaces and well-architected web and mobile applications.
        </p>
      </main>
    </div>
  );
}