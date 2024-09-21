import React, { useRef, useEffect, useState } from "react";
import "./AnimatedElement.css"; // Import the CSS file

export function AnimatedElement() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (elementRef.current && isAnimating) {
      // Example animation logic: Add a CSS class to trigger animation
      elementRef.current.classList.add("start-animation");
    } else if (elementRef.current) {
      elementRef.current.classList.remove("start-animation");
    }
  }, [isAnimating]);

  return (
    <div>
      <div ref={elementRef} className={isAnimating ? "animated" : ""}>
        Animated Content
      </div>
      <button onClick={() => setIsAnimating(!isAnimating)}>
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
    </div>
  );
}
