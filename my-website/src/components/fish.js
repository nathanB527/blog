import { useEffect } from "react";

export default function AsciiFish() {
  useEffect(() => {
    let x = 0,
      y = 0;
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
    document.body.appendChild(fishEl);

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    let fishX = 0,
      fishY = 0,
      lastX = 0;
    const SPEED = 2;
    let facing = "right";
    const animate = () => {
      const offset = 70; // how far from cursor the fish rests
      const targetX = facing === "right" ? x - offset : x - 25;
      const targetY = y;

      const dx = targetX - fishX;
      const dy = targetY - fishY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 30) {
        fishX += (dx / dist) * SPEED;
        fishY += (dy / dist) * SPEED;
      }
      if (dist > 20) {
        facing = fishX + 20 > x ? "left" : "right";
      }
      fishEl.textContent = facing === "left" ? `<º)))><` : `><(((º>`;
      fishEl.style.left = `${fishX + 15}px`;
      fishEl.style.top = `${fishY - 10}px`;

      if (Math.abs(dx) > 2) {
        lastX = fishX;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      fishEl.remove();
    };
  }, []);
  return null;
}
