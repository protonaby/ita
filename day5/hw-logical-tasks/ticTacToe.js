function ticTacToe(board) {
  if ([...board].flat().indexOf(0) >= 0)
    return -1;
  if (checkIfWon(board, 1))
    return 1;
  if (checkIfWon(board, 2))
    return 2;
  return 0;
}

function checkIfWon(board, s) {
  let result = false;

  board.forEach(value => {
    if (value.every(e => e == s))
      result = true;
  });

  if (result) return result;

  let transposedBoard = board[0].map((col, i) => board.map(row => row[i]));

  transposedBoard.forEach(value => {
    if (value.every(e => e == s))
      result = true;
  });

  if (result) return result;

  if (board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[2][2] == s)
    result = true;

  if (result) return result;

  if (board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[2][0] == s)
    result = true;
  return result;
}

//////////Testing///////////////////////////////////////////////////////////////
let board = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0]
];
console.log(ticTacToe(board) == -1);

board = [
  [1, 1, 1],
  [2, 1, 2],
  [2, 1, 2]
];
console.log(ticTacToe(board) == 1);

 board = [
  [2, 1, 2],
  [1, 1, 1],
  [2, 1, 2]
];
console.log(ticTacToe(board) == 1);

 board = [
  [2, 1, 2],
  [2, 1, 2],
  [1, 1, 1]
];
 board = [
  [2, 1, 2],
  [1, 1, 2],
  [2, 1, 1]
];
console.log(ticTacToe(board) == 1);

 board = [
  [2, 1, 1],
  [1, 2, 1],
  [2, 1, 2]
];
console.log(ticTacToe(board) == 2);

 board = [
  [2, 2, 1],
  [2, 1, 1],
  [1, 1, 2]
];
console.log(ticTacToe(board) == 1);

 board = [
  [1, 2, 2],
  [2, 1, 1],
  [1, 1, 2]
];

console.log(ticTacToe(board) == 0);
