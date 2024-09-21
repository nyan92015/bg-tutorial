import React from 'react';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';


const App = () => (
 <Lobby
  gameServer={`https://bg-tutorial.onrender.com`}
  lobbyServer={`https://bg-tutorial.onrender.com`}
  gameComponents={[
    { game: TicTacToe, board: TicTacToeBoard }
  ]}
/>
);

export default App;
