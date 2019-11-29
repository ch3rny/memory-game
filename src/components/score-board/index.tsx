import React from "react";

interface ScoreBoardProps {
  movesCount: number;
  onClick: () => void;
}

export const ScoreBoard = ({ movesCount, onClick }: ScoreBoardProps) => {
  return (
    <div className="score-board">
      <h1>Congratulations!!!</h1>
      <p> You won by {movesCount} moves</p>
      <button className="reset-button" onClick={onClick}>
        Start new game
      </button>
    </div>
  );
};
