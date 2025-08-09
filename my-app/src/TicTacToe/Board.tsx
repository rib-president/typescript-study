import { useState } from "react";
import { Square, SquareValue } from "./Square";

const calculateWinner = (board: SquareValue[]) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const winnerLine of winnerLines) {
    const [a, b, c] = winnerLine;
    if (
      board[a] === board[b] &&
      board[b] === board[c] &&
      board[a] === board[c] &&
      board[a] !== "-"
    ) {
      return board[a];
    }
  }
  return "-";
};

export function Board() {
  const [board, setBoard] = useState<SquareValue[]>(Array(9).fill("-"));
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState<SquareValue>("-");
  const squareClick = (index: number) => {
    const newBoard = [...board];
    if (newBoard[index] !== "-") return;
    if (winner !== "-") return;
    newBoard[index] = xTurn ? "X" : "O";
    const calculatedWinner = calculateWinner(newBoard);
    if (calculatedWinner !== "-") {
      console.log("winner is", calculatedWinner);
      setWinner(calculatedWinner);
    }
    setBoard(newBoard);
    setXTurn(!xTurn);
  };

  return (
    <div>
      {winner === "-" ? (
        <h2>Next Player : {xTurn ? "X" : "O"}</h2>
      ) : (
        <h2>Winner : {winner}</h2>
      )}

      <div role="group">
        {[0, 1, 2].map((value, index) => {
          return (
            <Square value={board[value]} onClick={() => squareClick(value)} />
          );
        })}
      </div>

      <div role="group">
        {[3, 4, 5].map((value, index) => {
          return (
            <Square value={board[value]} onClick={() => squareClick(value)} />
          );
        })}
      </div>

      <div role="group">
        {[6, 7, 8].map((value, index) => {
          return (
            <Square value={board[value]} onClick={() => squareClick(value)} />
          );
        })}
      </div>
    </div>
  );
}
