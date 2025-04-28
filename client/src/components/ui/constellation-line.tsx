import React from "react";

interface ConstellationLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  animated?: boolean;
}

const ConstellationLine = ({
  x1,
  y1,
  x2,
  y2,
  animated = true,
}: ConstellationLineProps) => {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={animated ? "constellation-line" : undefined}
      stroke="rgba(255, 255, 255, 0.6)"
      strokeWidth={1}
      strokeDasharray={animated ? "5,3" : undefined}
    />
  );
};

export default ConstellationLine;
