/* eslint-disable react/prop-types */
import { calculateWinner } from "../utils/calculateWinner";
import { Square } from "./Square";

const Board = ({ squares, onPlay, xIsNext }) => {
    
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner ${winner}`;
    } else {
        status = `Next player ${xIsNext ? "X" : "O"}`;
    }

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);

    };

    return (
        <>
            <div className="text-3xl text-white">
                {status}
                <div className="grid grid-cols-3">
                    {squares.map((a, i) => (
                        <Square
                            key={i}
                            value={a}
                            onSquareClick={() => handleClick(i)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Board;
