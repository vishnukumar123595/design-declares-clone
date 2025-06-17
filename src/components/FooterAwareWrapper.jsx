import React, { useRef, useEffect, useState } from "react";
import GlobalSupporters from "./GlobalSupporters";

const FooterAwareWrapper = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`footer-aware-wrapper ${isVisible ? "visible" : ""}`}
    >
      <GlobalSupporters />
    </div>
  );
};

export default FooterAwareWrapper;
