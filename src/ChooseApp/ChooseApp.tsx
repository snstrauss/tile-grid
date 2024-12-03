import "./ChooseApp.scss";
import { SelectedApp } from "../@types/app.types";
import squareGridImg from "../assets/squaregrid.png";
import hexGridImg from "../assets/catgrid.png";

type ChooseAppProps = {
  onSelect: (selectedApp: SelectedApp) => void;
};

export default function ChooseApp({ onSelect }: ChooseAppProps) {
  return (
    <div className="choose-app">
      <h1>select app</h1>
      <div className="buttons">
        <button onClick={() => onSelect("square")}>
          <h3>square</h3>
          <img src={squareGridImg} />
        </button>
        <button onClick={() => onSelect("hex")}>
          <h3>hex</h3>
          <img src={hexGridImg} />
        </button>
      </div>
    </div>
  );
}
