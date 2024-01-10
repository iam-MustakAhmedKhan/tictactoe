import Board from "./Board";

const Game = () => {
  return (
      <div className="bg-blue-950 flex items-center justify-center h-[100vh] w-full">
          <div className=" flex justify-center">
              <Board />
          </div>
      </div>
  );
}

export default Game