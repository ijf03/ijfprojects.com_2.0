import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

      return;
    }

    const elementId = hash.replace("#", "");

    requestAnimationFrame(() => {
      const element = document.getElementById(elementId);

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [pathname, hash]);

  return null;
}

export default ScrollToHash;