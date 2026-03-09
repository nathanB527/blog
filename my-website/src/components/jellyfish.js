import { useEffect } from "react";

export default function asciiJelly() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.hidden) return;
      if (Math.random() < 0.2) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        let currentX = Math.random() * windowWidth;
        let currentY = windowHeight;
        const SPEED = -0.5;

        let jellyEl = document.createElement("div");
        jellyEl.style.cssText = `
          position: fixed;
          pointer-events: none;
          z-index: 1;
          font-family: monospace;
          font-size: 30px;
          color: #ff6eb4;
          white-space: pre;
          `;
        jellyEl.textContent = `ଳ`;
        jellyEl.style.top = `${currentX}px`;
        jellyEl.style.left = `${currentX}px`;
        document.body.appendChild(jellyEl);

        const swim = () => {
          currentY += SPEED;
          jellyEl.style.top = `${currentY}px`;

          // Fish go bye bye
          if (currentY > windowHeight + 50 || currentY < -50) {
            jellyEl.remove();
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
