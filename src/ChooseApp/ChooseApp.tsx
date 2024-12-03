import { SelectedApp } from "../@types/app.types";

type ChooseAppProps = {
  onSelect: (selectedApp: SelectedApp) => void;
};

export default function ChooseApp({ onSelect }: ChooseAppProps) {
  return (
    <div>
      <button onClick={() => onSelect("square")}>square</button>
      <button onClick={() => onSelect("hex")}>hex</button>
    </div>
  );
}
