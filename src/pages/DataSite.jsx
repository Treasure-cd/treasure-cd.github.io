import { lazy, useEffect } from "react";
import { TbChartBar, TbChartDots } from "react-icons/tb";
import {
  SiPython, SiPandas, SiScikitlearn, SiPostgresql, SiSupabase,
  SiGooglebigquery, SiJupyter,
} from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Tools from "../sections/Tools";
import ProjectsSection from "../sections/Projects";
import ProjectPage from "../sections/ProjectPage";
import Contact from "../sections/Contact";
import useHashScroll from "../utils/useHashScroll";
import { DATA_PROJECTS } from "../data/dataProjects";

const DataScene = lazy(() => import("../components/DataScene"));

const COLOR_WORD = [
  ["T", "#6EE7B7"], ["r", "#34D399"], ["e", "#10B981"], ["a", "#059669"],
  ["s", "#047857"], ["u", "#065F46"], ["r", "#064E3B"], ["e", "#022C22"],
].map(([letter, color]) => ({ letter, color }));

const ABOUT_PARAGRAPHS = [
  "I'm Treasure Ani-Joseph, a third-year Computer Science student at the University of Uyo, and I increasingly work with data. I like the part of analysis that comes before the charts: asking a sharp question, checking the data can be trusted, and being honest about what the results do and don't show.",
  "My work so far is a simulation study of household energy on an unreliable grid in Uyo, and a multi-division database platform with dashboards. I'm drawn to problems close to home, and I report negative results as readily as positive ones.",
];

const STACK = [
  {
    title: "Analysis & Data",
    items: [
      { label: "Python", Icon: SiPython },
      { label: "SQL", Icon: CiDatabase },
      { label: "pandas", Icon: SiPandas },
      { label: "scikit-learn", Icon: SiScikitlearn },
      { label: "Matplotlib", Icon: TbChartDots },
      { label: "PostgreSQL", Icon: SiPostgresql },
      { label: "Supabase", Icon: SiSupabase },
      { label: "BigQuery", Icon: SiGooglebigquery },
      { label: "Power BI", Icon: TbChartBar },
      { label: "Jupyter", Icon: SiJupyter },
    ],
  },
];

const STACK_DESCRIPTION =
  "The languages and tools I use to simulate, query, analyse and present data.";

// Themed wrapper that also sets the tab title for as long as it is mounted.
function DataTheme({ children }) {
  useEffect(() => {
    const previous = document.title;
    document.title = "Treasure Ani-Joseph · Data";
    return () => {
      document.title = previous;
    };
  }, []);

  return <div data-theme="data">{children}</div>;
}

export function DataHome() {
  useHashScroll();

  return (
    <DataTheme>
      <Hero
        role="Data Analyst"
        tagline="Data analyst building simulations, SQL databases and dashboards, and explaining what the numbers actually show."
        colorWord={COLOR_WORD}
        switchLink={{ label: "dev", to: "/" }}
        homePath="/data"
      />
      <About heading="Who am I?" paragraphs={ABOUT_PARAGRAPHS} Scene={DataScene} />
      <Tools heading="Stack" description={STACK_DESCRIPTION} categories={STACK} />
      <ProjectsSection projects={DATA_PROJECTS} detailPath="/data/projects" />
      <Contact resumeHref="/Treasure_Ani_Joseph_Resume_data.pdf" />
    </DataTheme>
  );
}

export function DataProjectPage() {
  return (
    <DataTheme>
      <ProjectPage projects={DATA_PROJECTS} homePath="/data" />
    </DataTheme>
  );
}
