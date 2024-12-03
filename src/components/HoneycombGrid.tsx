import { Hexagon, Honeycomb } from "react-honeycomb";

const numItems = 50;

function getRandomInt(min: number, max: number) {
  const minCeil = Math.ceil(min);
  const maxFloor = Math.floor(max);
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}

const array = Array.from({ length: numItems }).map((_, idx) => String(idx));

type GridProps = {
  image: string | null;
};

export const NO_IMAGE = "no-image";

export default function HoneycombGrid({ image }: GridProps) {
  const isNoImage = image === NO_IMAGE;

  return (
    image && (
      <Honeycomb
        className="honeycomb"
        columns={10}
        size={85}
        items={array}
        renderItem={() => (
          <Hexagon
            className={`hex-image rotate-${getRandomInt(0, 5)} ${
              isNoImage ? "no-image" : ""
            }`}
          >
            {!isNoImage && <img src={image} />}
          </Hexagon>
        )}
      />
    )
  );
}
