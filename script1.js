
const playerOne = {
  name: "tim",
  marker: "X",
  setName (playerName) {
    this.name = playerName;
  },
};

const playerTwo = {
  name: "bob",
  marker: "O",
  setName (playerName) {
    this.name = playerName;
  },
};

const gBoard = {
  board: [["", "", ""], ["", "", ""], ["", "", ""]],
  reset: function() {
    gBoard.board = [["", "", ""], ["", "", ""], ["", "", ""]];
    game.turn = 0;
    rcells = document.querySelectorAll(".cell");
    for (const cell of rcells) {
      cell.textContent = "";
    };
    let output1 = document.querySelector(".message");
    output1.textContent = "";
  },
};

const game = {
  turn: 0,
  firstPlayer: playerOne,
  secondPlayer: playerTwo,
  currentPlayer: this.firstPlayer,
  placeMarker: function(event) {
    if ((game.turn % 2) === 0) {
      game.currentPlayer = game.firstPlayer;
    } else {
      game.currentPlayer = game.secondPlayer;
    };
    let row = event.target.getAttribute("data-row");
    let col = event.target.getAttribute("data-col");
    gBoard.board[row][col] = game.currentPlayer.marker;
    event.target.textContent = game.currentPlayer.marker;
    game.gameCheck();
    game.turn++;
  },
  gameCheck: function() {
    if (gBoard.board[0][0] !== "") {
      if (((gBoard.board[0][0] === gBoard.board[0][1]) && (gBoard.board[0][1] === gBoard.board[0][2])) || ((gBoard.board[0][0] === gBoard.board[1][0]) && (gBoard.board[1][0] === gBoard.board[2][0])) || ((gBoard.board[0][0] === gBoard.board[1][1]) && (gBoard.board[1][1] === gBoard.board[2][2]))) {
        game.winner(game.currentPlayer);
      };
    };
    if (gBoard.board[1][1] !== "") {
      if (((gBoard.board[0][1] === gBoard.board[1][1]) && (gBoard.board[1][1] === gBoard.board[2][1])) || ((gBoard.board[1][0] === gBoard.board[1][1]) && (gBoard.board[1][1] === gBoard.board[1][2])) || ((gBoard.board[2][0] === gBoard.board[1][1]) && (gBoard.board[1][1] === gBoard.board[0][2]))) {
        game.winner(game.currentPlayer);
      };
    };
    if (gBoard.board[2][2] !== "") {
      if (((gBoard.board[2][0] === gBoard.board[2][1]) && (gBoard.board[2][1] === gBoard.board[2][2])) || ((gBoard.board[0][2] === gBoard.board[1][2]) && (gBoard.board[1][2] === gBoard.board[2][2]))) {
        game.winner(game.currentPlayer);
      };
    };
    if (game.turn >= 8) {
      game.tiem();
    }
  },
  winner: function(player) {
    let output1 = document.querySelector(".message");
    output1.textContent = `${player.name} is the winner!`;
  },
  tiem: function() {
    let output1 = document.querySelector(".message");
    output1.textContent = "It's a tie!";
  },
};

let cells = document.querySelectorAll(".cell");
for (const cell of cells) {
  cell.addEventListener("click", game.placeMarker);
};
let reset = document.querySelector(".rstbtn");
reset.addEventListener("click", gBoard.reset);


// What is needed for game logic?
// ------------------------------

// Players:
// --------
// Each player needs a name.
// Each player needs a mark to place on the board.

// Game Board:
// -----------
// Game board will consist of 9 spaces, 3 rows/ 3 columns.
// Players should be able to click on a space on the page and have their mark added
// to the corresponding space in the array.

// Who goes first?:
// ----------------
// Could have both players roll a 6 sided die to determine who goes first.
// Could easily implement this with a random int function.

// Players place marks till someone wins:
// --------------------------------------
// Need a function for swapping player turns and displaying who's turn it currently is.
// When a space is clicked it should add that player's mark to the space clicked.
// Then it should automatically switch to the other player's turn.
// Each time a mark is placed a function will run to detect which marks are on the board
// and if there is a winner or if it's a tie.

// Keeping score:
// --------------
// Add a counter to each player to keep score of their wins.

// Reset button:
// -------------
// Need a button to reset the board.
// Need a button to reset players and player scores.


// Game Logic Pseudocode:
// ----------------------
// Variable: turn = 0
// Variable: Player 1
// Variable: Player 2
// Function: Place Marker - inputs(event)
//  if Turn is even one player goes, else other player goes
//  row = get event target row from html
//  col = get event target column from html
//  gameboard(row)(column) = current player marker
//  increment turn (even odd flip flop for player turn tracking)