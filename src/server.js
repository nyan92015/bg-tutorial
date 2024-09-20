// server.js

import { Server } from 'boardgame.io/server';
import path from 'path';
import serve from 'koa-static';
import { TicTacToe } from './Game';

const server = Server({ 
    games: [TicTacToe],
    origins: ['https://bg-tutorial.onrender.com/'] 
});
const PORT = process.env.PORT || 8000;

// Build path relative to the server.js file
const frontEndAppBuildPath = path.resolve(__dirname, './build');
server.app.use(serve(frontEndAppBuildPath))

server.run(PORT, () => {
  server.app.use(
    async (ctx, next) => await serve(frontEndAppBuildPath)(
      Object.assign(ctx, { path: 'index.html' }),
      next
    )
  )
});