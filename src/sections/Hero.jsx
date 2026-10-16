import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionBackdrop from "../components/SectionBackdrop";
import { Squiggle, Star, Loop } from "../components/Doodles"
import SkyBackdrop from "../components/SkyBackdrop";
import Reveal from "../components/Reveal";

const DEFAULT_COLOR_WORD = [
  { letter: "T", color: "#7DD3FC" },
  { letter: "r", color: "#38BDF8" },
  { letter: "e", color: "#0EA5E9" },
  { letter: "a", color: "#0284C7" },
  { letter: "s", color: "#2563EB" },
  { letter: "u", color: "#4F46E5" },
  { letter: "r", color: "#4338CA" },
  { letter: "e", color: "#312E81" },
];

const DEFAULT_TAGLINE =
  "Frontend-focused fullstack developer building clean, responsive interfaces and well-architected web and mobile applications.";

export default function Hero({
  role,
  tagline = DEFAULT_TAGLINE,
  colorWord = DEFAULT_COLOR_WORD,
  homePath = "/",
  switchLink,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const handleNavClick = (key) => {
  setClickedLink(key);
  setTimeout(() => setClickedLink(null), 200);
};

  const navLinks = ["about", "projects", "contacts"].map((label) => ({
    label,
    to: `${homePath}#${label}`,
  }));
  if (switchLink) navLinks.push(switchLink);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background text-ink-muted">

          <SectionBackdrop />
       <SkyBackdrop />
      <header className="relative z-10 w-full px-6 sm:px-10 pt-8 sm:pt-10">
        <nav
          aria-label="Main"
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-2 sm:gap-y-0 text-xs sm:text-sm tracking-[0.14em]"
        >
        <Reveal className="self-center sm:self-auto">
          <Link
            to={homePath}
            onClick={() => handleNavClick("name")}
            className={`font-script text-2xl sm:text-3xl text-ink hover:opacity-60 transition-all duration-150 hover:animate-wiggle ${
              clickedLink === "name" ? "scale-90" : "scale-100"
            }`}
          >
            Treasure Ani-Joseph
          </Link>
        </Reveal>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            {navLinks.map((link, i) => (
              <React.Fragment key={link.label}>
                {i !== 0 && (
                  <span aria-hidden="true" className="hidden sm:inline text-accent">
                    ·
                  </span>
                )}
              <Link
                to={link.to}
                onClick={() => handleNavClick(link.label)}
                className={`uppercase font-semibold text-ink hover:text-accent hover:scale-105 transition-all duration-150 ${
                  clickedLink === link.label ? "scale-90" : "scale-100"
                }`}
              >
                {link.label}
              </Link>
              </React.Fragment>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-0 text-center">
        {role && (
          <Reveal className="mb-3">
            <span className="text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold text-accent">
              {role}
            </span>
          </Reveal>
        )}
        <Reveal className="inline-block whitespace-nowrap">
        <h1 className="font-extrabold leading-tight text-ink text-[clamp(2.75rem,8vw,6.5rem)]">
          Hi, I'm{" "}

            <span
              className="text-ink cursor-default inline-block"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsHovered((h) => !h)}
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
          </Reveal>
        <Reveal delay={150} className="mt-2 sm:mt-3">
          <p className="max-w-xs sm:max-w-lg text-ink-muted text-[clamp(0.95rem,2vw,1.15rem)] font-regular">
            {tagline}
          </p>
        </Reveal>
      </main>
    </div>
  );
}
