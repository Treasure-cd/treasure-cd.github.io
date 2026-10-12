import { useState, useId } from "react";
import currentAnime from "../assets/anime.jpeg";

const WATCHING = {
  title: "Beck: Mongolian Chop Squad",
  image: currentAnime,
};

export default function AnimeTip({ children }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-describedby={id}
        aria-expanded={open}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
        className={`cursor-pointer transition-all duration-300 motion-reduce:transition-none ${
          open
            ? "text-ink [text-shadow:0_0_14px_var(--color-sky-mountain)]"
            : ""
        }`}
      >
        {children}
      </button>

      <span
        id={id}
        role="tooltip"
        className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 block w-44 -translate-x-1/2 rounded-2xl border border-ink/15 bg-background p-3 text-left shadow-xl transition-all duration-300 motion-reduce:transition-none ${
          open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <span className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-ink-muted">
          I'm watching...
        </span>
        <img
          src={WATCHING.image}
          alt={WATCHING.title}
          className="aspect-[3/4] w-full rounded-lg object-cover"
        />
        <span className="mt-2 block text-sm font-semibold leading-snug text-ink">
          {WATCHING.title}
        </span>
      </span>
    </span>
  );
}
