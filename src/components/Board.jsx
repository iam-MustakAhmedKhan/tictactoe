import { useState } from "react";
import { Square } from "./Square";

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext?"X":"O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
    }

    return (
        <div className="grid grid-cols-3">
            {squares.map((a, i) => (
                <Square key={i} value={a} onSquareClick={()=>handleClick(i)} />
            ))}
        </div>
    );
}

export default Board