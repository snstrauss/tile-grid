import useTiles from "../hooks/useTiles";

type TilesProps = {
  trianglePercentage: number;
  circlePercentage: number;
};

export default function Tiles({
  trianglePercentage,
  circlePercentage,
}: TilesProps) {
  const tilesObjects = useTiles(trianglePercentage, circlePercentage);

  return (
    <div className="tiles-container">
      {tilesObjects.map(({ key, shape, multi }) => (
        <div
          key={key}
          className={`tile tile--${shape}`}
          style={{ "--multi": multi }}
        />
      ))}
    </div>
  );
}
