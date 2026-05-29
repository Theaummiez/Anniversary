const COLORS = ["#ff6b9d", "#c44dff", "#ffd700", "#ff9ec3", "#fff", "#4caf50", "#81d4fa"];
const SHAPES = ["💕", "✨", "⭐", "🌟", "💫", "🎆", "🌸"];

export function launchFireworks(bursts = 8) {
  for (let burst = 0; burst < bursts; burst++) {
    setTimeout(() => {
      const cx = 10 + Math.random() * 80;
      const cy = 10 + Math.random() * 60;

      for (let i = 0; i < 35; i++) {
        const el = document.createElement("div");
        const angle = (Math.PI * 2 * i) / 35 + Math.random() * 0.3;
        const dist = 60 + Math.random() * 200;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        const useEmoji = Math.random() > 0.5;
        const size = 4 + Math.random() * 6;

        if (useEmoji) {
          el.textContent = SHAPES[Math.floor(Math.random() * SHAPES.length)];
          el.style.fontSize = `${10 + Math.random() * 16}px`;
        } else {
          el.style.width = `${size}px`;
          el.style.height = `${size}px`;
          el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
          el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        }

        Object.assign(el.style, {
          position: "fixed",
          left: `${cx}vw`,
          top: `${cy}vh`,
          zIndex: "99999",
          pointerEvents: "none",
        });

        el.animate(
          [
            { transform: "translate(0,0) scale(1)", opacity: 1 },
            { transform: `translate(${dx}px, ${dy + 50}px) scale(0.1)`, opacity: 0 },
          ],
          { duration: 900 + Math.random() * 700, easing: "cubic-bezier(0,0.9,0.3,1)", fill: "forwards" },
        );

        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1800);
      }
    }, burst * 350);
  }
}
