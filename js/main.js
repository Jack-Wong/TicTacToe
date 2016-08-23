const View = require('./ttt-view')
const Game = require('../solution/game')

$( () => {
  const game = new Game();
  const el = $('.ttt');
  new View(game, el);
});
