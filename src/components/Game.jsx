import { useState } from "react";
import Board from "./Board";
import History from "./History";
import HistoryButton from "./HistoryButton";

const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const [currentMove, setCurrentMove] = useState(0)
    
    const currentSquare = history[currentMove];

    const handleClick = (nextSquares) => {
        setXIsNext(!xIsNext);
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
    }
    const jumpto = (move) => {
        setCurrentMove(move);
        setXIsNext(move%2==0)
    }

    const moves = history.map((h, move) => {
        if (move > 0) {
            return (
                <HistoryButton
                    jumpto={() => jumpto(move)}
                    key={move}
                    description={`Goto step # ${move}`}
                />
            );
        } else {
            return (
                <HistoryButton
                    jumpto={() => jumpto(move)}
                    key={move}
                    description={`Start The Game`}
                />
            );
        }
    })

  return (
      <div className="bg-blue-950 flex items-center justify-center h-[100vh] w-full">
          <div className=" flex justify-center gap-16">
              <Board
                  squares={currentSquare}
                  xIsNext={xIsNext}
                  onPlay={handleClick}
              />
              <History>
                  {moves}
              </History>
          </div>
      </div>
  );
}

export default Game