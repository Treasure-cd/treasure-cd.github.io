import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { id, name, tagline, tags, links, type, image } = project;
  const isMobileOnly = type === "mobile";
  const liveLink = links?.[0];

  return (
    <div className="flex flex-col rounded-3xl border border-ink/15 overflow-hidden bg-background">
      {/* picture — same landscape frame for every card so rows line up;
          a mobile-only project's screenshot just sits centered/contained
          inside it instead of filling edge to edge */}
      <div className="w-full aspect-[16/10] bg-ink/5 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={`${name} preview`}
            className={
              isMobileOnly
                ? "h-[85%] w-auto object-contain drop-shadow-2xl rounded-2xl" 
                : "h-full w-full object-cover"
            }
          />
        ) : (
          <span className="text-xs uppercase tracking-[0.14em] text-ink-muted/60">
            image coming soon
          </span>
        )}
      </div>

      <div className="flex flex-col gap-4 p-6 sm:p-7">
        <h3 className="font-extrabold text-ink text-xl sm:text-2xl">
          {name}
        </h3>

        <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
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

        <div className="flex flex-wrap gap-3 mt-1">
          {liveLink && (
            <a
              href={liveLink.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-ink border border-ink/20 rounded-full px-5 py-2 hover:bg-ink/5 transition-colors"
            >
              Live demo
            </a>
          )}
          <Link
            to={`/projects/${id}`}
            className="text-sm font-semibold text-background bg-ink rounded-full px-5 py-2 hover:opacity-85 transition-opacity"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
}