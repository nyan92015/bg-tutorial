// server.js
import { Server } from 'boardgame.io/server';
import path from 'path';
import serve from 'koa-static';
import Koa from 'koa';
import { TicTacToe } from './Game';

const app = new Koa();
const server = Server({ games: [TicTacToe] });
const PORT = process.env.PORT || 8000;

// ビルドされたフロントエンドのパスを設定
const frontEndAppBuildPath = path.resolve(__dirname, './build');

// 静的ファイルを提供
app.use(serve(frontEndAppBuildPath));

// ゲームサーバーのミドルウェアを設定
app.use(server.app);

// 最後にフロントエンドのindex.htmlを返すミドルウェア
app.use(async (ctx, next) => {
  await serve(frontEndAppBuildPath)(ctx, async () => {
    ctx.path = 'index.html';
    await next();
  });
});

// サーバーを起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
