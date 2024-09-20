const { Server, Origins } = require('boardgame.io/server');

const server = Server({
  // Provide the definitions for your game(s).
  games: [TicTacToe],

  // Provide the database storage class to use.
  db: new DbConnector(),

  origins: [
    // Allow your game site to connect.
    'https://bg-tutorial-3nouersax-nyan92015s-projects.vercel.app',
    // Allow localhost to connect, except when NODE_ENV is 'production'.
    Origins.LOCALHOST_IN_DEVELOPMENT
  ],
});

server.run(8000);