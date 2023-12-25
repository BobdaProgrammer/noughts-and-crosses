let move = "O";
let turns = 0;
var end = false;
function check(element) {
    if (!end) {
        if (element.innerText == "") {
            element.innerText = move;
            element.style.color =
              move == "O" ? "rgb(74, 242, 44)" : "rgb(242, 44, 100)";
            move = move == "O" ? "X" : "O";
            turns++;
            let answer = checkBoard();
            document.querySelector(".whowon").innerText = answer;
            document.querySelector(".whowon").style.color =
              answer.startsWith("O") ? "rgb(74, 242, 44)" : "rgb(242, 44, 100)";
        }
    }
}

function checkBoard() {
    let board = document.querySelector(".board").children;
    for (let i = 0; i < board.length; i++){
        if (board[i].children[0].innerText == board[i].children[1].innerText && board[i].children[0].innerText == board[i].children[2].innerText && board[i].children[0].innerText != "") {
            end = true;
            return `${move == "O" ? "X" : "O"} won!!`
        }
    }
    for (let x = 0; x < board.length; x++){
        if (board[0].children[x].innerText == board[1].children[x].innerText && board[0].children[x].innerText == board[2].children[x].innerText && board[0].children[x].innerText != "") {
            end = true;
            return `${move == "O" ? "X" : "O"} won!!`;
        }
    }
    if (
      (board[0].children[0].innerText == board[1].children[1].innerText &&
        board[0].children[0].innerText == board[2].children[2].innerText &&
        board[0].children[0].innerText != "") ||
      (board[0].children[2].innerText == board[1].children[1].innerText &&
        board[2].children[0].innerText == board[0].children[2].innerText &&
        board[0].children[2].innerText != "")
    ) {
      end = true;
      return `${move == "O" ? "X" : "O"} won!!`;
    } else if (turns == 9) {
      end = true;
      return "Draw!!";
    }
    return ""
}