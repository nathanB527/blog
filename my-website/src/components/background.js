import { useEffect } from "react";
export default function AsciiBackground() {
  useEffect(() => {
    const asciiEl = document.createElement("div");

    const fill = () => {
      asciiEl.innerHTML = "";
      const cols = Math.floor(window.innerWidth / 20);

      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.4) continue; // ~60% chance of seaweed per column

        const height = Math.floor(Math.random() * 5) + 2;
        const stalk = document.createElement("div");
        stalk.style.cssText = `
            position: absolute;
            bottom: 0;
            left: ${c * 20}px;
            color: rgba(0, 200, 100, 0.8);
            font-family: monospace;
            font-size: 14px;
            line-height: 1.4;
            white-space: pre;
          `;

        let seg = "";
        for (let h = 0; h < height; h++) {
          seg += (h % 2 === 0 ? "(" : ")") + "\n";
        }
        stalk.textContent = seg;
        asciiEl.appendChild(stalk);
      }
    };
    fill();
    window.addEventListener("resize", fill);
    document.body.appendChild(asciiEl);

    return () => {
      window.removeEventListener("resize", fill);
      asciiEl.remove();
    };
  }, []);
  return null;
}
