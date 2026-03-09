import { useEffect } from "react";

export default function asciiFishSchool() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hidden) return;
      if (Math.random() < 0.2) {
        let fishDirection = Math.random() < 0.5 ? "left" : "right";
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        let currentX = fishDirection === "right" ? 0 : windowWidth;
        let currentY = Math.random() * windowHeight;
        const SPEED = 0.8;

        let fishEl = document.createElement("div");
        fishEl.style.cssText = `
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          font-family: monospace;
          font-size: 18px;
          color: #00ffff;
          white-space: pre;
          `;
        fishEl.textContent = fishDirection === "right" ? `>()` : `()<`;
        fishEl.style.top = `${currentY}px`;
        fishEl.style.left = `${currentX}px`;
        document.body.appendChild(fishEl);

        const swim = () => {
          currentX += fishDirection === "right" ? SPEED : -SPEED;
          fishEl.style.left = `${currentX}px`;

          // Fish go bye bye
          if (currentX > windowWidth + 50 || currentX < -50) {
            fishEl.remove();
            return;
          }
          requestAnimationFrame(swim);
        };
        requestAnimationFrame(swim);

        // 20% chance, runs every 3 seconds
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return null;
}
