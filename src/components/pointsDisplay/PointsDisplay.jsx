import "./pointsDisplay.css";

export default function PointsDisplay({ score, bestScore }) {
  return (
    <div className="points-display-container">
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}
