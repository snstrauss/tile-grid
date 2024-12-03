import React, { useState } from "react";
// import "./App.scss";
import ChooseApp from "./ChooseApp/ChooseApp";
import { SelectedApp } from "./@types/app.types";
import SquareGrid from "./apps/SquareGrid/SquareGrid";
import HexGrid from "./apps/HexGrid/HexGrid";

const App: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<SelectedApp>(null);

  return (
    <div className="app">
      {selectedApp === "square" ? (
        <SquareGrid />
      ) : selectedApp === "hex" ? (
        <HexGrid />
      ) : (
        <ChooseApp onSelect={setSelectedApp} />
      )}
    </div>
  );
};

export default App;
