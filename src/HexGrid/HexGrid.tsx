import { useState } from "react";
import "./HexGrid.scss";
import Upload from "../../components/Upload";
import HoneycombGrid from "../../components/HoneycombGrid";

export default function HexGrid() {
  const [image, setImage] = useState<string | null>(null);

  function onGotImage(imgStr: string) {
    setImage(imgStr);
  }

  return (
    <div className="app">
      <h1>Hexagonal Tile Grid</h1>
      <Upload onGetImage={onGotImage} />
      <HoneycombGrid image={image} />
    </div>
  );
}
