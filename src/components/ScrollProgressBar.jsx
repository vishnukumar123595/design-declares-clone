
import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollable = scrollHeight - clientHeight;

      const percent = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
      setScrollPercent(percent);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "8px",
        backgroundColor: "#FF5A00", // Customize to match your brand
        width: `${scrollPercent}%`,
        transition: "width 0.2s ease-out",
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollProgressBar;

