import "./SquareGrid.scss";
import Controls from "./components/Controls";
import Tiles from "./components/Tiles";
import useShapePercentages from "./hooks/useShapePercentages";

function App() {
  const {
    trianglePercentage,
    circlePercentage,
    setTrianglePercentage,
    setCirclePercentage,
  } = useShapePercentages();

  return (
    <div className="square-grid">
      <Controls
        trianglePercentage={trianglePercentage}
        setTrianglePercentage={setTrianglePercentage}
        circlePercentage={circlePercentage}
        setCirclePercentage={setCirclePercentage}
      />
      <Tiles
        trianglePercentage={trianglePercentage}
        circlePercentage={circlePercentage}
      />
    </div>
  );
}

export default App;
