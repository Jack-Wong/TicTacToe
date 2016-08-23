class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", event => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      console.log($currentTarget);
      this.makeMove($currentTarget);
    });
  };

  makeMove($square) {
    const pos = $square.attr("data-pos");
    const currentPlayer = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.css("background-color", "white");
  }

  setupBoard() {
    for(var rowIdx = 0; rowIdx < 3; rowIdx++) {
      const $row = $('<ul>').addClass("row");
      for(var colIdx = 0; colIdx < 3; colIdx++) {
        const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);
        $square.hover( () => {
          const $square = $(event.currentTarget);
          $square.css("background-color", 'yellow');
        }, () => {
          const $square = $(event.currentTarget);
          $square.css("background-color", 'gray');
        });
        $row.append($square);
      }
      this.$el.append($row);
    }
  };
}

module.exports = View;
