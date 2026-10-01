import confetti from "canvas-confetti";

export const triggerChorokConfetti = (event?: React.MouseEvent) => {
  const matchaColors = ["#22C55E", "#16A34A", "#86EFAC", "#FEF08A", "#F472B6", "#FFFFFF"];

  if (event) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      origin: { x, y },
      particleCount: 45,
      spread: 60,
      startVelocity: 25,
      colors: matchaColors,
      ticks: 200,
      gravity: 0.9,
      scalar: 0.9,
      shapes: ["circle", "square"],
    });
  } else {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: matchaColors,
    });
  }
};
