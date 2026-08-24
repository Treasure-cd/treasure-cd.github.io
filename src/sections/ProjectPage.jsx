import React from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../data/projects.js";

export default function ProjectPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen w-full bg-background text-ink-muted flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-ink font-semibold">Couldn't find that project.</p>
        <Link to="/" className="text-sm text-accent font-semibold">
          ← Back home
        </Link>
      </div>
    );
  }

  const { name, kind, tagline, tags, links, details } = project;

  return (
    <div className="min-h-screen w-full bg-background text-ink-muted px-6 sm:px-10 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        <Link
          to="/#project"
          className="text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold text-accent w-fit"
        >
          ← Back to projects
        </Link>

        {/* screen recording of the project in action goes here */}
        <div className="w-full aspect-video rounded-2xl border border-ink/15 bg-ink/5 flex items-center justify-center">
          <span className="text-xs uppercase tracking-[0.14em] text-ink-muted/60">
            screen recording coming soon
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-xs sm:text-sm uppercase tracking-[0.14em] font-semibold text-accent">
            {kind}
          </span>

          <h1 className="font-extrabold text-ink text-[clamp(2rem,5vw,3.25rem)] leading-tight">
            {name}
          </h1>

          <p className="text-base sm:text-lg text-ink leading-relaxed">
            {tagline}
          </p>

          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className="text-xs font-medium text-ink border border-ink/15 rounded-full px-3 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-2">
            {details.map((paragraph, i) => (
              <p
                key={i}
                className="text-[clamp(0.95rem,2vw,1.1rem)] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            {links.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-ink border border-ink/20 rounded-full px-5 py-2 hover:bg-ink/5 transition-colors"
              >
                {Icon && <Icon size={16} />}
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}