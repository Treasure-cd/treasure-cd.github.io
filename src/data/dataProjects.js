import { FaGithub } from "react-icons/fa6";

export const DATA_PROJECTS = [
  {
    id: "helios",
    name: "HELIOS",
    featured: true,
    type: "analysis",
    kind: "Simulation study",
    tagline: "A simulation of how smarter battery rules cut cost and generator use on an unreliable grid.",
    image: "/screenshots/helios_cover.png",
    tags: ["Python", "pandas", "scikit-learn", "Simulation", "NASA POWER"],
    details: [
      "HELIOS asks whether a smarter battery-management rule can cut cost and generator use for a household on an unreliable grid in Uyo. It simulates a full year hour by hour across grid, solar, battery and generator, and compares several control strategies on identical inputs.",
      "Solar data is real (NASA POWER, shifted from UTC to local time after I caught the offset by checking the solar peak hour). Demand and outages are synthetic, so I ran four outage scenarios and 30 random outage years per configuration, and tested strategies on outage years they were never tuned on.",
      "On a small system (3 kW PV, 2.5 kWh battery) under frequent outages, holding a 50% battery reserve only between 15:00 and 23:00 cut cost by about 10% and generator hours by 25-33%. A learned outage predictor didn't beat that simple rule, and with an oversized system or mild outages, smarter control adds almost nothing.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Treasure-cd/HELIOS", icon: FaGithub }],
  },
  {
    id: "concord",
    name: "Project Concord",
    featured: true,
    type: "analysis",
    darkFrame: true,
    kind: "Team project",
    tagline: "One governed database for five divisions, proven by four stakeholder scenarios solved in SQL.",
    image: "/screenshots/concord_executive.jpg",
    tags: ["PostgreSQL", "Supabase", "Row Level Security", "BigQuery", "Power BI"],
    details: [
      "Project Concord unifies five disconnected divisions of a fictional holding company into one governed PostgreSQL database on Supabase, with an analytics layer in BigQuery and Power BI dashboards. Success was defined as four concrete stakeholder scenarios answered with working SQL.",
      "I was the database engineer and team lead: the hub-and-spoke schema, Row Level Security tested per division, consent flags aligned with the Nigerian Data Protection Act, and the views behind each scenario, from warning a store about an upstream harvest shortfall to a same-day consolidated revenue view.",
      "All data is synthetic, and the report names its gaps openly: one harvest per farm, and no freight revenue in the consolidated view.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Treasure-cd/veridian", icon: FaGithub }],
  },
];
