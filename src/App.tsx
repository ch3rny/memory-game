import React from "react";
import { GameBoard } from "components/game-board";

const App = () => {
  return (
    <div className="app">
      <header className="header">Memory Game</header>
      <main className="content">
        <GameBoard />
      </main>
    </div>
  );
};

export default App;
