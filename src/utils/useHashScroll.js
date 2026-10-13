import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      document
        .getElementById(location.hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);
}
