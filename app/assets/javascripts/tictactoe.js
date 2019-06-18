// Code your JavaScript / jQuery solution here
//global variables

let turn = 0
let stocks = []
//functions

function player() {
    if(turn % 2 === 0) {
        turn += 1
        return "X";
    }
    else {
        turn += 1
        return "O";
    };
};

function updateState(square) {
   square.innerHTML = player()
};

function setMessage() {

};
