import { Smartphone, Globe, ExternalLink } from "lucide-react";

export const PROJECTS = [
  {
    id: "kablux",
    name: "Kablux",
    featured: true,
    type: "mobile",
    kind: "Contracted work",
    tagline: "Real-time ride-sharing and courier tracking, built under contract.",
    image: "/treasure/screenshots/kablux-1.jpg",
    tags: ["React Native", "WebSockets", "Real-time Data", "Geolocation"],
    details: [
      "I was brought on as a contracted mobile engineer for a ride-sharing and courier startup ahead of their launch. This wasn't a personal project I own the repo for — it's real client work, built to ship.",
      "My focus was the location and messaging layer: persistent multi-point location tracking for riders, drivers, and couriers, plus bi-directional real-time data streams over WebSockets. The hard part was keeping state in sync during fast-moving updates — a rider's position, a driver's route, an order status — without the client and server drifting apart mid-trip.",
      "Kablux has since launched and is live on the App Store and Google Play, actively used by real riders and couriers.",
    ],
    links: [
      { label: "App Store", url: "#", icon: Smartphone },
      { label: "Google Play", url: "#", icon: Smartphone },
    ],
  },
  {
    id: "lasulearn",
    name: "LasuLearn",
    featured: false,
    type: "web-and-mobile",
    kind: "Product",
    tagline: "A production e-learning platform — mobile app and companion website.",
    image: "/treasure/screenshots/lasulearn-3.png", // TODO: web app screenshot for the card
    tags: ["React Native", "Expo", "WebSockets", "Next.js", "Auth"],
    details: [
      'LasuLearn is a production e-learning platform. I built the companion mobile app in Expo/React Native, and also worked on the companion Next.js website.',
      'A lot of the work was on real-time chat: getting WebSocket messaging to actually be reliable meant moving off a state-based "last message" pattern and onto a callback subscription model instead, so messages didn\'t get dropped or duplicated under normal app usage. I also handled the harder edges of mobile UX — keyboard behavior around the chat input, OTP auto-submit and paste handling for sign-in, Google Sign-In, and in-app file sharing.',
      "Because it's a shipped product with real students using it, I also worked through production concerns like reducing APK size and getting the app through a proper beta checklist before wider release.",
    ],
    links: [
      { label: "View website", url: "https://lasu-learn.vercel.app", icon: Globe },
      { label: "View app", url: "#", icon: Smartphone },
    ],
  },
  {
    id: "chaincall",
    name: "ChainCall",
    featured: false,
    type: "web",
    kind: "Product",
    tagline: "Solana developer tooling, entirely in the browser.",
    image: "/treasure/screenshots/chaincall.png",
    tags: ["Solana", "Web3", "TypeScript", "Dev Tooling"],
    details: [
      "ChainCall is Solana developer tooling for fetching, parsing, and exploring on-chain program IDLs directly from a browser environment — no separate backend service required.",
      "Beyond just reading on-chain data, it can simulate instruction execution and build transactions client-side, which meant turning the browser client into a genuinely heavy engineering runtime rather than a thin UI over an API. Serialization and IDL parsing were the trickiest parts to get right.",
      "The goal was to make exploring and testing Solana programs faster than spinning up a local script every time you need to check something.",
    ],
    links: [{ label: "View project", url: "https://chain-call.vercel.app", icon: ExternalLink }],
  },
  {
    id: "regexium",
    name: "Regexium",
    featured: false,
    type: "web",
    kind: "Product",
    tagline: "A real-time regex compiler and interactive tokenizer.",
    image: "/treasure/screenshots/regexium.png", // TODO: web screenshot
    tags: ["Vue 3", "TypeScript", "Tokenization", "Compiler Logic"],
    details: [
      "Regexium is a real-time regular expression compiler, syntax evaluator, and tokenizer. Type an expression and it breaks it down live into an interactive, structured explanation of what each part is actually doing.",
      "It strips expressions down on the fly without leaning on external parsing libraries or abstractions — the tokenization and breakdown logic is handled directly, which was as much a way to properly learn how regex engines and simple compilers work as it was to build a useful tool.",
      "Built in Vue 3 and TypeScript, with a focus on the UI state staying responsive as you type rather than debouncing everything into a laggy preview.",
    ],
    links: [{ label: "View project", url: "https://regexium.onrender.com", icon: ExternalLink }],
  },
  {
    id: "glowcycle",
    name: "GlowCycle",
    featured: false,
    type: "web",
    kind: "Hackathon project",
    tagline: "An AI skincare and style assistant that adapts to your skin, cycle, and climate.",
    image: "/treasure/screenshots/glowcycle.png", // TODO: web screenshot
    tags: ["React", "Vite", "Firebase", "YouCam API", "AI"],
    details: [
      "GlowCycle was built for the YouCam API Skin AI & Apparel VTO Hackathon, on a 15-day build timeline. The idea: skincare and style recommendations shouldn't be static — they should adapt to your actual skin, where you are in your cycle, and the climate you're in.",
      "It's built on YouCam's Skin AI for the actual skin analysis, layered with cycle-aware and climate-aware logic to shift recommendations day to day, plus an AM/PM routine builder and product suggestions.",
      "Beyond the core analysis, it also covers color analysis and style guidance, with a journal for tracking progress over time. Frontend is React + Vite with Tailwind, backed by Firebase for auth and data.",
    ],
    links: [{ label: "View project", url: "#", icon: ExternalLink }],
  },
];