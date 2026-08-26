import React from "react";
import {
  SiReact, SiVuedotjs, SiJavascript, SiTypescript, SiHtml5,
  SiCss, SiNextdotjs, SiNodedotjs, SiDocker, SiThreedotjs,
  SiExpress, SiPython, SiTailwindcss
} from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { TbBrandMongodb } from "react-icons/tb";

// Grouping the stack adds immediate professional polish
const STACK_CATEGORIES = [
  {
    title: "Languages & Core",
    items: [
      { label: "JavaScript", Icon: SiJavascript },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Python", Icon: SiPython },
      { label: "HTML5", Icon: SiHtml5 },
      { label: "CSS3", Icon: SiCss },
    ]
  },
  {
    title: "Frontend & Mobile",
    items: [
      { label: "React", Icon: SiReact },
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "Vue", Icon: SiVuedotjs },
      { label: "React Native", Icon: SiReact },
      { label: "Tailwind CSS", Icon: SiTailwindcss },
      { label: "Three.js", Icon: SiThreedotjs },
    ]
  },
  {
    title: "Backend & Infrastructure",
    items: [
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "Express", Icon: SiExpress },
      { label: "SQL", Icon: CiDatabase },
      { label: "Docker", Icon: SiDocker },
      { label: "MongoDB", Icon: TbBrandMongodb },
    ]
  }
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="w-full bg-background text-ink-muted px-6 sm:px-10 py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-extrabold text-ink text-[clamp(1.75rem,4vw,2.75rem)]">
            My Stack
          </h2>
          <p className="text-[clamp(1rem,1.5vw,1.15rem)] max-w-2xl">
            The tools, frameworks, and languages I use to build scalable web and mobile applications.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {STACK_CATEGORIES.map((category) => (
            <div key={category.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink/60">
                {category.title}
              </h3>
              
              {/* The "Brick" Layout using flex-wrap */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {category.items.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-ink/10 bg-ink/5 dark:bg-white/5 hover:border-ink/30 hover:bg-ink/10 transition-colors cursor-default"
                  >
                    <Icon className="text-ink" size={18} />
                    <span className="font-medium text-ink text-sm">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}