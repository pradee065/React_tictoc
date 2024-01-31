import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";
function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? '0' : 'X');
    setGameTurns((prevTurn) => {
        let currentActivePlayer = 'X';
        if(prevTurn.length && prevTurn[0].player === 'X'){
          currentActivePlayer = '0';
        }
        const updatedTurn = [{square : {row: rowIndex, col: colIndex}, player : currentActivePlayer},...prevTurn];
        return updatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container"> 
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="0" isActive={activePlayer === '0'}/>
          <Player initialName="player 2" symbol="X" isActive={activePlayer === 'X'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
