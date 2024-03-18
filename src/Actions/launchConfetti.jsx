import confetti from "canvas-confetti";

const launchConfetti = (e) => {
  // Calculate the button's position
  const rect = e.target.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Convert button center to relative position (0 to 1) for confetti origin
  const originX = centerX / window.innerWidth;
  const originY = centerY / window.innerHeight;

  confetti({
    zIndex: 999,
    particleCount: 100,
    spread: 70,
    origin: { x: originX, y: originY }, // Use calculated origin
    colors: ["#00FF00", "#009900", "#006600"], // Various shades of green
  });
};

export default launchConfetti;
