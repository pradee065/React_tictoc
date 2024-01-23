import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
function App() {
  

  return (
    <main>
      <div id="game-container"> 
        <ol id="players">
          <Player initialName="player 1" symbol="0"/>
          <Player initialName="player 2" symbol="X"/>
        </ol>
        <GameBoard />
      </div>
      Result Board
    </main>
  )
}

export default App
