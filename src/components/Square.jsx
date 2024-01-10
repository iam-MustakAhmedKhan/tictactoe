/* eslint-disable react/prop-types */
export const Square = ({ value, onSquareClick }) => {
    return (
        <button
            className="text-white text-2xl h-20 w-20 border m-1"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
};
