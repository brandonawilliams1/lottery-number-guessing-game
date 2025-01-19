const minNum = 1000;
const maxNum =10000;
const answer = Math.floor(Math.random() * (maxNum-minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

        guess = window.prompt(`Pick 4 numbers for your shot at winning $10,000`);
        guess = Number(guess);
        running = false;
    
};

