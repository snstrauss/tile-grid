import { useState } from "react";
import "./HexGrid.scss";
import Upload from "../../components/Upload";
import HoneycombGrid, { NO_IMAGE } from "../../components/HoneycombGrid";

export default function HexGrid() {
  const [image, setImage] = useState<string | null>(null);

  function onGotImage(imgStr: string) {
    setImage(imgStr);
  }

  return (
    <div className="hex-grid">
      <h1>Hexagonal Tile Grid</h1>
      <Upload onGetImage={onGotImage} />
      <button onClick={() => setImage(NO_IMAGE)} className="no-image">
        use pattern
      </button>
      <HoneycombGrid image={image} />
    </div>
  );
}
