import React from "react";

export function Squiggle({ className = "" }) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <path d="M 344.284 352.373 C 400 316.467 407.429 316.467 407.429 316.467 C 407.429 316.467 397.524 391.993 397.524 391.993 C 397.524 391.993 470.574 346.182 470.574 346.182 C 470.574 346.182 470.574 346.182 470.574 346.182 C 470.574 346.182 403.714 344.944 403.714 344.944 C 403.714 344.944 403.714 344.944 403.714 344.944 C 403.714 344.944 403.714 344.944 403.714 344.944 C 403.714 344.944 406.191 311.515 406.191 311.515 C 406.191 311.515 406.191 311.515 406.191 311.515 C 406.191 311.515 468.097 341.23 468.097 341.23 C 468.097 341.23 339.08 355.727 344.284 352.373 Z" data-shape-id="sc7f97a91-0535-4ee3-9fa3-9d809bea48cf" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
</svg>

  );
}

export function Star({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`pointer-events-auto text-accent/40 hover:text-accent transition-colors duration-300 animate-spin-slow cursor-default ${className}`}
      fill="none"
    >
      <path
        d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Loop({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`pointer-events-auto text-accent/40 hover:text-accent transition-colors duration-300 animate-float cursor-default ${className}`}
      fill="none"
    >
      <path
        d="M8 30 C 4 20, 14 8, 22 14 C 30 20, 20 34, 12 28 C 6 24, 12 12, 22 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}