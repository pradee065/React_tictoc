import { useState } from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";

function deriveActivePlayer(gameTurns){
  let currentActivePlayer = 'X';
    if(gameTurns.length && gameTurns[0].player === 'X'){
        currentActivePlayer = '0';
    }
    return currentActivePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  //const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurns);
  function handleSelectSquare(rowIndex,colIndex){
    //setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? '0' : 'X');
    deriveActivePlayer(gameTurns);
    setGameTurns((prevTurn) => {
      const currentActivePlayer = deriveActivePlayer(prevTurn);
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
