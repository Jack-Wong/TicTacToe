class View {
  constructor(game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", event => {
      const target = event.target;
      const $target = $(target);
      this.makeMove($target);
    });
  };

  makeMove($square) {
    const pos = $square.data("pos").split(",");
    const currentPlayer = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.text(currentPlayer);
    $square.off("mouseenter mouseleave");
    $square.css("background-color", "white");

    if (this.game.isOver()) {
      alert(this.game.winner() + " is the winner! Please refresh to start a new game.");
    }
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
