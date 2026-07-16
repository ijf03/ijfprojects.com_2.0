import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
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
  }, [hash]);

  return null;
}

export default ScrollToHash;