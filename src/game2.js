let board = {
  1: ' 1 ',
  2: ' 2 ',
  3: ' 3 ',
  4: ' 4 ',
  5: ' 5 ',
  6: ' 6 ',
  7: ' 7 ',
  8: ' 8 ',
  9: ' 9 ',
};

const winCombinaison = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,5,9],
  [3,5,7],
  [1,4,7],
  [2,5,8],
  [3,6,9],
]



function displayBoard() {
  console.log('\n' +
    board[1] + '|' + board[2] + '|' + board[3] + '\n' +
    board[4] + '|' + board[5] + '|' + board[6] + '\n' +
    board[7] + '|' + board[8] + '|' + board[9] + '\n'
  );
}

function changeBoardValue(index, sign) {
  board[index] = ' ' + sign + ' ';
  displayBoard();
}

function isPlayed(index){
  return board[index] === ' X ' || board[index] === ' O ';
}

function isVictory(index) {
  let victory = false
  winCombinaison.forEach((value) => {
    console.log(value);
    if (value.includes(index)) {
      if (board[value[0]] === board[value[1]] && board[value[1]] === board[value[2]]) {
        victory = true;
      }
    }
  })
  console.log(index);
  console.log(victory);
  return victory;
};

// changeBoardValue(1,'X');
// console.log(isVictory(1));
//
// changeBoardValue(4,'O');
// console.log(isVictory(4));
//
// changeBoardValue(2,'X');
// console.log(isVictory(2));
//
// changeBoardValue(5,'O');
// console.log(isVictory(5));
//
// changeBoardValue(3,'X');
// console.log(isVictory(3));
