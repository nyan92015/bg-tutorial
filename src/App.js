import React from 'react';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer'
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
multiplayer: SocketIO({ server: 'bg-tutorial.railway.internal' }),
});

const App = () => (
  <div>
 <TicTacToeClient playerID="0" />
 <TicTacToeClient playerID="1" />
  </div>
);

export default App;