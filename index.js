const minNum = 1000;
const maxNum =10000;
const answer = Math.floor(Math.random() * (maxNum-minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

//condition to run game
while(running){

        guess = window.prompt(`Pick 4 numbers for your shot at winning $10,000`);
        guess = Number(guess);
        console.log(typeof(guess),guess);

        //condition to check if input is a number and if input is a match
        if(isNaN(guess)){
           window.alert("please enter 4 valid numbers!");
        } else if(guess < minNum || guess > maxNum){
            window.alert("please enter 4 valid numbers!");
        }
        else{
            attempts++;
            if(guess < answer){
                window.alert(`Your Numbers ${guess} do not match the draw ${answer} better luck next time`);
            } else if( guess > answer){
                window.alert(`Your Numbers ${guess} do not match the draw ${answer} better luck next time`);
            } else{
                window.alert(`Your Numbers ${guess} match the lucky numbers ${answer} you have won $10,000 `);
                running = false;
            }
        }
        
        
        
    
};

