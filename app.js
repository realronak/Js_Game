// Prompt the user to enter their name
let na = prompt("Enter your name: ");

// Welcome the user to the game
alert("Welcome, " + na + "! Let's play a game.");

// Generate a random number between 1 and 100
let number = Math.floor(Math.random() * 100 + 1);

// Initialize the number of guesses to 0
let guesses = 0;

// Initialize the game status as not won
let hasWon = false;

// While the user has not won and the number of guesses is less than 10
while (guesses < 10 && !hasWon) {
    // Prompt the user to guess a number
    let guess = parseInt(prompt("Guess a number between 1 and 100: "));
    // Increment the number of guesses
    guesses++;

    // Check if the guess is correct
    if (guess === number) {
        // Update the game status as won
        hasWon = true;
        // Congratulate the user on winning
        alert("Congratulations, you won in " + guesses + " guesses!");
    }
    // Check if the guess is too low
    else if (guess < number) {
        alert("Your guess is too low. Try again.");
    }
    // The guess must be too high
    else {
        alert("Your guess is too high. Try again.");
    }
}

// If the user has not won
if (!hasWon) {
    // Inform the user that they lost and what the correct number was
    alert("Sorry, you ran out of guesses. The correct number was " + number + ".");
}
