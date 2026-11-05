import { useSyncExternalStore } from "react";

/* returns true while the given CSS media query matches; false during server render */
const useMediaQuery = (query) =>
  useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );

export default useMediaQuery;
