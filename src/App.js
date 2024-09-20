import React from 'react';
import { Lobby } from 'boardgame.io/react';
import { TicTacToeBoard } from './Board';
import { TicTacToe } from './Game';

const server = `https://yourapplication.herokuapp.com`;
const importedGames = [{ game: TicTacToe, board: TicTacToeBoard }];

export default () => (
  <div>
    <h1>Lobby</h1>
    <Lobby gameServer={server} lobbyServer={server} gameComponents={importedGames} />
  </div>
);