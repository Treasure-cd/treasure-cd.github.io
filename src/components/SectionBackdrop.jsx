import React from "react";

export default function SectionBackdrop({ children }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
<div
  className="absolute inset-0 text-accent opacity-[0.15] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]"
/>

      {children}
    </div>
  );
}
