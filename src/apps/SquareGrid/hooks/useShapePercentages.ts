import { useState } from "react";

export default function useShapePercentages() {
  const [trianglePercentage, setTrianglePercentageState] = useState(50);
  const [circlePercentage, setCirclePercentageState] = useState(30);

  const setTrianglePercentage = (newTrianglePercentage: number) => {
    const total = newTrianglePercentage + circlePercentage;
    setTrianglePercentageState(newTrianglePercentage);
    setCirclePercentageState(
      total > 100 ? Math.max(0, 100 - newTrianglePercentage) : circlePercentage
    );
  };

  const setCirclePercentage = (newCirclePercentage: number) => {
    const total = trianglePercentage + newCirclePercentage;
    setCirclePercentageState(newCirclePercentage);
    setTrianglePercentageState(
      total > 100 ? Math.max(0, 100 - newCirclePercentage) : trianglePercentage
    );
  };

  return {
    trianglePercentage,
    circlePercentage,
    setTrianglePercentage,
    setCirclePercentage,
  };
}
