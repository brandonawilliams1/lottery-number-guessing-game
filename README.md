# Number Guessing Game

This simple number guessing game is implemented in JavaScript. The game challenges the player to guess a randomly generated 4-digit number between 1000 and 10000. Forward-thinking includes adding a UI for better user experience in the future.

## JavaScript Code

```javascript
const minNum = 1000;
const maxNum = 10000;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

// Condition to run the game
while (running) {
    guess = window.prompt(`Pick 4 numbers for your shot at winning $10,000`);
    guess = Number(guess);
    console.log(typeof(guess), guess);

    // Condition to check if input is a number and if input is a match
    if (isNaN(guess)) {
        window.alert("Please enter 4 valid numbers!");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter 4 valid numbers!");
    } else {
        attempts++;
        if (guess !== answer) {
            window.alert(`Your Numbers ${guess} do not match the draw ${answer}. Better luck next time! Attempt# ${attempts}`);
            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        } else {
            window.alert(`Your Numbers ${guess} match the draw ${answer}. You're our lucky winner!!`);
            running = false; // Stop the game after winning
        }
    }
}
```

## How It Works

1. **Random Number Generation:**
   - A random 4-digit number is generated between 1000 and 10000.

2. **Game Loop:**
   - The game continues running until the player guesses the correct number.

3. **Player Input:**
   - The player inputs their guess via a `prompt` dialog box.

4. **Validation:**
   - The input is validated to ensure it is a number within the range.
   - If invalid, the player is prompted to re-enter a valid guess.

5. **Feedback:**
   - If the guess does not match, the player is notified, and a new random number is generated.
   - If the guess matches, the player wins, and the game ends.

## Future Enhancements

1. **Build a UI:**
   - Create a user interface with HTML and CSS for a more engaging experience.

2. **Add Animations:**
   - Use animations to enhance feedback (e.g., highlighting incorrect guesses).

3. **Track High Scores:**
   - Store and display the fewest attempts to win in the current session.

4. **Mobile Compatibility:**
   - Ensure the game works seamlessly on mobile devices.

5. **Styling:**
   - Add visual elements like a scoreboard and themed graphics.