import { ChangeEventHandler } from "react";

type NumberSetter = (num: number) => void;

function setInt(setter: NumberSetter): ChangeEventHandler<HTMLInputElement> {
  return (ev) => setter(Number(ev.currentTarget.value));
}

type ControlsProps = {
  trianglePercentage: number;
  circlePercentage: number;
  setTrianglePercentage: NumberSetter;
  setCirclePercentage: NumberSetter;
};

export default function Controls({
  trianglePercentage,
  setTrianglePercentage,
  circlePercentage,
  setCirclePercentage,
}: ControlsProps) {
  return (
    <div className="controls">
      <h2>Shape Tiles Configuration</h2>
      <label>
        Triangles (%):
        <input
          type="number"
          value={trianglePercentage}
          onChange={setInt(setTrianglePercentage)}
          min="0"
          max="100"
        />
      </label>
      <label>
        Circles (%):
        <input
          type="number"
          value={circlePercentage}
          onChange={setInt(setCirclePercentage)}
          min="0"
          max="100"
        />
      </label>
      <div>
        <p>Remaining Tiles: {100 - trianglePercentage - circlePercentage}%</p>
      </div>
    </div>
  );
}
