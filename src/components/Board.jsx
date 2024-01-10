import { useState } from "react";
import { Square } from "./Square";
import { calculateWinner } from "../utils/calculateWinner";

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares)
    let status;
    if (winner) {
        status =`Winner ${winner}`
    } else {
        status=`Next player ${xIsNext?"X":"O"}`
    }

    const handleClick = (i) => {

        if (squares[i]||calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext?"X":"O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
    }

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
}

export default Board